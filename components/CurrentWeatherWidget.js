import AppButton from "./AppButton";
import styles from "../styles/currentWeatherWidget.module.css";
import utilsStyles from "../styles/utils.module.css";

export default function CurrentWeatherWidget() {
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <p className={utilsStyles.headingMd}>Cartagena</p>
        <p className={utilsStyles.paragraphMd}>mié., 31 de mayo 11:11</p>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.currentWeatherContainer}>
          <div className={styles.currentWeatherImage}></div>
          <div className={styles.currentWeather}>30°</div>
        </div>
        <div className={styles.currentWeatherDetails}>
          <p className={utilsStyles.paragraphMd}>Mayormente nublado</p>
          <p className={utilsStyles.paragraphMd}>31°/26°</p>
          <p className={utilsStyles.paragraphMd}>Sensación térmica 37°</p>
        </div>
      </div>
      <div className={styles.thirdSection}>
        <div className={styles.thirdSectionItem}>
          <p className={utilsStyles.paragraphMd}>16:00</p>
          <div>Img</div>
          <p>30°</p>
          <p className={utilsStyles.paragraphMd}>22 %</p>
        </div>
        <div className={styles.thirdSectionItem}>
          <p className={utilsStyles.paragraphMd}>16:00</p>
          <div>Imag</div>
          <p>30°</p>
          <p className={utilsStyles.paragraphMd}>22 %</p>
        </div>
        <div className={styles.thirdSectionItem}>
          <p className={utilsStyles.paragraphMd}>16:00</p>
          <div>Img</div>
          <p>30°</p>
          <p className={utilsStyles.paragraphMd}>22 %</p>
        </div>
        <div className={styles.thirdSectionItem}>
          <p className={utilsStyles.paragraphMd}>16:00</p>
          <div>Img</div>
          <p>30°</p>
          <p className={utilsStyles.paragraphMd}>22 %</p>
        </div>
        <div className={styles.thirdSectionItem}>
          <p className={utilsStyles.paragraphMd}>16:00</p>
          <div>Img</div>
          <p>30°</p>
          <p className={utilsStyles.paragraphMd}>22 %</p>
        </div>
      </div>
      <div className={styles.fourdSection}>
        <AppButton name={"Más"}></AppButton>
      </div>
    </div>
  );
}
