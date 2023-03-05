'use strict'

import { SERVER_CONFIG } from '../../config'

const HealthModel = {
  get,
  serviceHealthCheck
}

export default HealthModel

async function get () {
  return { status: 200, HealthStatus: 'Success' }
}

function serviceHealthCheck () {
  const { DISABLE_MAINTENANCE } = SERVER_CONFIG
  if (DISABLE_MAINTENANCE === 'false') {
    throw new Error('SITE UNDER MAINTENECE')
  }
}
