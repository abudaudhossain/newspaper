const userAccount = require("../../services/userAccount");
const validationHelper = require("../validationsHelpers/validationHelper");


module.exports = (req, res) => {

    const { editorToken, carnetStatus } = req.body;
    validationHelper.ObjExists(["devicetoken", "usertoken"], req.headers); //check headers info


    req.body.appSetIPAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    req.body.appSetDeviceToken = req.headers.devicetoken;
    req.body.appSetUserToken = req.headers.usertoken;


    // ==> check required key exists or not
    validationHelper.ObjExists(["editorToken", "carnetStatus"], req.body);

    // ==> Required Should  Be not empty Value
    validationHelper.isEmpty([editorToken, carnetStatus]);



    return true;

}