import Head from "next/head";
import Layout from "../components/layout";
import CurrentWeatherWidget from "../components/CurrentWeatherWidget";
import WeekWeatherWidget from "../components/WeekWeatherWidget";
import axios from "axios";

export default function Home({ weatherData }) {
  console.log(weatherData);

  const findCurrentTimeIndex = (hourlyTimes) => {
    const todayDate = weatherData?.current_weather.time;
    const actualHourIndex = hourlyTimes.findIndex((date) => date === todayDate);

    return actualHourIndex;
  };

  return (
    <Layout home>
      <Head>
        <title>Samsung Weather Clone</title>
      </Head>
      <section>
        <hr />
        <CurrentWeatherWidget
          currentTemperature={weatherData?.current_weather.temperature}
          maxTemp={weatherData?.daily.temperature_2m_max[0]}
          minTemp={weatherData?.daily.temperature_2m_min[0]}
          actualHour={findCurrentTimeIndex(weatherData?.hourly.time)}
          nextHours={weatherData?.hourly.time}
          nextHoursForecast={weatherData?.hourly.temperature_2m}
        />
        <br />
        <WeekWeatherWidget
          forecastDays={weatherData?.daily.time}
          maxTemps={weatherData?.daily.temperature_2m_max}
          minTemps={weatherData?.daily.temperature_2m_min}
        />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=10.40&longitude=-75.51&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,rain,uv_index,is_day,shortwave_radiation&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max&current_weather=true&timezone=auto`
    );

    const weatherData = response.data;

    return {
      props: {
        weatherData,
      },
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return {
      props: {
        weatherData: null,
      },
    };
  }
}
