import Example from "@/components/Example";
import ImportantBox from "@/components/ImportantBox";
import Paragraph from "@/components/Paragraph";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";

export default function AdjectivesParticiples() {
  return (
    <div id="6">
      <Title title="Adjectives Participles" />
      <ImportantBox text="Adjectives can have different meaning using Present Participle or Past Participle" />
      <Subtitle info="Using Present Participle (-ing)" />
      <Paragraph li info="It means CAUSE" />
      <Example
        example="I’m sitting here in the boring room.
It’s just another rainy Sunday afternoon"
        cite={`"Lemon Tree," 1995)`}
      />
      <Subtitle info="Using Past Participle (-ed)" />
      <Paragraph li info="It means FEELING" />
      <Example
        example="Now I am here, talking to you. 
No wonder I get excited"
        cite={`"The Name of the Game," 1977)`}
      />
      <Subtitle info="Example" />
    </div>
  );
}
