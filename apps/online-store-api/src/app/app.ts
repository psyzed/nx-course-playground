import express from 'express';
import { getCoursesController } from '@df/courses-controller';

const app = express();

app.use(express.json());

app.get('/api/courses', getCoursesController);

export default app;
