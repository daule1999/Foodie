'use strict'

import { SERVER_CONFIG, MONGO_CONFIG } from './config/index.js'

const { PORT } = SERVER_CONFIG

const startServer = async (app) => {
  try {
    await MONGO_CONFIG.mongoConnect()
    console.log('MongoDB Connected')
    // Start Listening on Configured Port
    await app.listen(PORT)
    console.log(`Server Started Successfully! http://localhost:${PORT}`)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default startServer
