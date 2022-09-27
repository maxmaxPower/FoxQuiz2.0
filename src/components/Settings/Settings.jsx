import s from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={s.Settings}>
      <div className={s.settings__table}>
        <p>Main settings</p>
      </div>
      <div className={s.settings__table}>
        <p>Network settings</p>
      </div>
      <div className={s.settings__table}>
        <p>Password Settings</p>
      </div>
    </div>
  );
};
export default Settings;
