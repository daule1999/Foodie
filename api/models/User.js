'use strict'

import packageJson from '../../package.json'
import bcrypt from 'bcrypt'
import { User } from '../schemas'
import { CustomError } from '../helpers'
import { USER_ERRORS } from '../constants'

const UserModel = {
  get,
  createUser,
  findUserByEmail,
  SaveUser,
  signup,
  login,
  profile
}

export default UserModel

const hasher = async (password) => {
  const salt = await bcrypt.genSalt(10)
  const hash = bcrypt.hash(password, salt)
  return hash
}

const matchPassword = async (password, userPassword) => {
  return await bcrypt.compare(password, userPassword)
}

async function get () {
  const { name, description, User } = packageJson
  return { name, description, User }
}

async function createUser (email, password) {
  const hash = await hasher(password)
  const user = new User({
    email,
    password: hash
  })
  return user
}

async function findUserByEmail (email) {
  try {
    return await User.findOne({ email })
  } catch (err) {
    console.log(err)
    return {}
  }
}

async function SaveUser (user) {
  try {
    return user.save()
  } catch (err) {
    throw new Error({
      error: err
    })
  }
}

async function signup (attrs) {
  const { email, password, passwordCheck, displayName } = attrs
  if (!email || !password || !passwordCheck) {
    return new CustomError(USER_ERRORS.INVALID_SIGNUP_CREDS)
  }
  if (password.length < 5) {
    return new CustomError(USER_ERRORS.INVALID_PASSWORD_LENGTH)
  }
  const userExist = await findUserByEmail(email)
  if (userExist) {
    return new CustomError(USER_ERRORS.USER_ALREADY_EXIST)
  }
  const user = await createUser(email, password)
  const savedUser = await SaveUser(user)
  return { user: savedUser }
}

async function login (attrs) {
  const { email, password } = attrs

  const userExist = await findUserByEmail(email)
  if (!userExist) {
    return new CustomError(USER_ERRORS.USER_NOT_FOUND)
  }
  const isMatch = await matchPassword(password, userExist.password)

  if (!isMatch) {
    return new CustomError(USER_ERRORS.INCORRECT_PASSWORD)
  }
  return { user: userExist }
}

async function profile (attrs) {
  const { id = '' } = attrs
  const user = await User.findById(id).select('-password')
  return { user }
}
