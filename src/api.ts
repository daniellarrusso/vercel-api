import express, { Request, Response } from 'express';
import cors from 'cors';
import symbolsRoute from './routes/symbols';
import tradesRoute from './routes/trades';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use('/symbols', symbolsRoute);
app.use('/trades', tradesRoute);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to dashboard API 👻');
});

const connectApi = () =>
    app.listen(port, () => {
        console.log('API listening on port: ' + port);
    });

export default connectApi;
