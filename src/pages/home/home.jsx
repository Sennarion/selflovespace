import Hero from 'components/hero/hero';
import Reviews from 'components/reviews/reviews';
import OurServices from 'components/services/our-services';
import Help from 'components/help/help';
import Form from 'components/form/form';

export default function Home() {
  return (
    <>
      <Hero />
      <OurServices />
      <Help />
      <Reviews />
      <Form />
    </>
  );
}
