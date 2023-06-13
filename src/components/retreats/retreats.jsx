import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import SectionTitle from 'components/ui/section-title/section-title';
import Leaders from 'components/leaders/leaders';
import styles from './retreats.module.scss';
import img1 from '../../images/service1.png';
import img2 from '../../images/service2.png';
import img3 from '../../images/service3.png';

export default function Retreats() {
  const retreats = [
    {
      title:
        'Psychological retreat "The pleasure of being in tune with yourself and your body"',
      img: img1,
      text: [
        'A space where a complete psychological reset and self-restoration awaits you.',
        'In a pleasant process, we provide you with an opportunity to:',
        [
          '- hear yourself and accept yourself',
          '- regulate your condition and recover qualitatively after stressful or unpleasant situations',
          '- find channels of resources within yourself and in the outside world',
          '- understand and realize your true values and priorities',
          "- establish connections with your body and learn to feel and respond to your body's signals",
        ],
        'This wonderful event is suitable for everyone who feels tired from everything that happens in life:',
        [
          '- who want to become more attentive to themselves and learn to live with a healthy focus on themselves',
          '- who want to feel harmony in their life and have additional resources for a happy life',
          '- for anyone who wants to receive more enjoyment out of life every day and easily cope with daily problems',
        ],
        'How we will achieve such results:',
        [
          '- 3 days in a beautiful venue and peaceful surroundings, with complete attention to yourself. While working internally on improving your connection with yourself and your body',
        ],
      ],
    },
    {
      title: 'Psychological retreat "The power of love" for couples”',
      img: img2,
      text: [
        'A space where you and your loved one can immerse yourself in the power of love and feel the happiness of being in a relationship with each other.',
        'This event is ideal for couples (married, in long term partnership and those who intend to get married) who want to better understand themselves in the context of relationships and understand their partners. This event will be extremely useful for your relationship if you already have questions about building a harmonious relationship or improving it.',
        'If you can already recognize the presence of problems or difficulties in your relationship - then this is the measure that will be the key for you to return to a happy relationship full of love and mutual understanding.',
        'What you will get, as a result of attending this unique event',
        [
          '- a deep understanding of relationships',
          '- new understanding of the peculiarities and uniqueness of your relationship',
          '- you will be able to see and understand the reasons and possible points of discord in your relationship',
          '- you will spend time in contact with yourself, each other and other couples, whose experience will be invaluable for the development of your relationship',
          '- gain a better understanding of how to harmonize your relationship - you will be able to understand what is the most difficult for you in a relationship, while finding new ways for your partner to understand it, and how you can both cope with it together. ',
        ],
        'Through this process you will be able to get to know and understand each other better.',
        '3 days a beautiful venue and peaceful surroundings, delving into the topic of love and the happiness of being in a relationship.',
        'Immersion in the specifics of building strong and happy relationships. Working through negative experiences or psychological traumas that do not provide an opportunity to build happy relationships.',
        '',
      ],
    },
    {
      title:
        'Psychological retreat "The power of love will save the world " for people who seek to create a harmonious relationship.',
      img: img3,
      text: [
        'An incredible space where we will fully immerse ourselves in the topic of the power of love and the role of love in our lives.',
        'It is here that each of you will be able to understand and deeply realize - what love means to you, what it means to love to you and what it means to you to be loved.....',
        'It is at this event that we will be able to invite love into our lives and begin to fully use the power of love in our own lives.',
        'This event is suitable for everyone who feels ready and wants to feel the power of love in their life and enjoy it.',
        'This is exactly the place where you need to be if you are ready to love yourself. To build plans for a happy future relationship full of love or to feel even more the power of love in your relationships.',
        'If you want to feel and control the power of love in every part of your life in contact with all the people who dear to you.',
        '3-5 days a beautiful venue and peaceful surroundings, delving into the topic of love and the happiness of being in a relationship.',
        'Immersion in the specifics of building strong and happy relationships. Working through negative experiences or psychological traumas that do not provide an opportunity to build happy relationships.',
      ],
    },
  ];

  return (
    <Section>
      <Container>
        <SectionTitle>Retreats</SectionTitle>
        <div className={styles.content}>
          <ul className={styles.list}>
            {retreats.map(({ title, img, text }) => (
              <li className={styles.item} key={title}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.row}>
                  <div className={styles.imgWrapper}>
                    <img className={styles.img} src={img} alt={title} />
                  </div>
                  <div className={styles.text}>
                    {text.map((textItem, index) => {
                      return Array.isArray(textItem) ? (
                        <ul className={styles.textList} key={index}>
                          {textItem.map((listItem, index) => (
                            <li className={styles.textItem} key={index}>
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className={styles.textItem} key={index}>
                          {textItem}
                        </p>
                      );
                    })}
                    <div className={styles.leaders}>
                      <Leaders />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
