import classNames from 'classnames';
import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import SectionTitle from 'components/ui/section-title/section-title';
import styles from './about-us.module.scss';
import img1 from '../../images/about1.png';
import img2 from '../../images/about2.png';

export default function AboutUs() {
  return (
    <Section>
      <Container>
        <SectionTitle>About us</SectionTitle>
        <div className={styles.content}>
          <div className={styles.row} id="valentyna">
            <div className={classNames(styles.imgWrapper, styles.arch)}>
              <img
                className={classNames(styles.img, styles.imgArch)}
                src={img1}
                alt="Valentyna Bukovska"
              />
            </div>
            <div className={styles.text}>
              <h3 className={styles.name}>Valentyna Bukovska</h3>
              <p className={styles.position}>Psychitherapist</p>
              <p className={styles.descr}>
                I am a psychotherapist specializing in emotionally focused
                therapy, crisis psychology, trauma therapy and business
                psychology. Master degree in psychology A mediator – specialist
                in the peaceful resolution of conflicts. Experience in the field
                of psychotherapy and corporate psychology – more than 13 years.
                Extensive experience in conducting individuial sessions and
                trainings Working with various categories of clients –
                corporate, military and victims of war in Ukraine (from 2014 to
                the present), working with families and individual clients.
              </p>
              <p className={styles.listTitle}>
                Member of professional organizations:
              </p>
              <ul className={styles.list}>
                <li className={styles.item}>
                  British Emotionally Focused Therapy Centre
                </li>
                <li className={styles.item}>
                  European Society for Traumatic Stress Studies
                </li>
                <li className={styles.item}>
                  Ukrainian Assosiation of Emotionally Focused Therapy
                </li>
                <li className={styles.item}>
                  Unrainian Assosiation of Spesialists of overcoming the
                  traumatic events
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.row} id="lidiia">
            <div className={classNames(styles.imgWrapper, styles.leaf)}>
              <img
                className={classNames(styles.img, styles.imgLeaf)}
                src={img2}
                alt="Lidiia Oliiarnyk"
              />
            </div>
            <div className={styles.text}>
              <h3 className={styles.name}>Lidiia Oliiarnyk</h3>
              <p className={styles.position}>Choreographer, dance teacher</p>
              <p className={styles.descr}>
                Everything we have in our life is manifested in our body. That
                is why maintaining our body is a necessary part of maintaining
                our mental well-being Body support through dance is the most
                effective and accepted way of taking care of your body I am a
                professional dancer and choreographer. My dancing journey
                commenced at the age of 5. I trained people of absolutely
                different ages and in different countries of the world: Ukraine,
                Korea, Croatia, England. I will help you to feel your body, to
                establish a connection with the muscles, to feel toned. Dancing
                helps us to distract ourselves from reality and move to a
                parallel world where only you and music exist. Nothing helps you
                to reset your mind and body better than completely focus on
                yourself for awhile .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
