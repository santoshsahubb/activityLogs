import {Router} from 'express';
import { logUserActivity,fetchActivityLogs } from '../controllers/activityController';


const router = Router();

router.post('/log', logUserActivity);
router.get('/logs',fetchActivityLogs)

export default router;