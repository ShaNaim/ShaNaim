import { personal, socialLinks, experiences, skills } from "@/data";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const currentJob = experiences.find((job) => job.current);

const socialUrls = socialLinks.filter((link) => link.href.startsWith("http")).map((link) => link.href);

const knownSkills = Object.values(skills)
  .flat()
  .map((skill) => skill.name);

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: SITE_NAME,
    url: SITE_URL,
    email: `mailto:${personal.email}`,
    telephone: personal.phone,
    jobTitle: personal.title,
    description: personal.description,
    knowsAbout: knownSkills,
    sameAs: socialUrls,
    ...(currentJob && {
      worksFor: {
        "@type": "Organization",
        name: currentJob.company,
      },
    }),
  };
}
