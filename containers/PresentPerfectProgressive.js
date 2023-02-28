import Example from "@/components/Example";
import ImportantBox from "@/components/ImportantBox";
import Paragraph from "@/components/Paragraph";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";

export default function PresentPerfectProgressive() {
  return (
    <div id="1">
      <Title title="Present Perfect Pregressive" />
      <ImportantBox text="Show an action that started in the past but sill going on now" />
      <Subtitle info="Grammar Form" />
      <Paragraph li info="Subject + HAVE/HAS (not) + BEEN + ING verb" />
      <Subtitle info="Important to Remember" />
      <Paragraph li info="Don't use adverbs of Present Perfect Tense here." />
      <Paragraph li info={`It's used with "HOW LONG" questions.`} />
      <Example
        example="...But you and your office have been working with the Barman all along."
        cite="The Dark Knight, 2008"
      />
    </div>
  );
}
