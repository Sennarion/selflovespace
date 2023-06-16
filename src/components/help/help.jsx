import classNames from 'classnames';
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
        <SectionTitle className="js-fade-el-translate">
          We can help with
        </SectionTitle>
        <div className={styles.content}>
          <div className={classNames(styles.imgWrapper, 'js-fade-el')}>
            <img className={styles.img} src={img} alt="We" />
          </div>
          <div className={styles.textWrapper}>
            <ul className={classNames(styles.list, 'js-fade-stagger-w')}>
              {helpList.map(item => (
                <li
                  className={classNames(styles.item, 'js-fade-stagger')}
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className={classNames(styles.text, 'js-fade-el')}>
              We will help you effectively solve your existing problem and gain
              inner strength and harmony...
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
