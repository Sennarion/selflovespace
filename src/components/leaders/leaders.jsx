import img1 from '../../images/leader1.jpg';
import img2 from '../../images/leader2.jpg';

import styles from './leaders.module.scss';

export default function Leaders() {
  const leaders = [
    {
      img: img1,
      name: 'Valentyna Bukovska',
      position: 'psychotherapist',
      link: 'about#valentyna',
      descr:
        "Will help to restore contact with one's inner world, achieve inner balance and master the skills of emotional regulation in the format of group work",
    },
    {
      img: img2,
      name: 'Lidiia Oliiarnyk',
      position: 'choreographer and dance teacher',
      link: 'about#lidiia',
      descr:
        'Will help to restore contact with and listen to your body while learning to recognize signals from our body',
    },
  ];

  return (
    <div className={styles.leaders}>
      <h4 className={styles.leadersTitle}>The Two Retreat Leaders</h4>
      <ul className={styles.leadersList}>
        {leaders.map(({ img, name, position, descr, link }) => (
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
        ))}
      </ul>
    </div>
  );
}
