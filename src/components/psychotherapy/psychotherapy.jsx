import classNames from 'classnames';
import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import SectionTitle from 'components/ui/section-title/section-title';
import Leader from 'components/ui/leeader/leader';
import styles from './psychotherapy.module.scss';
import img from '../../images/service6.png';
import { psychotherapy, leaders } from 'data/data';

export default function Psychotherapy() {
  return (
    <Section id="psychotherapy">
      <Container>
        <div className={styles.content}>
          <div className={classNames(styles.imgWrapper, 'js-fade-el')}>
            <img className={styles.img} src={img} alt="Valentyna Bukovska" />
          </div>
          <div className={styles.textWrapper}>
            <SectionTitle className="js-fade-el-translate">
              Group psychotherapy
            </SectionTitle>
            <ul className={classNames(styles.list, 'js-fade-stagger-w')}>
              {psychotherapy.map(({ title, text }) => (
                <li
                  className={classNames(styles.item, 'js-fade-stagger')}
                  key={title}
                >
                  <h3 className={styles.textTitle}>{title}</h3>
                  <p className={styles.text}>{text}</p>
                </li>
              ))}
            </ul>
            <ul className={classNames(styles.leadersList, 'js-fade-el')}>
              <Leader {...leaders[0]} />
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
