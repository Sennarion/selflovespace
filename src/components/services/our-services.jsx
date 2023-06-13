import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import SectionTitle from 'components/ui/section-title/section-title';

import styles from './our-services.module.scss';

import img1 from '../../images/service1.svg';
import img2 from '../../images/service2.svg';
import img3 from '../../images/service3.svg';
import img4 from '../../images/service4.svg';
import img5 from '../../images/service5.svg';

export default function OurServices() {
  const services = [
    { img: img1, href: '#', title: 'Retreats' },
    { img: img2, href: '#', title: 'Individual sessions' },
    { img: img3, href: '#', title: 'Group psychotherapy' },
    { img: img4, href: '#', title: 'Family/couple consultations' },
    { img: img5, href: '#', title: 'Body therapy' },
  ];

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
                <a className={styles.service} href={href}>
                  <div className={styles.imgWrapper}>
                    <img className={styles.img} src={img} alt={title} />
                  </div>
                  <h3 className={styles.title}>{title}</h3>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
