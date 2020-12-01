import { Router } from 'express';

const routes = Router();

routes.post('/', (request, response) => {
  const { email, password } = request.body;

  const user = {
    email,
    password,
  };

  return response.json(user);
});

export default routes;
