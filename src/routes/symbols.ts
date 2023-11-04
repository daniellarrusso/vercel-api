import { Request, Response, Router } from 'express';
import { SymbolModel } from '../model/symbol';
import { TradeModel } from '../model/trade';

const route = Router();

route.get('/', async (req: Request, res: Response) => {
    const result = await SymbolModel.find().select('-__v');
    const trades = await TradeModel.find();

    const output = result.map((m) => ({
        _id: m._id,
        symbol: m.symbol,
        quantity: trades
            .filter((t) => t.asset === m.symbol)
            .reduce((acc, cur) => acc + cur.quantity, 0),
        cost: trades
            .filter((t) => t.asset === m.symbol)
            .reduce((acc, cur) => acc + cur.cost, 0),
    }));

    res.json(output).status(200);
});

route.post('/', async (req: Request, res: Response) => {
    const { symbol } = req.body;

    const doc = await new SymbolModel({ symbol });
    doc.save();

    res.json({ _id: doc._id, symbol: doc.symbol }).status(200);
});

export default route;
