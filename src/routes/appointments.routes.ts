import { Router } from 'express';
import { v4 } from 'uuid';

interface IAppointment {
  id: string;
  provider: string;
  date: string;
}

const appointmentsRouter = Router();

const appointments: Array<IAppointment> = [];

appointmentsRouter.get('/', (request, response) => {
  return response.status(200).json({ appointments });
});

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const appointment = {
    id: v4(),
    provider,
    date,
  };

  appointments.push(appointment);

  return response.status(200).json(appointment);
});

export default appointmentsRouter;
