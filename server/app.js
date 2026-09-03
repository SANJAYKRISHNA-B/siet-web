import cors from 'cors';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import enquiryRoutes from './routes/enquiryRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import {errorHandler,notFound} from './middleware/errorHandler.js';
const app=express();
app.use(cors({origin:process.env.CLIENT_URL||'http://127.0.0.1:5173'}));
app.use(express.json({limit:'1mb'})); app.use(express.urlencoded({extended:true}));
app.get('/api/health',(_req,res)=>res.json({ok:true,service:'SIET API'}));
app.use('/api/news',newsRoutes); app.use('/api/enquiries',enquiryRoutes);

if (process.env.NODE_ENV === 'production') {
  const currentDirectory=path.dirname(fileURLToPath(import.meta.url));
  const clientDirectory=path.resolve(currentDirectory,'../client/dist');
  app.use(express.static(clientDirectory));
  app.get('*',(req,res,next)=>req.path.startsWith('/api/')?next():res.sendFile(path.join(clientDirectory,'index.html')));
}

app.use(notFound); app.use(errorHandler);
export default app;
