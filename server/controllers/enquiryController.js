import mongoose from 'mongoose';
import Enquiry from '../models/Enquiry.js';
export async function createEnquiry(req,res,next) {
  try {
    const {name,email,phone,message=''}=req.body;
    const course=req.body.course||req.body.category||req.body.position;
    if(!name||!email||!phone||!course) return res.status(400).json({message:'Please complete all required fields.'});
    if(mongoose.connection.readyState!==1) return res.status(503).json({message:'Enquiry received in demo mode. Connect MongoDB to persist submissions.'});
    const enquiry=await Enquiry.create({name,email,phone,course,message,enquiryType:req.body.category?'career':'admission'});
    return res.status(201).json({message:'Thank you. Our team will contact you.',id:enquiry.id});
  } catch(error) { return next(error); }
}
