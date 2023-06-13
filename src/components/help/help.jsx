import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import SectionTitle from 'components/ui/section-title/section-title';
import styles from './help.module.scss';
import img from '../../images/wecanhelp.png';

export default function Help() {
  const items = [
    'Personal problems',
    'Family psychotherapy and relationship problems',
    'Crises and recovery from psychotraumatic situations',
    'Fears, anxieties',
    'Apathy and depression',
    'Despair and feeling of powerlessness',
    'Child-parent relations',
    'Self-esteem problems',
    'Intrusive thoughts',
    'Experiencing negative emotions and feelings',
    'Difficulties in communication with other people',
  ];

  return (
    <Section>
      <Container>
        <SectionTitle>We can help with</SectionTitle>
        <div className={styles.content}>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={img} alt="We" />
          </div>
          <div className={styles.textWrapper}>
            <ul className={styles.list}>
              {items.map(item => (
                <li className={styles.item} key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <p className={styles.text}>
              we will help you effectively solve your existing problem and gain
              inner strength and harmony
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
