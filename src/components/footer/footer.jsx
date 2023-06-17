import Container from 'components/ui/container/container';
import styles from './footer.module.scss';
import logo from '../../images/logo.svg';
import { CiFacebook, CiLinkedin, CiInstagram } from 'react-icons/ci';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <a href="selflovespace.uk" className={styles.logoWrapper}>
            <img
              className={styles.logo}
              src={logo}
              alt="Self Love Space Logo"
            />
          </a>
          <div className={styles.info}>
            <ul className={styles.socialList}>
              <li className={styles.socialItem}>
                <a
                  className={styles.socialLink}
                  href="https://www.facebook.com/profile.php?id=100093067544017"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CiFacebook size="30" />
                </a>
              </li>
              <li className={styles.socialItem}>
                <a
                  className={styles.socialLink}
                  href="google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CiLinkedin size="30" />
                </a>
              </li>
              <li className={styles.socialItem}>
                <a
                  className={styles.socialLink}
                  href="https://www.instagram.com/self_love_space_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CiInstagram size="30" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className={styles.policy}>
          © Self Love Space. 2023.
          <a
            className={styles.link}
            target="_blank"
            href="https://www.docdroid.net/XuAybtL/privacy-policy-valentyna-bukovska-psychological-services-pdf"
            rel="noreferrer"
          >
            Privacy policy
          </a>
          .
          <a
            className={styles.link}
            target="_blank"
            href="https://www.docdroid.net/XuAybtL/privacy-policy-valentyna-bukovska-psychological-services-pdf"
            rel="noreferrer"
          >
            Terms and conditions
          </a>
          .
        </p>
      </Container>
    </footer>
  );
}
