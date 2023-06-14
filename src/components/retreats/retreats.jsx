import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import SectionTitle from 'components/ui/section-title/section-title';
import Leaders from 'components/leaders/leaders';
import styles from './retreats.module.scss';
import { retreats } from 'data/data';

export default function Retreats() {
  return (
    <Section>
      <Container>
        <SectionTitle>Retreats</SectionTitle>
        <div className={styles.content} id="retreats">
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
