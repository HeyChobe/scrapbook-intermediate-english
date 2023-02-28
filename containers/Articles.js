import Example from "@/components/Example";
import ImportantBox from "@/components/ImportantBox";
import Paragraph from "@/components/Paragraph";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";

export default function Articles() {
  return (
    <div id="10">
      <Title title="Articles" />
      <ImportantBox text="Words to use in nouns to refers in singular/plural or even indefined/defined things" />
      <Subtitle info="A" />
      <Paragraph li info="Use with words starting with a consonant sounds." />
      <Paragraph li info={`Also with words starting with "eu, uni, ut".`} />
      <Paragraph
        li
        info="Use to give general facts or introduce something for the first time."
      />
      <Example
        example="I've made a decision. We're going to that mountain"
        cite="The Croods, 2013"
      />
      <Subtitle info="An" />
      <Paragraph li info="Use with words starting with a vowel sounds." />
      <Paragraph
        li
        info="Use to give general facts or introduce something for the first time."
      />
      <Example
        example="Well, I mean, traditionally science fairs are a father-son thing. Well, scientifically, traditions are an idiot thing"
        cite="Rick and Morty, 2014"
      />
      <Subtitle info="The" />
      <Paragraph li info="Use to talk about specific thing." />
      <Paragraph li info="Unique things." />
      <Paragraph li info="Countries related things." />
      <Paragraph li2 info="Currency." />
      <Paragraph
        li2
        info={`Lenguage (only if lenguage noun is before "the English lenguage").`}
      />
      <Paragraph li info="Location related things." />
      <Paragraph li2 info="Oceans, seas and rivers." />
      <Paragraph li2 info="Mountain Ranges." />
      <Paragraph li2 info="Deserts." />
      <Paragraph li2 info="Specific regions." />
      <Paragraph li info="Time related things." />
      <Paragraph li2 info="Decades or important time period." />
      <Example
        example="Get to the ground! Move, move, move! Drop it!"
        cite="Westworld, 1-10, 2016"
      />
    </div>
  );
}
