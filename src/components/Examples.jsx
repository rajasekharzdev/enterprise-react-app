import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "./mock/data";
import Section from "./Section";
import Tabs from "./Tabs";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = !selectedTopic ? (
    <p>Please select a topic</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );

  return (
    <>
      <Section title="Examples" id="examples">
        <Tabs
          buttonsContainer="menu"
          buttons={
            <div>
              <TabButton
                isSelected={selectedTopic === "components"}
                onSelect={() => handleSelect("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onSelect={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onSelect={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onSelect={() => handleSelect("state")}
              >
                State
              </TabButton>
            </div>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    </>
  );
}
