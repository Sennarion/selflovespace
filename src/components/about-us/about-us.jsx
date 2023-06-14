import classNames from 'classnames';
import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import SectionTitle from 'components/ui/section-title/section-title';
import styles from './about-us.module.scss';
import { about } from 'data/data';

export default function AboutUs() {
  return (
    <Section>
      <Container>
        <SectionTitle>About us</SectionTitle>
        <div className={styles.content}>
          {about.map(
            ({ id, img, photo, name, position, descr, listTitle, list }) => (
              <div className={styles.row} id={id} key={id}>
                <div
                  className={classNames(
                    styles.imgWrapper,
                    photo === 'arch' ? styles.arch : styles.leaf
                  )}
                >
                  <img
                    className={classNames(
                      styles.img,
                      photo === 'arch' ? styles.imgArch : styles.imgLeaf
                    )}
                    src={img}
                    alt={name}
                  />
                </div>
                <div className={styles.text}>
                  <h3 className={styles.name}>{name}</h3>
                  <p className={styles.position}>{position}</p>
                  <p className={styles.descr}>{descr}</p>
                  {listTitle && (
                    <p className={styles.listTitle}>
                      Member of professional organizations:
                    </p>
                  )}
                  {list && (
                    <ul className={styles.list}>
                      {list.map(item => (
                        <li className={styles.item} key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </Section>
  );
}
