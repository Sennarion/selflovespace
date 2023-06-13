import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import styles from './hero.module.scss';
import arrow from '../../images/arrow.svg';
import heroImg from '../../images/hero.png';

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className={styles.content}>
          <div className={styles.column}>
            <h1 className={styles.title}>
              We will help you to find the key to your
              <span className={styles.titleAccent}> Happiness</span>
            </h1>
            <p className={styles.subtitle}>
              Throughout life you man encounter obstacles and face difficulties.
              At retreats, consultations and trainings, we will learn how to
              live happily and achieve harmony in relationships with loved ones
            </p>
            <div className={styles.buttonWrapper}>
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
          <div className={styles.column}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.image}
                src={heroImg}
                alt="Valentyna and Lidiia"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
