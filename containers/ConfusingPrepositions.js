import Example from "@/components/Example";
import Paragraph from "@/components/Paragraph";
import Subtitle from "@/components/Subtitle";

const { default: ImportantBox } = require("@/components/ImportantBox");
const { default: Title } = require("@/components/Title");

export default function ConfusingPrepositions() {
  return (
    <div id="11">
      <Title title="Confusing Prepositions" />
      <ImportantBox text="Correct use of on/in/at" />
      <Subtitle info="On" />
      <Paragraph li info="Use in open spaces and platforms." />
      <Paragraph li info="Also use on days or specific days." />
      <Example
        example="Newspaper taxis appear on the shore
Waiting to take you away"
        cite={`"Lucy in the Sky with Diamonds," 1967`}
      />
      <Subtitle info="In" />
      <Paragraph li info="Use in closed spaces." />
      <Paragraph li info="Also use in weaks, months, years or decades." />
      <Example
        example="Picture yourself in a boat on a river"
        cite={`"Lucy in the Sky with Diamonds," 1967`}
      />
      <Subtitle info="At" />
      <Paragraph li info="Places in general." />
      <Paragraph li info="Also use in hours." />
      <Example
        example="Suddenly someone is there at the turnstile"
        cite={`"Lucy in the Sky with Diamonds," 1967`}
      />
      <Subtitle info="Important to Remember" />
      <Paragraph
        li
        info="In Prepositional Phrases, after nouns use P.Adj and after verbes use P.Adv."
      />
    </div>
  );
}
