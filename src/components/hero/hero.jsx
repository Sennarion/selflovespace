import classNames from 'classnames';
import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import styles from './hero.module.scss';
import arrow from '../../images/arrow.svg';
import heroImg from '../../images/hero.png';

export default function Hero() {
  return (
    <Section fullHeight>
      <Container>
        <div className={styles.content}>
          <div className={styles.textWrapper}>
            <h1 className={classNames(styles.title, 'js-fade-el-translate')}>
              We will help you to find the key to your
              <span className={styles.titleAccent}> Happiness</span>
            </h1>
            <p className={classNames(styles.subtitle, 'js-fade-el')}>
              Throughout life you may encounter obstacles and face difficulties.
            </p>
            <p className={classNames(styles.subtitle, 'js-fade-el')}>
              At retreats, individual sessions and trainings we can learn how to
              live happily and achieve harmony in relationships with others.
            </p>
            <div className={classNames(styles.buttonWrapper, 'js-fade-el')}>
              <a href="#form" className={styles.button}>
                <span className={styles.buttonText}>
                  free introduction meeting
                </span>
                <span className={styles.buttonIconWrapper}>
                  <img className={styles.buttonIcon} src={arrow} alt="arrow" />
                </span>
              </a>
            </div>
          </div>
          <div
            className={classNames(styles.imageWrapper, 'js-fade-el-translate')}
          >
            <img
              className={styles.image}
              src={heroImg}
              alt="Valentyna and Lidiia"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
