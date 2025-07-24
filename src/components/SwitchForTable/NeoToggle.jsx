
import styles from "./NeoToggle.module.css";


const NeoToggle = ({ id, checked, onChange }) => {
  return (
    <div className={styles.neoToggleContainer}>
      <input
        className={styles.neoToggleInput}
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className={styles.neoToggle} htmlFor={id}>
        <div className={styles.neoTrack}>
          <div className={styles.neoBackgroundLayer}></div>
          <div className={styles.neoGridLayer}></div>
          <div className={styles.neoSpectrumAnalyzer}>
            <div className={styles.neoSpectrumBar}></div>
            <div className={styles.neoSpectrumBar}></div>
            <div className={styles.neoSpectrumBar}></div>
            <div className={styles.neoSpectrumBar}></div>
            <div className={styles.neoSpectrumBar}></div>
          </div>
          <div className={styles.neoTrackHighlight}></div>
        </div>

        <div className={styles.neoThumb}>
          <div className={styles.neoThumbRing}></div>
          <div className={styles.neoThumbCore}>
            <div className={styles.neoThumbIcon}>
              <div className={styles.neoThumbWave}></div>
              <div className={styles.neoThumbPulse}></div>
            </div>
          </div>
        </div>

        <div className={styles.neoGestureArea}></div>

        <div className={styles.neoInteractionFeedback}>
          <div className={styles.neoRipple}></div>
          <div className={styles.neoProgressArc}></div>
        </div>

        <div className={styles.neoStatus}>
          <div className={styles.neoStatusIndicator}>
            <div className={styles.neoStatusDot}></div>
            <div className={styles.neoStatusText}></div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default NeoToggle;
