import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import routeUsers from './routes/users';
import routeAccounts from './routes/accounts';
import routeTransactions from './routes/transactions';
import routesStatments from './routes/statments';

dotenv.config();
const app = express();

app.use(cors({
    origin: true,
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(routeUsers);
app.use(routeAccounts);
app.use(routeTransactions);
app.use(routesStatments);


app.listen(process.env.PORT, ()=>{
    console.log('Running', process.env.PORT);
});