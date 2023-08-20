import connectApi from './api';
import mongo from './db/connection';

mongo();
connectApi();
