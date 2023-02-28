import Example from "@/components/Example";
import ImportantBox from "@/components/ImportantBox";
import Paragraph from "@/components/Paragraph";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";

export default function PastPerfect() {
  return (
    <div id="2">
      <Title title="Past Perfect" />
      <ImportantBox text="The past of the past" />
      <Subtitle info="Grammar Form" />
      <Paragraph li info="HAD (not) + Past Participle" />
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
        example="If you had seen what was on this tape, believe me, you'd have some comments"
        cite="Friends, 1994-2004"
      />
    </div>
  );
}
