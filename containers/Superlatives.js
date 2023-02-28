import Example from "@/components/Example";
import ImportantBox from "@/components/ImportantBox";
import Paragraph from "@/components/Paragraph";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";

export default function Superlatives() {
  return (
    <div id="8">
      <Title title="Superlatives" />
      <ImportantBox text="We use them to compare 3 or more things/people" />
      <Subtitle info="Grammar form" />
      <Paragraph li info="X + be + SUPERLATIVE ADJECTIVE" />

      <Subtitle info="1-2 syllable word" />
      <Paragraph li info="adjective + EST" />
      <Example
        example="My love is brighter than the brightest star"
        cite={`"My Love," 1966`}
      />
      <Subtitle info="2+ syllable word" />
      <Paragraph li info="MOST/LEAST+ adjective" />
      <Example
        example="We've had a break-in at Baker Street. Send your least irritating officers and an ambulance."
        cite="Sherlock, 2-1, 2012"
      />
      <Subtitle
        info={`Use "ONE OF THE" to refers to one of the things or people to compare, but not the only one`}
      />
      <Paragraph
        li
        info="subject + be + ONE OF THE + SUPERLATIVE adjective + plural noun"
      />
      <Subtitle
        info={`Use "HAVE NEVER" to describe an action that refers for something that never succed.`}
      />
      <Paragraph
        li
        info="subject + HAVE NEVER + COMPARATIVE adjective + noun"
      />
    </div>
  );
}
