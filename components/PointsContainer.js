import AdjectiveClauses from "@/containers/AdjectiveClauses";
import AdjectivesParticiples from "@/containers/AdjectivesParticiples";
import Articles from "@/containers/Articles";
import Comparatives from "@/containers/Comparatives";
import ConfusingPrepositions from "@/containers/ConfusingPrepositions";
import Modals from "@/containers/Modals";
import PastPerfect from "@/containers/PastPerfect";
import PastPerfectProgressive from "@/containers/PastPerfectProgressive";
import PreferenceModals from "@/containers/PreferenceModals";
import PresentPerfect from "@/containers/PresentPerfect";
import PresentPerfectProgressive from "@/containers/PresentPerfectProgressive";
import Superlatives from "@/containers/Superlatives";
import styles from "../styles/PointsContainer.module.css";
import Footer from "./Footer";
import Paragraph from "./Paragraph";
import Title from "./Title";

export default function PointsContainer() {
  return (
    <section className={styles.container}>
      <Title title="Summarize" />
      <Paragraph
        info="
        I did this scrapbook as a final assignment of a Intermediate English
        Grammar. Its goal is make a scrapbook that can help to memorize and remember all the important content (that I think) of the course."
      />
      <Paragraph info="You can find here some util points based of Intermediate English Grammar, like definitions, important things to remember, and some cool examples that I found on internet. I hope this single web page can help you to remember this topics." />
      <PresentPerfect />
      <PresentPerfectProgressive />
      <PastPerfect />
      <PastPerfectProgressive />
      <Modals />
      <PreferenceModals />
      <AdjectivesParticiples />
      <Comparatives />
      <Superlatives />
      <AdjectiveClauses />
      <Articles />
      <ConfusingPrepositions />
      <Footer />
    </section>
  );
}
