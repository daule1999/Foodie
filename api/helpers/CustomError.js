// 'use strict'

// import http from 'http'
// // import autoBind from 'auto-bind'

import ERROR_CLASSIFICATIONS from '../constants/ERROR_CLASSIFICATIONS'
// import ResponseBody from './ResponseBody'

const CAN_CAPTURE = typeof Error.captureStackTrace === 'function'
const CAN_STACK = !!new Error().stack

// class CustomError extends Error {
//   constructor (...params) {
//     const [
//       error = {},
//       overrideParams = {},
//       override = true
//     ] = params
//     const {
//       statusCode,
//       message,
//       classification,
//       code,
//       name,
//       type,
//       data
//     } = overrideParams
//     const errorHasKeys = !!Object.keys(error).length

//     const {
//       message: errMessage,
//       _isCustomError: errIsCustomError,
//       msg: errMsg,
//       name: errName,
//       statusCode: errStatusCode,
//       type: errType,
//       classification: errClassification,
//       code: errCode,
//       error: errError,
//       stack: errStack
//     } = error || {}

//     const hardOverride = override || !errIsCustomError
//     const finalMessage = (hardOverride && message) || errMessage || errMsg

//     super(finalMessage)

//     this._isCustomError = true

//     this.name = (hardOverride && name) || errName

//     this.statusCode = (hardOverride && statusCode) || errStatusCode || 500
//     this.message = finalMessage
//     this.msg = finalMessage
//     this.type = (hardOverride && type) || errType || undefined
//     this.classification = (hardOverride && classification) || errClassification || ERROR_CLASSIFICATIONS.GENERIC
//     this.code = (hardOverride && code) || errCode || undefined

//     this.status = http.STATUS_CODES[statusCode]
//     this.error = errError || (
//       (errIsCustomError || !errorHasKeys)
//         ? undefined
//         : error
//     )
//     const thisErrorHasKeys = !!Object.keys(this.error || {}).length
//     if (!thisErrorHasKeys) { this.error = undefined }

//     this.data = data

//     this.stack = errStack || (
//       (CAN_CAPTURE && Error.captureStackTrace(this, CustomError)) ||
//       (CAN_STACK && new Error().stack) ||
//       undefined
//     )
//     // autoBind(this)
//   }

//   getResponseBody () {
//     const { statusCode, message } = this
//     const error = this.toJSON()

//     const { NODE_ENV } = process.env
//     error.stack = (NODE_ENV === 'production' && undefined) || error.stack

//     return new ResponseBody(statusCode, message, undefined, error)
//   }

//   toJSON () {
//     const { toJSON, ...rest } = this
//     return JSON.parse(JSON.stringify(rest))
//   }
// }

// export default CustomError

class CustomError extends Error {
  constructor (message, statusCode, status) {
    super()
    const { statusCode: statCode, code, message: msg, classification, name } = message
    Error.captureStackTrace(this, this.constructor)

    this.name = name || this.constructor.name

    this.message = msg || message ||
      'Something went wrong. Please try again.'

    this.status = status || 'Error'

    this.statusCode = statCode || statusCode || 500

    this.code = code

    this.classification = classification
  }
}
export default CustomError
