import jwt from 'jsonwebtoken'
const auth = {
  verifyToken,
  signToken
}
export default auth

function verifyToken (req, res, next) {
  const token = req.header('x-auth-token')
  if (!token) { return res.status(401).json('No token') }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded.user
    next()
  } catch (err) {
    console.log('Invalid token')
    return res.sendStatus(401).json({ message: 'Auth failed!' })
  }
}

function signToken (req, res, next) {
  const { body } = res
  if (!body) {
    return res.status(401).json({ message: 'User Not Found' })
  }
  const { statusCode = '', data } = body
  if (statusCode !== 200) {
    return res.status(statusCode).json(body)
  }
  const { user } = data

  if (!user) {
    console.log('User Not Found')
    return res.status(401).json({ message: 'User Not Found' })
  }
  try {
    const payload = {
      user: {
        id: user.id
      }
    }
    try {
      const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '1h' })

      res.json({ token, ...body })
    } catch (error) {
      console.log('Error in Signing Token', error)
      return res.sendStatus(401)
    }
    next()
  } catch (err) {
    console.log('Invalid token')
    return res.sendStatus(401).json({ message: 'Auth failed!' })
  }
}
