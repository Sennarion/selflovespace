import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import SectionTitle from 'components/ui/section-title/section-title';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './reviews.module.scss';

import img1 from '../../images/1.PNG';
import img2 from '../../images/2.PNG';
import img3 from '../../images/3.PNG';
import img4 from '../../images/4.PNG';
import img5 from '../../images/5.PNG';

export default function Reviews() {
  const reviews = [
    {
      img: img1,
      name: 'Anna Krasnuk',
      text: "I can buy myself flowers. I can really buy myself flowers and feel completely happy about it. I realised that I could love myself and show it to myself. I can do things for myself, and I should feel happy about this. I can and should take care of myself because I am the most important person in my life. I used to do a lot of good things for other people. I used to take care of many people in my life. Now I've finally realised that I have the right to put myself first and do good things for myself. This is just an incredible honour; it's like getting the most important permission in your life. And I can only give this permission to myself - no one else can give it to me. I needed help in order to give myself this permission, and the therapists helped me very delicately in this. The self-love space specialist showed me that I can and really have a right to take care of myself in the first place, and I should think about myself, listen to myself, and understand myself. It's a great feeling to realise that I can buy myself flowers. Now, it’s not only a very popular song for me; it's my lifestyle. I can do it, and I can really feel all these great emotions about it. It is an amazing feeling. Thank you so much.",
    },
    {
      img: img2,
      name: 'Karyna Prokopenko',
      text: "The atmosphere of the group was just amazing. It was so full of love. I was so relaxed, and everyone in our group was the same. It was a real atmosphere of pleasure, peace, and just finding and getting love. It’s all about love—love to yourself, love to all the people—and it’s so nice to feel this love and realise what this filling means in our lives. It’s really a very common known fact, but very often we just can't remember it or can't concentrate on it. This group helps me to highlight the meaning of self-love in my life, so I am happy to share this experience. I will definitely be more attentive to myself now. I will focus on myself and my needs, it is so beneficial to get this kind of self-support. Every day we should support our selfishness (in the good sense of the word) by doing something good for ourselves. I realised how simple it is, and even when I’m having the shower, it can be done very quickly just because I have to do it, and straight after I have to go to work, I have a lot of stuff to do around the house to take care of my family, but I can completely change my way of thinking and get this five-minute shower for myself, and I will feel completely different in a different way after these five minutes of self-love. Simple things can be so useful and beneficial for us, and realising this is just brilliant. I want to say thank you to the beautiful group leaders. I'm happy that I took part in this event.",
    },
    {
      img: img3,
      name: 'Alina Kaizer',
      text: "Actually, this was my first experience with this kind of mental health support. I had been preparing myself for this for maybe a couple years. It had been a long time since I thought about it. I was not sure about this, but now I can definitely say that it was time to do it. My experience of working with specialists who provide mental support is like swimming in the ocean, where you can completely relax and enjoy yourself, and everything is so soft. The psychotherapist is listening to you and supporting you. It is the person who can completely understand you, and you can be open and say everything you are thinking about or worrying about. It is so nice... and when you are working with your body therapist, it is completely enjoyable. I feel a connection between my emotions and my body. It was just incredible to understand the emotions and how my body reacts to everything that is going on in my life—everything is in my body. I realised how all my emotions are reflected in my body and how I experience a lot of discomfort on the physical level due to discomfort on the emotional level. This process gives me the possibility to understand this, and what is most important is the ability to change it, because when you understand it, you can change it. I want to say that it's a great experience, and it's worth doing it as soon as possible. I was trying to overcome all my struggles by myself for a very long time, but now I am sure that next time I have some difficult situations, I will definitely get this kind of support. I want to say a huge thank you to Valentyna and Lidiia for their professionalism and hugely kind hearts. It was a wonderful experience, which you made very pleasant for me.",
    },
    {
      img: img4,
      name: 'Julia Ponomarenko',
      text: 'I had a really tough time in my life. I had very difficult times in my life. It was a new country, new surroundings—everything was new for me. It was very difficult to make the right decisions at the time. I found Self-Love-Space specialists, and they helped me to become more self-confident and gain the strength to build my life again from the beginning. I didn’t even know what to do or how to start doing something in that moment of my life; I was trying so hard, it was so difficult for me, but when I found the specialists from Self-love-Space, I saw my life from a completely different perspective, and soon I realised that I have a lot of opportunities. I started to use this opportunity, as it seemed like I was simply blind before. In the communication with the therapists, I opened my eyes, and I started to see everything around me. I understood how to take the first steps. They were small steps, but they were very important steps in my life. I was making the right decisions. Now, after one year, I can say that I really started to enjoy life. I built my life. It was not easy. Sometimes I cried. Sometimes I was too tired to do anything. I felt even helpless sometimes, but with this help, I can overcome everything. I really appreciate the support I received. I appreciate all the help I received, and I would like to say that everyone who struggles at the moment, everyone who has some difficult time in their life, just feel free to get support; you will have a lot of benefits from it.',
    },
    {
      img: img5,
      name: 'Olha Leonova',
      text: "It was absolutely great to receive support from the Self-Love Space. I didn’t expect that such easy exercises and recommendations could be so useful for my life. I feel like my life is changing,  getting better every day, and when I say better, I mean I am really focusing on myself. I can feel awareness and contact with myself. Such awareness gives me a lot of benefits because I can really take care of myself and do what I really want. I have a lot of people in my life who are great and very important to me, but they all wanted to make my life better in the way they thought would be good for me, and now I'm starting to understand what way is good for me, like I’m really getting on my way. I’m on my way, and it is a beautiful feeling when you understand yourself. It is really amazing how you can change your life just by focusing on yourself and your needs. Just understand your body, your emotions, your thoughts, and the connection between all this parts I would like to say only thank you, tonnes of thanks, because it is a new chapter of my life, and I’m writing it by myself now.",
    },
  ];

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
