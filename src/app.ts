import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRouter } from './app/modules/student/student.routes';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/student', studentRouter);

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

export default app;
