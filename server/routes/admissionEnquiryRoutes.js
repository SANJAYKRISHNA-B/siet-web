import { Router } from 'express';
import { createAdmissionEnquiry } from '../controllers/admissionEnquiryController.js';

const router = Router();
router.post('/', createAdmissionEnquiry);

export default router;
