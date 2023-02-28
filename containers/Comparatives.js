import Example from "@/components/Example";
import ImportantBox from "@/components/ImportantBox";
import Paragraph from "@/components/Paragraph";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";

export default function Comparatives() {
  return (
    <div id="7">
      <Title title="Comparatives" />
      <ImportantBox text="We use them to compare 2 things or people" />
      <Subtitle info="Grammar form" />
      <Paragraph li info="X + be + COMPARATIVE ADJECTIVE + than + Y" />
      <Subtitle info="Important to remember" />
      <Paragraph li info="1-2 syllable word" />
      <Paragraph li2 info="adjective + ER" />
      <Example
        example="Still I know that feeling blue
Is better than living without you"
        cite={`"Yes, I Do," 1983`}
      />
      <Paragraph li info="2+ syllable word" />
      <Paragraph li2 info="MORE/LESS + adjective" />
      <Example
        example="Prision life consists of routine and the more routine"
        cite="The Shawshank Redemption, 1994"
      />
      <Paragraph li info={`Use "AS" to say that 2 things are the SAME`} />
      <Paragraph
        li2
        info="subject1 + be (not) + (JUST/ALMOST) + AS + adjective + AS + subject2"
      />
      <Paragraph li3 info="JUST = EXACTLY" />
      <Paragraph li3 info="ALMOST = NEARLY" />
      <Paragraph li4 info="Close than other but not the same." />
      <Paragraph li4 info={`Don't use "NOT", instead use "NOT QUITE"`} />
    </div>
  );
}
