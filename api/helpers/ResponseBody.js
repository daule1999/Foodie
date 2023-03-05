'use strict'

import http from 'http'

export default class ResponseBody {
  constructor (statusCode, message, data, error) {
    const { statusCode: statCode = 200, status, message: msg } = data
    this.statusCode = statCode || statusCode
    this.status = http.STATUS_CODES[status || statusCode]
    this.message = msg || message
    this.data = statusCode === 200 && statCode === 200 ? data : undefined
    this.error = statCode !== 200 ? data : undefined
  }
}
