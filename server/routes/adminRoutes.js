import { Router } from 'express';
import {
  verifyAdminAuth,
  verifyAdminKey,
  getAdminCallLogs,
  retryCall,
  getSystemStatus,
  triggerAdminTestCall
} from '../controllers/adminCallController.js';

const router = Router();

// Protect all admin endpoints with passkey verification
router.use(verifyAdminAuth);

router.post('/verify', verifyAdminKey);
router.get('/calls', getAdminCallLogs);
router.post('/calls/:callSid/retry', retryCall);
router.post('/test-call', triggerAdminTestCall);
router.get('/system-status', getSystemStatus);

export default router;
