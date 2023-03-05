'use strict'

import Express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import Routes from './api/routes'
import { SERVER_CONFIG } from './config'
import startServer from './startServer'
import { logger } from './api/helpers'
import { ErrorHandler } from './api/middlerware'

require('dotenv').config()

const { BODY_LIMIT, CORS_OPTIONS } = SERVER_CONFIG
const app = new Express()

// Middleware Initializations
app.use(cors(CORS_OPTIONS))
app.use(bodyParser.json({ limit: BODY_LIMIT }))
app.use(bodyParser.urlencoded({ limit: BODY_LIMIT, extended: true }))
app.use(helmet())
app.use(logger)
// app.use(ErrorHandler)
// Initialize Routes
Routes.init(app)

// Start Server
startServer(app)

// For testing
module.export = app
