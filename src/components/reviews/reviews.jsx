import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import SectionTitle from 'components/ui/section-title/section-title';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './reviews.module.scss';
import { reviews } from 'data/data';

export default function Reviews() {
  return (
    <Section>
      <Container>
        <SectionTitle>Our lovely clients</SectionTitle>
        <Swiper
          style={{
            '--swiper-pagination-color': '#348a9b',
            '--swiper-pagination-bullet-inactive-color': '#454545',
            '--swiper-pagination-bullet-inactive-opacity': '0.5',
            '--swiper-pagination-bullet-size': '16px',
            '--swiper-pagination-bullet-horizontal-gap': '6px',
          }}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          loop={true}
          slidesPerView={1}
        >
          {reviews.map(({ img, name, text }) => (
            <SwiperSlide key={name}>
              <div className={styles.content}>
                <div className={styles.imageWrapper}>
                  <img className={styles.image} src={img} alt={name} />
                </div>
                <div className={styles.textWrapper}>
                  <h3 className={styles.name}>{name}</h3>
                  <p className={styles.text}>{text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
}
