import mongoose from 'mongoose';
import Enquiry from '../models/Enquiry.js';
const demoSubmissions = [];

export async function createEnquiry(req,res,next) {
  try {
    const {name,email,phone,message=''}=req.body;
    const course=req.body.course||req.body.category||req.body.position;
    if(!name||!email||!phone||!course) return res.status(400).json({message:'Please complete all required fields.'});
    
    if(mongoose.connection.readyState!==1) {
      demoSubmissions.push({name,email,phone,course,message,enquiryType:req.body.category?'career':'admission',createdAt:new Date()});
      return res.status(200).json({
        ok: true,
        message: 'Thank you! Your details have been received. Our admissions and outreach team will contact you shortly.',
        demo: true
      });
    }

    const enquiry=await Enquiry.create({name,email,phone,course,message,enquiryType:req.body.category?'career':'admission'});
    return res.status(201).json({ok: true, message:'Thank you! Your details have been received. Our team will contact you shortly.',id:enquiry.id});
  } catch(error) { return next(error); }
}
