import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';

// User Router
const userRouter = express.Router();

// User routes
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/user/loginStatus');
userRouter.get('/user/logout');
userRouter.patch('/:id');
userRouter.patch('/:id/update-photo');
userRouter.get('/:id');
userRouter.get('/');
userRouter.get('/count/customers');
userRouter.delete('/:id');
userRouter.delete('/');

// Export User Router
export default userRouter;
