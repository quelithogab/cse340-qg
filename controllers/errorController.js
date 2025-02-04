const errorController = {}

errorController.triggerError = (req, res, next) => {
  const error = new Error("Intentional 500 error triggred")
  error.status = 500
  next(error)
}

module.exports = errorController

