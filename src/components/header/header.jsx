import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';
import Container from 'components/ui/container/container';
import logo from '../../images/logo.svg';
import { navItems } from 'data/data';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <a href="/" className={styles.logoWrapper}>
            <img
              className={styles.logo}
              src={logo}
              alt="Self Love Space Logo"
            />
          </a>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navItems.map(({ title, href }) => (
                <li className={styles.navItem} key={title}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `${styles.activeNavLink}` : `${styles.navLink}`
                    }
                    to={href}
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
