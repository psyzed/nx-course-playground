import { Request, Response } from 'express';
import { getUUID } from '@df/utils';

export const getCoursesController = (_: Request, res: Response) => {
  res.json([
    { id: getUUID(), name: 'Advanced Angular Forms Course' },
    { id: getUUID(), name: 'Conscious Angular Testing Course' },
    { id: getUUID(), name: 'Nx Workspace Course' },
  ]);
};
