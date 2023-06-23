import express from 'express';
import { authUser, logoutUser, registerUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();


router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.post('/', registerUser);
// router.get('/profile', getUserProfile);
// router.put('/profile', updateUserProfile);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;