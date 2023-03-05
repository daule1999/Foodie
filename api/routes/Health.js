'use strict'

import { expressUtils } from '../helpers'
import { HealthController } from '../controllers'

const HealthRouter = expressUtils.createRouter()
const { get } = HealthController

HealthRouter.get('/', get)

export default HealthRouter
