const validationHelper = require("../validationsHelpers/validationHelper");
const ValidationError = require("../../exceptions/ValidationError");


module.exports = (req, res) => {

    const { editorToken } = req.body;
    validationHelper.ObjExists(["devicetoken", "usertoken"], req.headers); //check headers info
   

    req.body.appSetIPAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    req.body.appSetDeviceToken = req.headers.devicetoken;
    req.body.appSetUserToken = req.headers.usertoken;
    

    // ==> check required key exists or not
    validationHelper.ObjExists(["editorToken"], req.body);

    // ==> Required Should  Be not empty Value
    validationHelper.isEmpty([ editorToken ]);

    return true;

}