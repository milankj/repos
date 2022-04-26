const User = require('../models/users.model')

exports.createUser = (req, res) => {
  const user = new User(req.body)

  user.save((err, result) => {
    if (err) {
      res.status(400).json({
        status: res.statusCode,
        result: {
          error: error,
        },
      })
    } else {
      res.status(201).json({
        status: res.statusCode,
        result: {
          msg: 'User created successFully',
          user: result,
        },
      })
    }
  })
}

exports.getAllUsers = async (req, res) => {
  try {
    const result = await User.find({})
    res.status(200).json({
      status: res.statusCode,
      result: result,
    })
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      result: {
        error: error,
      },
    })
  }
}