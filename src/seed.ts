// mongoexport --uri mongodb+srv://admin:CoffeeFish@cluster0.xpu1y.mongodb.net/crypto-dashboard --collection trades --type js --out data.json
import data from './data.json';
import mongo from './db/connection';
import { TradeModel } from './model/trade';

async function seed() {
    await mongo();
    await TradeModel.deleteMany({});
    for (let trade of data) {
        const doc = await new TradeModel({
            ...trade,
            advisorType: 'Manual',
            date: new Date(),
        }).save();
        console.log(doc.asset + ' Inserted');
    }
}

seed();
