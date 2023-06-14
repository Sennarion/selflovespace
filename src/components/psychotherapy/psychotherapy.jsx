import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import SectionTitle from 'components/ui/section-title/section-title';
import Leader from 'components/ui/leeader/leader';
import styles from './psychotherapy.module.scss';
import img from '../../images/service6.png';
import { psychotherapy, leaders } from 'data/data';

export default function Psychotherapy() {
  return (
    <Section>
      <Container>
        <div className={styles.content} id="psychotherapy">
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={img} alt="Valentyna Bukovska" />
          </div>
          <div className={styles.textWrapper}>
            <SectionTitle>Group psychotherapy</SectionTitle>
            <ul className={styles.list}>
              {psychotherapy.map(({ title, text }) => (
                <li className={styles.item} key={title}>
                  <h3 className={styles.textTitle}>{title}</h3>
                  <p className={styles.text}>{text}</p>
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
