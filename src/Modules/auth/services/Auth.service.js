import AuthController from "../controllers/Auth.controller.js"

const Login = async (req, res) => {
    return await AuthController.Login(req, res);
}


const SingUp = async (req, res) => {
    return await AuthController.SingUp(req, res);
}

const UpdateProfile = async (req, res) => {
    return await AuthController.UpdateProfile(req, res);
}

const NewPassword = async (req, res) => {
    return await AuthController.NewPassword(req, res);
}

const UpdatePassword = async (req, res) => {
    return await AuthController.UpdatePassword(req, res);
}

const forgetPassword = async (req, res) => {
    return await AuthController.forgetPassword(req, res);
}

const Confirmed = async (req, res) => {
    return await AuthController.Confirmed(req, res);
}

export {
    Confirmed,
    Login,
    SingUp,
    UpdateProfile,
    NewPassword,
    UpdatePassword,
    forgetPassword
}