'use strict'

import Express from 'express'

const expressUtils = {
  createRouter

}
export default expressUtils

function createRouter () {
  return new Express.Router()
}
