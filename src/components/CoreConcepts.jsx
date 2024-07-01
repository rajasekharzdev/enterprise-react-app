import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "./mock/data";
export default function CoreConcepts() {
  return (
    <>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem, i) => {
            return <CoreConcept key={i} {...conceptItem} />;
          })}
        </ul>
      </section>
    </>
  );
}
