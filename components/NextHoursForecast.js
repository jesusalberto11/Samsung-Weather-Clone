import styles from "../styles/currentWeatherWidget.module.css";
import utilsStyles from "../styles/utils.module.css";

export default function nextHoursForecast({
  actualHour,
  nextHours,
  nextHoursForecast,
}) {
  const showForecastForTheNextTwentyFourHours = (actualHourForecastIndex) => {
    const indexForTheNextTwentyFourHours = actualHourForecastIndex + 24;

    return nextHours
      .slice(actualHourForecastIndex + 1, indexForTheNextTwentyFourHours + 1)
      .map((time, index) => (
        <div key={index} className={styles.thirdSectionItem}>
          <p className={utilsStyles.paragraphMd}>{time.slice(11)}</p>
          <p className={utilsStyles.paragraphMd}>
            {nextHoursForecast[actualHourForecastIndex + index + 1]}
          </p>
          <p className={utilsStyles.paragraphMd}>22 %</p>
        </div>
      ));
  };

  return (
    <div className={styles.thirdSection}>
      {showForecastForTheNextTwentyFourHours(actualHour)}
    </div>
  );
}
