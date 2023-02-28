import Example from "@/components/Example";
import ImportantBox from "@/components/ImportantBox";
import Paragraph from "@/components/Paragraph";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";

export default function AdjectiveClauses() {
  return (
    <div id="9">
      <Title title="Adjective Clauses" />

      <ImportantBox text="Words that connect the main clause with the adjective clause" />
      <Subtitle info="WHO/THAT + verb" />

      <Paragraph li info="Subject pronoun for people." />
      <Example
        example="I must wait until there comes one
boy who’ll know the answer when I ask…"
        cite={`"Who?," 1925`}
      />
      <Subtitle info="THAT/WHICH + verb" />
      <Paragraph li info="Describe things." />
      <Example
        example="Images of broken light which dance before me like a million eyes"
        cite={`"Across the Universe," 1970`}
      />
      <Subtitle info="WHOSE + noun + verb" />
      <Paragraph li info="Join the clauses with possesive pronoun." />
      <Example
        example="Whose bed have your boots been under?"
        cite={`"Whose Bed Have Your Boots Been Under?," 1995`}
      />
      <Subtitle info="WHERE + subject + verb" />
      <Paragraph li info="Describes locations." />
      <Example
        example="Follow her down to a bridge by a fountain where rocking horse people eat marshmallow pies"
        cite={`"Lucy in the Sky with Diamonds," 1967`}
      />
      <Subtitle info="WHEN + subject + verb" />
      <Paragraph li info="Describe time words." />
      <Example
        example="You’ll always have my shoulder when you cry I’ll never let go, never say goodbye"
        cite={`"Count on Me," 2010`}
      />
    </div>
  );
}
