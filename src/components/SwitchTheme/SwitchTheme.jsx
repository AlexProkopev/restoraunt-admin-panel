
import styles from "./SwitchTheme.module.css";

function ThemeSwitchButton({ isDark, setIsDark }) {
  const handleClick = () => setIsDark(!isDark);

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id="checkbox"
        checked={isDark}
        onChange={handleClick}
        className={styles.checkbox}
      />
      <label htmlFor="checkbox" className={styles.label}></label>
    </div>
  );
}

export default ThemeSwitchButton
