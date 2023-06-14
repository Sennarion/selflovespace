import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import SectionTitle from 'components/ui/section-title/section-title';
import Leader from 'components/ui/leeader/leader';
import styles from './consultations.module.scss';
import img from '../../images/service5.png';
import { consultations, leaders } from 'data/data';

export default function Consultations() {
  return (
    <Section>
      <Container>
        <div className={styles.content} id="consultations">
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={img} alt="Valentyna Bukovska" />
          </div>
          <div className={styles.textWrapper}>
            <SectionTitle>Family/couple consultations</SectionTitle>
            <h3 className={styles.textTitle}>
              How to understand that you need to come to a family session?
            </h3>
            <ul className={styles.list}>
              {consultations[0].map(item => (
                <li className={styles.item} key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <h3 className={styles.textTitle}>I can help to</h3>
            <ul className={styles.list}>
              {consultations[1].map(item => (
                <li className={styles.item} key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <h3 className={styles.textTitle}>How the session goes?</h3>
            <ul className={styles.list}>
              {consultations[2].map(item => (
                <li className={styles.item} key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <ul className={styles.leadersList}>
              <Leader {...leaders[0]} />
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
