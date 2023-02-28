import ContentSummarize from "@/components/ContentSummarize";
import NavBar from "@/components/NavBar";
import PointsContainer from "@/components/PointsContainer";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Scrapbook</title>
        <meta name="description" content="A intermediate english summarize" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <NavBar />
        <div className={styles.main}>
          <PointsContainer />
          <ContentSummarize />
        </div>
      </div>
    </>
  );
}
