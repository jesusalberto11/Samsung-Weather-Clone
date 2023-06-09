import AppButton from "./AppButton";
import ForecastDay from "./ForecastsDay";
import styles from "../styles/weekWeatherWidget.module.css";

export default function WeekWeatherWidget({
  forecastDays,
  maxTemps,
  minTemps,
}) {
  return (
    <div className={styles.container}>
      {forecastDays?.map((time, index) => (
        <ForecastDay
          key={index}
          date={time}
          maxTemp={maxTemps[index]}
          minTemp={minTemps[index]}
        />
      ))}

      <div className={styles.buttonSection}>
        <AppButton name={"Más"} />
      </div>
    </div>
  );
}
