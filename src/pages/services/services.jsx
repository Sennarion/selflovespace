import Retreats from 'components/retreats/retreats';
import Sessions from 'components/sessions/sessions';
import Consultations from 'components/consultations/consultations';
import Psychotherapy from 'components/psychotherapy/psychotherapy';
import BodyTherapy from 'components/body-therapy/body-therapy';

export default function Services() {
  return (
    <div>
      <Retreats />
      <Sessions />
      <Consultations />
      <Psychotherapy />
      <BodyTherapy />
    </div>
  );
}
