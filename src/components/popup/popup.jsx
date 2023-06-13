import classNames from 'classnames';
import { setCookies } from 'utils/cookies';
import styles from './popup.module.scss';

export default function Popup({ setIsPopupOpen }) {
  return (
    <div className={styles.popup}>
      <p className={styles.text}>
        This website uses cookies to ensure you get the best experience on our
        website.
      </p>
      <div className={styles.butttons}>
        <button
          className={classNames(styles.button, styles.accept)}
          type="button"
          onClick={() => setCookies(true, setIsPopupOpen)}
        >
          Accept
        </button>
        <button
          className={classNames(styles.button, styles.decline)}
          type="button"
          onClick={() => setCookies(false, setIsPopupOpen)}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
