import styles from "../styles/forecastDay.module.css";

export default function ForecastDay({ date, maxTemp, minTemp }) {
  return (
    <div className={styles.nextDayWeatherContainer}>
      <p>{date}</p>
      <div className={styles.nextDayHumidityAndWeatherIcons}>
        <p>30%</p>
        <p>Image</p>
      </div>
      <p className={styles.nextDayWeather}>{maxTemp + "°/" + minTemp + "°"}</p>
    </div>
  );
}
