import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './mobile-menu.module.scss';
import { navItems } from 'data/data';
import { BsTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

export default function MobileMenu({ isMenuOpen, toggleMenu }) {
  return (
    <div className={classNames(styles.menu, isMenuOpen ? styles.open : '')}>
      <div className={styles.content}>
        <ul className={styles.navList}>
          {navItems.map(({ title, href }) => (
            <li className={styles.navItem} key={title}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.activeNavLink}` : `${styles.navLink}`
                }
                to={href}
                onClick={toggleMenu}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
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
    </div>
  );
}
