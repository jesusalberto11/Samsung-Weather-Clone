import Head from "next/head";
import Layout from "../components/layout";
import CurrentWeatherWidget from "../components/CurrentWeatherWidget";
import WeekWeatherWidget from "../components/WeekWeatherWidget";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Samsung Weather Clone</title>
      </Head>
      <section>
        <hr />
        <CurrentWeatherWidget />
        <br />
        <WeekWeatherWidget />
      </section>
    </Layout>
  );
}
