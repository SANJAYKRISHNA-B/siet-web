import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();
app.use(cors()); app.use(express.json());

const enquirySchema = new mongoose.Schema({name:String,email:String,phone:String,course:String,message:String},{timestamps:true});
let Enquiry;
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI).then(()=>console.log('MongoDB connected')).catch(e=>console.warn('MongoDB unavailable:',e.message));
  Enquiry = mongoose.model('Enquiry', enquirySchema);
}
app.get('/api/health',(_,res)=>res.json({ok:true,service:'SIET API'}));
app.get('/api/news',(_,res)=>res.json([
  {tag:'Placements',title:'657+ job offers in 2025',date:'2025'},
  {tag:'Space',title:'SIET is an institutional member of UNISEC India',date:'Campus milestone'},
  {tag:'Achievement',title:'4,263+ job offers in the past five years',date:'Current highlight'}
]));
app.post('/api/enquiries',async(req,res)=>{
  const {name,email,phone,course,message=''}=req.body;
  if(!name||!email||!phone||!course) return res.status(400).json({message:'Please complete all required fields.'});
  if(!Enquiry||mongoose.connection.readyState!==1) return res.status(503).json({message:'Enquiry received in demo mode. Connect MongoDB to persist submissions.'});
  const saved=await Enquiry.create({name,email,phone,course,message}); res.status(201).json({message:'Thank you. Our admissions team will contact you.',id:saved.id});
});
const port=process.env.PORT||5050; app.listen(port,()=>console.log(`SIET API on ${port}`));
