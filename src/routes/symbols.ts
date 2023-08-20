import { Request, Response, Router } from 'express';
import { SymbolModel } from '../model/symbol';

const route = Router();

route.get('/', async (req: Request, res: Response) => {
    const result = await SymbolModel.find().select('-__v');

    res.json(result).status(200);
});

export default route;
