import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import styles from './header.module.scss';
import Container from 'components/ui/container/container';
import MobileMenu from 'components/mobile-menu/mobile-menu';
import logo from '../../images/logo.svg';
import { navItems } from 'data/data';
import { BsTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      return;
    }

    document.documentElement.style.overflow = 'auto';
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <a href="selflovespace.uk" className={styles.logoWrapper}>
            <img
              className={styles.logo}
              src={logo}
              alt="Self Love Space Logo"
            />
          </a>
          <div className={styles.navWrapper}>
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                {navItems.map(({ title, href }) => (
                  <li className={styles.navItem} key={title}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.activeNavLink}`
                          : `${styles.navLink}`
                      }
                      to={href}
                    >
                      {title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className={styles.icons}>
              <li className={styles.icon}>
                <a className={styles.iconLink} href="tel:+447760164058">
                  <BsTelephoneFill />
                </a>
              </li>
              <li className={styles.icon}>
                <a
                  className={styles.iconLink}
                  href="mailto:bukovska@selflovespace.uk"
                >
                  <IoMdMail size="18" />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.mobileNavWrapper}>
            <Hamburger
              size={20}
              toggled={isMenuOpen}
              onToggle={toggleMenu}
              color="#348a9b"
              rounded
            />
          </div>
        </div>
      </Container>
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}
