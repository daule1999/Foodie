'use strict'

import { VersionModel } from '../models'

const VersionController = {
  get
}

export default VersionController

async function get (req, res) {
  const data = await VersionModel.get()
  res.send(data)
}
