import express from 'express';
import cors from 'cors';
import connection from './config/db';
import router from './routes/index.router';

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());

app.use(cors());

app.use('/api', router);

app.listen(PORT, () => {
    connection();
    console.log("App running on PORT: ", PORT)
})