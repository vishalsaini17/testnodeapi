const { create } = require('./user.service')

module.exports = {
  createUser: (req, res) => {
    const body = req.body
    body.verified = false
    
    create(body, (err, results) => {
      if (error) {
        return res.status(500).send({
          success: 0,
          message: "database error!!!"
        })
      }
      return res.status(200).send(results)
    })
  }
}