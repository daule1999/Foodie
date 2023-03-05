'use strict'

import HealthRouter from './Health'
import VersionRouter from './Version'
import UserRouter from './User'

const Routes = [
  { path: '/health', router: HealthRouter },
  { path: '/version', router: VersionRouter },
  { path: '/user', router: UserRouter }
]

Routes.init = (app) => {
  Routes.forEach(route => app.use(route.path, route.router))
}

export default Routes
