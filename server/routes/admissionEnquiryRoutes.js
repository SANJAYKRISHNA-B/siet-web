import { Router } from 'express';
import {
  createAdmissionEnquiry,
  triggerTestAutomatedCall,
  getCallStatus,
  simulateCallOutcome,
  handleExotelWebhook
} from '../controllers/admissionEnquiryController.js';

const router = Router();

router.post('/', createAdmissionEnquiry);
router.post('/:id/test-call', triggerTestAutomatedCall);
router.get('/calls/:callSid', getCallStatus);
router.post('/calls/:callSid/simulate', simulateCallOutcome);
router.post('/webhooks/exotel', handleExotelWebhook);

export default router;
