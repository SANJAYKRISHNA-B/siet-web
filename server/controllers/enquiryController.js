import { insertEnquiry } from '../repositories/enquiryRepository.js';

const clean = (value, max = 1000) => String(value ?? '')
  .replace(/[\u0000-\u001F\u007F]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
  .slice(0, max);

export async function createEnquiry(req,res,next) {
  try {
    const name = clean(req.body.name || (req.body.referrer_name ? `${req.body.referrer_name} (Referral for ${req.body.candidate_name || 'Candidate'})` : req.body.candidate_name), 150);
    const email = clean(req.body.email || req.body.referrer_email || req.body.candidate_email, 255).toLowerCase();
    const phone = clean(req.body.phone || req.body.referrer_phone || req.body.candidate_phone, 30);
    const course = clean(req.body.course || req.body.category || req.body.position || req.body.candidate_course, 180);
    const message = clean(req.body.message || req.body.remarks || (req.body.referrer_relation ? `Relationship: ${req.body.referrer_relation}${req.body.referrer_reg_no ? ` | Reg No: ${req.body.referrer_reg_no}` : ''}` : ''), 2000);
    if(!name||!email||!phone||!course) return res.status(400).json({success:false,message:'Please complete all required fields.'});
    
    const enquiryType = req.body.referrer_name ? 'referral' : (req.body.category ? 'career' : 'general');
    const enquiry=await insertEnquiry({name,email,phone,course,message,enquiryType});
    return res.status(201).json({success:true,ok:true,message:'Thank you! Your details have been received. Our team will contact you shortly.',data:{id:enquiry.id}});
  } catch(error) { return next(error); }
}
