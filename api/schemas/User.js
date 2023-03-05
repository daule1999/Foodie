import mongoose from 'mongoose'

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  displayName: { type: String }
})

export default User
