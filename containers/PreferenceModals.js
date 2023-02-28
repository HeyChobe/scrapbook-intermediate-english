import Example from "@/components/Example";
import ImportantBox from "@/components/ImportantBox";
import Paragraph from "@/components/Paragraph";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";

export default function PreferenceModals() {
  return (
    <div id="5">
      <Title title="Preference Modals" />
      <ImportantBox text="Modals to help the main verb and the sencence to make a meaning of likes of preferences" />
      <Subtitle info="Grammar Form" />
      <Paragraph li info="Subject + PREFER + ING verb + TO + ING verb" />
      <Paragraph
        li
        info="Subject + LIKE + noun/ING verb + BETTER THAN + noun/ING verb"
      />
      <Paragraph li info="WOULD RATHER (not) + base form verb" />

      <Paragraph li2 info={`Use "THAN" to compare.`} />
      <Example
        example="I’d rather be a sparrow than a snail"
        cite={`"El Condor Pasa," 1970`}
      />
    </div>
  );
}
