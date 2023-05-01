module.exports = function errorHandler(err, req, res, next) {
    console.log(err);
    let status;
    let message;
  
    switch (err.name) {
      case "SequelizeValidationError":
        status = 400
        message = err.errors[0].message
        break;
      case "SequelizeUniqueConstraintError":
        status = 400
        message = err.errors[0].message
        break;
      case "EmailIsRequired":
        status = 400
        message = "Email Is Required"
        break
      case "PasswordIsRequired":
        status = 400
        message = "Password Is Required"
        break
      case "NotFound":
        status = 404
        message = "Data not found"
        break
      case "InvalidCredentials":
        status = 400
        message = "Invalid email or password"
        break
      case "Unauthenticated":
      case "JsonWebTokenError":
        status = 401
        message = "Invalid Token"
        break
      case "Forbidden":
        status = 403
        message = "Forbidden"
        break
      default:
        status = 500
        message = "Internal Server Error"
        break
    }
  
    res.status(status).json({
      message: message
    })
  }