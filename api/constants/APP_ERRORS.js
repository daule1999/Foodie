'use strict'

import ERROR_CLASSIFICATIONS from './ERROR_CLASSIFICATIONS'
import packageJson from '../../package.json'

const { name } = packageJson
const PROJECT_NAME = name
const MODULE_NAME = 'APP'

const APP_ERRORS = {
  EXPIRED: {
    statusCode: 419,
    message: 'Your Application has expired',
    classification: ERROR_CLASSIFICATIONS.GENERIC,
    code: `${PROJECT_NAME}_${MODULE_NAME}_00`
  },
  UPDATE_NOT_ALLOWED: {
    statusCode: 422,
    message: 'Unprocessible entity',
    classification: ERROR_CLASSIFICATIONS.VALIDATION,
    code: `${PROJECT_NAME}_${MODULE_NAME}_03`
  },
  TOKEN_NOT_FOUND: {
    statusCode: 404,
    message: 'TOKEN not found',
    classification: ERROR_CLASSIFICATIONS.GENERIC,
    code: `${PROJECT_NAME}_${MODULE_NAME}_04`
  },
  INVALID_PROFILE_UPDATE_REQUEST: {
    statusCode: 400,
    message: 'Invalid Profile Update Request',
    classification: ERROR_CLASSIFICATIONS.VALIDATION,
    code: `${PROJECT_NAME}_${MODULE_NAME}_09`,
    profileErrors: {
      present: "'profile' cannot be empty",
      invalidformat: "Invalid format of 'profile'"
    }
  },
  INVALID_SESSION_UPDATE_REQUEST: {
    statusCode: 400,
    message: 'Invalid Session Update Request',
    classification: ERROR_CLASSIFICATIONS.VALIDATION,
    code: `${PROJECT_NAME}_${MODULE_NAME}_10`,
    sessionErrors: {
      present: "'session' cannot be empty",
      invalidformat: "Invalid format of 'session'"
    }
  },
  APPLICATION_NOT_FOUND: {
    statusCode: 419,
    message: 'Your application is not found while fetching masters.',
    classification: ERROR_CLASSIFICATIONS.GENERIC,
    code: `${PROJECT_NAME}_${MODULE_NAME}_23`
  },
  TOKEN_EXPIRE: {
    statusCode: 401,
    message: 'TOKEN EXPIRED',
    classification: ERROR_CLASSIFICATIONS.VALIDATION,
    code: `${PROJECT_NAME}_01`
  }
}

export default APP_ERRORS
