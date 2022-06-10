const validationHelper = require("../validationsHelpers/validationHelper");
const ValidationError = require("../../exceptions/ValidationError");


module.exports = (req, res) => {

    validationHelper.ObjExists(["devicetoken", "usertoken"], req.headers); //check headers info
   

    req.body.appSetIPAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    req.body.appSetDeviceToken = req.headers.devicetoken;
    req.body.appSetUserToken = req.headers.usertoken;
    

    return true;

}