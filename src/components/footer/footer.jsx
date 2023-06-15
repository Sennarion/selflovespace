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
                <a className={styles.socialLink} href="google.com">
                  <CiFacebook size="30" color="#348a9b" />
                </a>
              </li>
              <li className={styles.socialItem}>
                <a className={styles.socialLink} href="google.com">
                  <CiLinkedin size="30" color="#348a9b" />
                </a>
              </li>
              <li className={styles.socialItem}>
                <a className={styles.socialLink} href="google.com">
                  <CiInstagram size="30" color="#348a9b" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className={styles.policy}>© Self Love Space. 2023</p>
      </Container>
    </footer>
  );
}
