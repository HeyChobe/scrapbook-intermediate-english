import Example from "@/components/Example";
import ImportantBox from "@/components/ImportantBox";
import Paragraph from "@/components/Paragraph";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";

export default function Modals() {
  return (
    <div id="4">
      <Title title="Modals" />
      <ImportantBox text="Group of words that help main verbs" />
      <Subtitle info="Grammar Form" />
      <Paragraph li info="Subject + MODAL + main verb" />
      <Subtitle info="Important to Remember" />
      <Paragraph li info="Modals NEVER change." />
      <Paragraph li info="Main verbs STAY in their original forms.">
        <Paragraph li info={`Use "THAN" to compare.`} />
      </Paragraph>
      <Example
        example="A: His name was V-. B: Well, maybe if you wrote it down?"
        cite="Harry Potter and the Philosopher's Stone, 2001"
      />
    </div>
  );
}
