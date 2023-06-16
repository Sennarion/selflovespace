import classNames from 'classnames';
import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import SectionTitle from 'components/ui/section-title/section-title';
import styles from './achievements.module.scss';
import { achievements } from 'data/data';

export default function Achievements() {
  return (
    <Section>
      <Container>
        <SectionTitle className="js-fade-el-translate">
          Our achievements
        </SectionTitle>
        <div className={styles.content}>
          <ul className={classNames(styles.list, 'js-fade-stagger-w')}>
            {achievements.map(({ number, text }) => (
              <li
                className={classNames(styles.item, 'js-fade-stagger')}
                key={text}
              >
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
