'use strict'

import ERROR_CLASSIFICATIONS from './ERROR_CLASSIFICATIONS'
import packageJson from '../../package.json'

const { name } = packageJson
const PROJECT_NAME = name
const MODULE_NAME = 'APP'

const USER_ERRORS = {
  USER_NOT_FOUND: {
    name: 'USER_ERRORS',
    statusCode: 419,
    message: 'Requested User Not Found',
    classification: ERROR_CLASSIFICATIONS.DATABASE,
    code: `${PROJECT_NAME}_${MODULE_NAME}_23`
  },
  INVALID_SIGNUP_CREDS: {
    name: 'USER_ERRORS',
    statusCode: 500,
    message: 'Not all fields have been entered.',
    classification: ERROR_CLASSIFICATIONS.DATABASE,
    code: `${PROJECT_NAME}_${MODULE_NAME}_23`
  },
  INVALID_PASSWORD_LENGTH: {
    name: 'USER_ERRORS',
    statusCode: 500,
    message: 'Enter Valid password length',
    classification: ERROR_CLASSIFICATIONS.VALIDATION,
    code: `${PROJECT_NAME}_${MODULE_NAME}_23`
  },
  USER_ALREADY_EXIST: {
    name: 'USER_ERRORS',
    statusCode: 419,
    message: 'User Already Exist',
    classification: ERROR_CLASSIFICATIONS.VALIDATION,
    code: `${PROJECT_NAME}_${MODULE_NAME}_23`
  },
  INCORRECT_PASSWORD: {
    name: 'USER_ERRORS',
    statusCode: 419,
    message: 'Password Not Matched',
    classification: ERROR_CLASSIFICATIONS.VALIDATION,
    code: `${PROJECT_NAME}_${MODULE_NAME}_23`
  }
}

export default USER_ERRORS
