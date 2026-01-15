// app/case-studies/route.tsx
import { useParams } from "react-router";
import caseStudies from "./data/case-studies.json";

export default function CaseStudyRoute() {
  const { slug } = useParams();

  const caseStudy = caseStudies.find(
    (study) => study.slug === slug
  );

  if (!caseStudy) {
    throw new Response("Not Found", { status: 404 });
  }

  return (
    <article>
      <h1>{caseStudy.title}</h1>
      <p>{caseStudy.description}</p>
      <small>{caseStudy.year}</small>
    </article>
  );
}
