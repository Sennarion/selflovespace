import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import SectionTitle from 'components/ui/section-title/section-title';
import Leader from 'components/ui/leeader/leader';
import styles from './body-therapy.module.scss';
import img from '../../images/service7.png';
import { leaders } from 'data/data';

export default function BodyTherapy() {
  return (
    <Section id="therapy">
      <Container>
        <div className={styles.content}>
          <div className={styles.imgWrapper}>
            <img
              className={styles.img}
              src={img}
              alt="Valentyna Bukovska and Lidiia Oliiarnyk"
            />
          </div>
          <div className={styles.textWrapper}>
            <SectionTitle>Body – therapy </SectionTitle>
            <p className={styles.text}>
              A personal dance session. First of al it is an individual approach
              to your needs and characteristics. For the beginning , we will
              determine exactly what result you are interested in at the end. We
              will desside through which style of dance (jazz, funk, Latin,
              heels) you want to work with your body and, of course, what
              personal specifics of the body you have. A personal type of load
              will be chosen for everyone. Therefore, it is important to know
              what previous experience your body has and what type of load it is
              ready for.
            </p>
            <ul className={styles.leadersList}>
              <Leader {...leaders[1]} />
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
