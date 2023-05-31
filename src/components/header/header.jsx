import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';
import Container from 'components/ui/container/container';
import logo from '../../images/logo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <a href="#" className={styles.logoWrapper}>
            <img
              className={styles.logo}
              src={logo}
              alt="Self Love Space Logo"
            />
          </a>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <NavLink className={styles.navLink} to="/">
                  Home
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink className={styles.navLink} to="/about">
                  About
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink className={styles.navLink} to="/services">
                  Services
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
