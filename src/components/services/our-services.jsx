import { HashLink } from 'react-router-hash-link';
import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import SectionTitle from 'components/ui/section-title/section-title';
import styles from './our-services.module.scss';
import { services } from 'data/data';

export default function OurServices() {
  return (
    <Section>
      <Container>
        <div className={styles.content}>
          <SectionTitle subtitle="Together we can overcome the problems in a way that is convenient for you ">
            Our services
          </SectionTitle>
          <ul className={styles.services}>
            {services.map(({ img, href, title }) => (
              <li className={styles.serviceItem} key={title}>
                <HashLink className={styles.service} to={href}>
                  <div className={styles.imgWrapper}>
                    <img className={styles.img} src={img} alt={title} />
                  </div>
                  <h3 className={styles.title}>{title}</h3>
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
