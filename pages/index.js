import Head from "next/head";
import Layout from "../components/layout";
import CurrentWeatherWidget from "../components/CurrentWeatherWidget";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Samsung Weather Clone</title>
      </Head>
      <section>
        <hr></hr>
        <CurrentWeatherWidget></CurrentWeatherWidget>
      </section>
    </Layout>
  );
}
