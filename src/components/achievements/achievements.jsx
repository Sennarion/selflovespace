import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import SectionTitle from 'components/ui/section-title/section-title';
import styles from './achievements.module.scss';
import { achievements } from 'data/data';

export default function Achievements() {
  return (
    <Section>
      <Container>
        <SectionTitle>Our achievements</SectionTitle>
        <div className={styles.content}>
          <ul className={styles.list}>
            {achievements.map(({ number, text }) => (
              <li className={styles.item}>
                <div className={styles.textWrapper}>
                  <strong className={styles.number}>{number}</strong>
                  <p className={styles.text}>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
