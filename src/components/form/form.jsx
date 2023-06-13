import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Section from 'components/ui/section/section';
import Container from 'components/ui/container/container';
import SectionTitle from 'components/ui/section-title/section-title';
import 'react-toastify/dist/ReactToastify.css';
import styles from './form.module.scss';

export default function Form() {
  const onSubmit = e => {
    e.preventDefault();

    const data = new FormData(e.target);
    const name = data.get('name');
    const phone = data.get('phone');
    const email = data.get('email');
    const text = data.get('text');

    axios
      .post('https://getform.io/f/dd1f07e3-dd2e-4a55-84e6-1f8eca34e095', {
        name,
        phone,
        email,
        text,
      })
      .then(response => {
        if (response.status === 200) {
          toast.success(
            'We have received your application and will contact you shortly',
            {
              position: toast.POSITION.BOTTOM_LEFT,
            }
          );

          e.target.reset();
        }
      })
      .catch(error => {
        toast.error(`Oooops... Something went wrong. Error status: ${error}`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };

  return (
    <Section>
      <Container>
        <div className={styles.content} id="form">
          <SectionTitle subtitle="We are more then happy to meet you for 30 minutes via Google Meet to introduce all our services and find the best way to be useful in your life">
            The best time for our meeting
          </SectionTitle>
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.formContent}>
              <div className={styles.column}>
                <label className={styles.label}>
                  <span className={styles.labelTitle}>Your name</span>
                  <input
                    className={styles.input}
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                </label>
                <label className={styles.label}>
                  <span className={styles.labelTitle}>Your phone</span>
                  <input
                    className={styles.input}
                    name="phone"
                    type="tel"
                    placeholder="07760 164 058"
                    required
                  />
                </label>
                <label className={styles.label}>
                  <span className={styles.labelTitle}>Your email</span>
                  <input
                    className={styles.input}
                    name="email"
                    type="email"
                    placeholder="youremail@gmail.com"
                    required
                  />
                </label>
              </div>
              <div className={styles.column}>
                <label className={styles.label}>
                  <span className={styles.labelTitle}>Type something</span>
                  <textarea
                    className={styles.textArea}
                    name="text"
                    placeholder="If you have something to write, write it here"
                  ></textarea>
                </label>
              </div>
            </div>
            <button className={styles.button} type="submit">
              send an application
            </button>
          </form>
          <ToastContainer />
        </div>
      </Container>
    </Section>
  );
}