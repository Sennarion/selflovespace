import styles from './section-title.module.scss';

export default function SectionTitle({ children, subtitle }) {
  return (
    <div className={styles.titleWrapper}>
      <h2 className={styles.title}>{children}</h2>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
    </div>
  );
}
