import AppButton from "./AppButton";
import NextHoursForecast from "./NextHoursForecast";
import styles from "../styles/currentWeatherWidget.module.css";
import utilsStyles from "../styles/utils.module.css";

export default function CurrentWeatherWidget({
  currentTemperature,
  maxTemp,
  minTemp,
  actualHour,
  nextHours,
  nextHoursForecast,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <p className={utilsStyles.headingMd}>Cartagena</p>
        <p className={utilsStyles.paragraphMd}>mié., 31 de mayo 11:11</p>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.currentWeatherContainer}>
          <div className={styles.currentWeatherImage}></div>
          <div className={styles.currentWeather}>{currentTemperature}°</div>
        </div>
        <div className={styles.currentWeatherDetails}>
          <p className={utilsStyles.paragraphMd}>Mayormente nublado</p>
          <p className={utilsStyles.paragraphMd}>
            {maxTemp}°/{minTemp}°
          </p>
          <p className={utilsStyles.paragraphMd}>Sensación térmica 37°</p>
        </div>
      </div>
      <hr></hr>
      <NextHoursForecast
        actualHour={actualHour}
        nextHours={nextHours}
        nextHoursForecast={nextHoursForecast}
      />
      <div className={styles.fourdSection}>
        <AppButton name={"Más"}></AppButton>
      </div>
    </div>
  );
}
