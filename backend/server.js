import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import productRouter from './routes/productRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';

import 'dotenv/config.js';    
//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors({
  origin: ['https://zestify-frontend.vercel.app'] 
}));

//db connection
connectDB();

//api endpoints
app.use('/api/product', productRouter);
app.use('/api/user', userRouter);
app.use("/api/cart", cartRouter);


app.get('/', (req, res) => {
    res.send('API Working');
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});



