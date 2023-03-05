'use strict'

import { expressUtils } from '../helpers'
import { UserController } from '../controllers'
import { auth } from '../middlerware'
const { signToken, verifyToken } = auth

const UserRouter = expressUtils.createRouter()

const { get, signup, login, profile } = UserController

UserRouter.get('/', get)
UserRouter.post('/signup', signup, signToken)
UserRouter.post('/login', login, signToken)
UserRouter.post('/profile', verifyToken, profile, signToken)

// UserRouter.use(signToken)

export default UserRouter
