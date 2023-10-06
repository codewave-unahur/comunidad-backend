const {
    signup,
    requestPasswordReset,
    resetPassword,
  } = require("../services/auth.service");
  
  export const signUpController = async (req, res, next) => {
    const signupService = await signup(req.body);
    return res.status(200).json(signupService);
  };
  
  export const resetPasswordRequestController = async (req, res, next) => {
    const requestPasswordResetService = await requestPasswordReset(
      req.body.usuario
    );
    return res.json(requestPasswordResetService);
  };
  
  export const resetPasswordController = async (req, res, next) => {
    const resetPasswordService = await resetPassword(
      req.body.userId,
      req.body.token,
      req.body.password
    );
    return res.json(resetPasswordService);
  };