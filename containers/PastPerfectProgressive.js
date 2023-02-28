import Example from "@/components/Example";
import ImportantBox from "@/components/ImportantBox";
import Paragraph from "@/components/Paragraph";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";

export default function PastPerfectProgressive() {
  return (
    <div id="3">
      <Title title="Past Perfect Progressive" />
      <ImportantBox text="When action happens in a period of time but in the past" />
      <Subtitle info="Grammar Form" />
      <Paragraph li info="HAD (not) + BEEN + ING verb" />
      <Subtitle info="Important to Remember" />
      <Paragraph
        li
        info="Don't use this tense when the time is clear (like yesterday...)."
      />
      <Paragraph
        li
        info={`Instead, use "BY THE TIME" or "BY" to be more specific.`}
      />
      <Example
        example="Said he'd been thinking it over"
        cite={`"I'll Never Forget You", 2013`}
      />
    </div>
  );
}
