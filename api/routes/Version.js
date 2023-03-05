'use strict'

import { expressUtils } from '../helpers'
import { VersionController } from '../controllers'

const VersionRouter = expressUtils.createRouter()
const { get } = VersionController

VersionRouter.get('/', get)

export default VersionRouter
