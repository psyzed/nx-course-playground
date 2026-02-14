import express, { type Express } from 'express';
import { getCoursesController } from '@df/courses-controller';

const app: Express = express();

app.use(express.json());

app.get('/api/courses', getCoursesController);

export default app;
