import styles from './leader.module.scss';

export default function Leader({ img, name, position, descr, link }) {
  return (
    <li className={styles.leader} key={name}>
      <a className={styles.link} href={link}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={img} alt={name} />
        </div>
        <div className={styles.text}>
          <h5 className={styles.name}>{name}</h5>
          <p className={styles.position}>{position}</p>
          <p className={styles.descr}>{descr}</p>
        </div>
      </a>
    </li>
  );
}
