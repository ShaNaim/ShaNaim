# Deploying shanaimshourov.com to the VPS

One-time setup, done in order. After this, every `git push` to `main`
rebuilds the site and copies it to the server automatically — no server
access needed for routine updates.

## A. Server: create a deploy user and lock down SSH

SSH into the server as whatever user the provider gave you (likely `root`):

```bash
ssh root@103.132.96.121
apt update && apt upgrade -y
adduser deploy               # set a password when prompted, or just press enter through the rest
usermod -aG sudo deploy      # only needed if you'll also use this user for manual admin work
```

On your **local machine**, generate a dedicated key pair just for GitHub
Actions (don't reuse your personal SSH key):

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/shanaimshourov_deploy -N ""
```

This creates `~/.ssh/shanaimshourov_deploy` (private) and
`~/.ssh/shanaimshourov_deploy.pub` (public). Copy the public key to the server:

```bash
ssh-copy-id -i ~/.ssh/shanaimshourov_deploy.pub deploy@103.132.96.121
```

Verify key-based login works before continuing:

```bash
ssh -i ~/.ssh/shanaimshourov_deploy deploy@103.132.96.121
```

## B. Server: firewall

```bash
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
```

**Recommended hardening** (optional but worth it — this is an unmanaged box
with no provider-level protection in front of it): once Cloudflare is proxying
the domain (step D), restrict 80/443 to Cloudflare's IP ranges only, so nobody
can bypass Cloudflare's WAF/DDoS protection by hitting `103.132.96.121`
directly. Run this on the server over SSH, not on your local machine. It
must come *after* the broad `ufw allow 80/tcp` / `443/tcp` rules above are
removed — otherwise those still let everyone through regardless of the rules
below, since ufw matches in rule order. Leave port 22 (SSH) alone; GitHub
Actions needs direct access to it and its runner IPs aren't part of
Cloudflare's ranges. Cloudflare's ranges occasionally change, so steps 2–3
need to be re-run if they do:

```bash
# 1. Remove the broad "allow from anywhere" rules added above
ufw delete allow 80/tcp
ufw delete allow 443/tcp

# 2. Add one allow-rule per Cloudflare IP range (fetches their current list live)
for ip in $(curl -s https://www.cloudflare.com/ips-v4) $(curl -s https://www.cloudflare.com/ips-v6); do
  ufw allow from "$ip" to any port 80,443 proto tcp
done

# 3. Block everyone else on those two ports (must come after step 2)
ufw deny 80,443/tcp

# 4. Confirm
ufw status verbose
```

## C. Server: install nginx and create the web root

```bash
apt install nginx -y
mkdir -p /var/www/shanaimshourov.com
chown -R deploy:deploy /var/www/shanaimshourov.com
```

## D. Cloudflare: DNS + origin certificate

1. In the Cloudflare dashboard → **DNS**: add an `A` record, name `@`,
   content `103.132.96.121`, **Proxied** (orange cloud) — this hides the
   real origin IP and adds Cloudflare's DDoS/WAF protection in front of an
   otherwise-unmanaged box.
2. Add another `A` record, name `www`, same IP, Proxied (nginx will redirect
   `www` → apex — already in `deploy/nginx.conf`).
3. Cloudflare dashboard → **SSL/TLS** → **Origin Server** → **Create
   Certificate**. Accept the defaults (RSA, covering `shanaimshourov.com`
   and `*.shanaimshourov.com`, 15-year validity). Cloudflare shows you a
   certificate and a private key — copy both onto the server:

   ```bash
   mkdir -p /etc/nginx/ssl
   nano /etc/nginx/ssl/cloudflare-origin.pem   # paste the certificate
   nano /etc/nginx/ssl/cloudflare-origin.key   # paste the private key
   chmod 600 /etc/nginx/ssl/cloudflare-origin.key
   ```

4. Cloudflare dashboard → **SSL/TLS** → **Overview** → set the mode to
   **Full (strict)**. (Do this *after* nginx has the origin cert loaded —
   see step E — otherwise requests will fail in the gap.)

## E. Server: nginx site config

Copy `deploy/nginx.conf` from this repo onto the server (e.g. `scp
deploy/nginx.conf deploy@103.132.96.121:/tmp/`), then:

```bash
mv /tmp/nginx.conf /etc/nginx/sites-available/shanaimshourov.com
ln -s /etc/nginx/sites-available/shanaimshourov.com /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t        # should print "syntax is ok" / "test is successful"
systemctl reload nginx
```

Now set Cloudflare SSL/TLS mode to **Full (strict)** if you haven't already
(step D.4).

## F. GitHub: repo secrets

Repo → **Settings** → **Secrets and variables** → **Actions** → **New
repository secret**, add three:

| Name | Value |
|---|---|
| `DEPLOY_HOST` | `103.132.96.121` |
| `DEPLOY_USER` | `deploy` |
| `DEPLOY_SSH_KEY` | contents of `~/.ssh/shanaimshourov_deploy` (the **private** key file, run `cat ~/.ssh/shanaimshourov_deploy` and paste the whole thing including the `BEGIN`/`END` lines) |

The workflow at `.github/workflows/deploy.yml` uses these to build the site
and `rsync` the output to `/var/www/shanaimshourov.com` on every push to
`main`.

## G. First deploy

```bash
git push origin main
```

Watch it run under the repo's **Actions** tab. Once it's green, visit
https://shanaimshourov.com — it should be live. From now on, every push to
`main` redeploys automatically; nothing further to run by hand.

## Troubleshooting

- `nginx -t` fails → check `/etc/nginx/ssl/cloudflare-origin.{pem,key}` exist
  and are readable by the `nginx`/`www-data` user.
- Action fails at the rsync step → confirm the `deploy` user's
  `~/.ssh/authorized_keys` contains the *public* key that matches the
  *private* key stored in `DEPLOY_SSH_KEY`, and that `ufw` isn't blocking
  GitHub's runner IPs on port 22 (SSH isn't restricted to Cloudflare ranges —
  only 80/443 should be).
- Site loads but social share images look broken → re-check the
  `default_type image/png` blocks in `deploy/nginx.conf` are actually present
  in `/etc/nginx/sites-enabled/shanaimshourov.com` on the server.
