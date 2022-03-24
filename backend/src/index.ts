import express, { Request, Response } from 'express';
import cors from 'cors';
import api from './apis';
import joiErrors from './helpers/joi.error';
import  './database/models/combinations';
import { OK } from './utils/constants/statusCode';


const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    return res.json({
        status:OK,
        message:'Welcome to electricity tokens seller'
    })
})
app.use('/api', api);
app.use(joiErrors());

const PORT = 8000;

app.listen(process.env.PORT || PORT, (): void => console.log(`Server listening on Port ${PORT}`));

export default app;

