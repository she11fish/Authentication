import express from 'express'
import { delete_account, logout, signin, signup, user_status } from '../controllers/controller.js';

const rootRouter = express.Router()

rootRouter.get('/user_status', user_status);

rootRouter.post('/signup', signup);

rootRouter.post('/signin', signin);

rootRouter.patch('/logout', logout);

rootRouter.delete('/delete_account', delete_account);

export default rootRouter