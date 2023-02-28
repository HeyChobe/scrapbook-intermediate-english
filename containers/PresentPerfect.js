import Example from "@/components/Example";
import ImportantBox from "@/components/ImportantBox";
import Paragraph from "@/components/Paragraph";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";

export default function PresentPerfect() {
  return (
    <div id="0">
      <Title title="Present Perfect" />
      <ImportantBox text="Use this grammar tense when it doesn't necesary to bring information about the past because the activity started and finished in the past, unless you use since/for" />
      <Subtitle info="Grammar Form" />
      <Paragraph li info="Subject + HAVE/HAS (not) + Past Participle" />
      <Subtitle info="Unspecified Time" />
      <Paragraph li info="Can be used with repeted events (time)." />
      <Subtitle info="With Since/For" />
      <Paragraph
        li
        info="The activity began in the past and still going on now."
      />
      <Paragraph li info="SINCE: for specific point in the past." />
      <Paragraph li info="FOR: for duration or amount of time." />
      <Subtitle info="Important to Remember" />
      <Paragraph li info={`Use with "HOW OFTEN" questions`} />
      <Example
        example="A: He's your uncle? B: Him? Uh-uh. I've never seen him before"
        cite="Mickey's Twice Upon a Christmas, 2004"
      />
    </div>
  );
}
