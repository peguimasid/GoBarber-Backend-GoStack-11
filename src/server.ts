import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ guilhermo: 'lindo' })
})

app.listen(3333, () => {
  console.log('🧔🏻 GoBarber server started on port 3333!')
})