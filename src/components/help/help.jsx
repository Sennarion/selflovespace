import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import SectionTitle from 'components/ui/section-title/section-title';
import styles from './help.module.scss';
import img from '../../images/wecanhelp.png';
import { helpList } from 'data/data';

export default function Help() {
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
              {helpList.map(item => (
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
