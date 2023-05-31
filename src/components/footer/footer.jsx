import Container from 'components/ui/container/container';
import styles from './footer.module.scss';
import logo from '../../images/logo.svg';
import { CiFacebook, CiLinkedin, CiInstagram } from 'react-icons/ci';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <a href="#" className={styles.logoWrapper}>
            <img
              className={styles.logo}
              src={logo}
              alt="Self Love Space Logo"
            />
          </a>
          <div className={styles.info}>
            <ul className={styles.socialList}>
              <li className={styles.socialItem}>
                <a className={styles.socialLink} href="#">
                  <CiFacebook size="40" />
                </a>
              </li>
              <li className={styles.socialItem}>
                <a className={styles.socialLink} href="#">
                  <CiLinkedin size="40" />
                </a>
              </li>
              <li className={styles.socialItem}>
                <a className={styles.socialLink} href="#">
                  <CiInstagram size="40" />
                </a>
              </li>
            </ul>
            <p className={styles.policy}>© Self Love Space. 2023</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
