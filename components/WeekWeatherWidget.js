import AppButton from "./AppButton";
import styles from "../styles/weekWeatherWidget.module.css";

export default function WeekWeatherWidget() {
  return (
    <div className={styles.container}>
      <div className={styles.nextDayWeatherContainer}>
        <p>Hoy</p>
        <div className={styles.nextDayHumidityAndWeatherIcons}>
          <p>30%</p>
          <p>Image</p>
        </div>
        <p className={styles.nextDayWeather}>31°/26°</p>
      </div>
      <div className={styles.nextDayWeatherContainer}>
        <p>Jueves</p>
        <div className={styles.nextDayHumidityAndWeatherIcons}>
          <p>30%</p>
          <p>Image</p>
        </div>
        <p className={styles.nextDayWeather}>31°/26°</p>
      </div>
      <div className={styles.nextDayWeatherContainer}>
        <p>Viernes</p>
        <div className={styles.nextDayHumidityAndWeatherIcons}>
          <p>30%</p>
          <p>Image</p>
        </div>
        <p className={styles.nextDayWeather}>31°/26°</p>
      </div>
      <div className={styles.buttonSection}>
        <AppButton name={"Más"} />
      </div>
    </div>
  );
}
