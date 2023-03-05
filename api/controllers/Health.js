'use strict'

import { HealthModel } from '../models'

const HealthController = {
  get,
  serviceHealthCheckMiddleware
}

export default HealthController

async function get (req, res, next) {
  const data = await HealthModel.get()
  res.send(data)
}
function serviceHealthCheckMiddleware (request, response, next) {
  HealthModel.serviceHealthCheck()
}
