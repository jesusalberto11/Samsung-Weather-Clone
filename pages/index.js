import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Samsung Weather Clone</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Samsung Weather Clone</p>
      </section>
    </Layout>
  );
}
