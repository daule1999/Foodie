'use strict'

import mongoose from 'mongoose'

const {
  MONGO_DBNAME = '',
  MONGO_HOSTS = '',
  MONGO_USERNAME = '',
  MONGO_PASSWORD = ''
} = process.env

const REQUIRED_CONFIG = [
  // 'MONGO_DBNAME',
  // 'MONGO_HOSTS',
  // 'MONGO_USERNAME',
  // 'MONGO_PASSWORD'
]

REQUIRED_CONFIG.forEach(key => {
  if (!process.env[key]) {
    console.error('[Error] Missing MongoDB Config:', key)
    return process.exit(1)
  }
})

const MONGO_CREDENTIALS = encodeURIComponent(MONGO_USERNAME) + ':' + encodeURIComponent(MONGO_PASSWORD)
const CONNECTION_URI = `mongodb://${MONGO_CREDENTIALS}@${MONGO_HOSTS}/${MONGO_DBNAME}`

const CONFIG = {
  DBNAME: MONGO_DBNAME,
  CONNECTION_URI,
  OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
}

mongoose.connection.on('connected', () => {
  console.log('Mongo Connection Established')
})

mongoose.connection.on('reconnected', () => {
  console.log('Mongo Connection Re-established')
})

mongoose.connection.on('disconnected', () => {
  console.log('[Error] Mongo Connection Disconnected')
})

mongoose.connection.on('close', () => {
  console.log('Mongo Connection Closed')
})

mongoose.connection.on('error', (error) => {
  throw error
})

if (process.env.APP_ENVIROMENT === 'dev') { mongoose.set('debug', true) }

const mongoConnect = async () => {
  console.log('[Connection] Connecting to MongoDB...')
  await mongoose.connect(CONNECTION_URI, CONFIG.OPTIONS)
}

const mongoDisconnect = async () => {
  console.log('[Connection] Closing connection to MongoDB...')
  await mongoose.disconnect(CONNECTION_URI, CONFIG.OPTIONS)
}

const MONGO_CONFIG = { CONFIG, mongoConnect, mongoDisconnect }

export default MONGO_CONFIG
