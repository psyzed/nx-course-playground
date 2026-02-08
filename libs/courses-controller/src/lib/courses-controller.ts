import { Request, Response } from 'express';
import { getUUID } from '@df/utils';

export const getCoursesController = (_: Request, res: Response) => {
  res.json([
    { id: getUUID(), name: 'Advanced Angular Forms' },
    { id: getUUID(), name: 'Conscious Angular Testing' },
  ]);
};
