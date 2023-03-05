'use strict'

import { UserModel } from '../models'
import { ResponseBody } from '../helpers'
const UserController = {
  get,
  signup,
  login,
  profile
}

export default UserController

async function get (req, res) {
  const data = await UserModel.get()
  res.send(data)
}

async function signup (req, res, next) {
  const { body } = req
  const data = await UserModel.signup(body)
  const responseBody = new ResponseBody(200, 'User SignUp Successful', data)
  res.body = responseBody
  next()
}

async function login (req, res, next) {
  const { body } = req
  const data = await UserModel.login(body)
  const responseBody = new ResponseBody(200, 'User Login Successful', data)
  res.body = responseBody
  next()
}

async function profile (req, res, next) {
  const { body, user } = req
  const data = await UserModel.profile({ ...body, ...user })
  const responseBody = new ResponseBody(200, 'User Fetch Successful', data)
  res.body = responseBody
  next()
}
