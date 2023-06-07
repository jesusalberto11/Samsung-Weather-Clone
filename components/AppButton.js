import appButtonStyles from "../styles/appButton.module.css";

export default function AppButton({ name }) {
  return <button className={appButtonStyles.button}>{name}</button>;
}
