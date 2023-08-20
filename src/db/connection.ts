import { connect } from 'mongoose';

class MongoDbConnection {
    async connect(): Promise<any> {
        const uri: string =
            'mongodb+srv://admin:CoffeeFish@cluster0.xpu1y.mongodb.net/crypto-dashboard?retryWrites=true&w=majority';
        try {
            await connect(uri);
            console.log('Connected To Mongodb in the Cloud');
        } catch (error) {
            console.log('Error connecting', error);
        }
    }
}

export default new MongoDbConnection().connect;
