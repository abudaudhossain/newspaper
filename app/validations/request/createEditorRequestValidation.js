const validationHelper = require("../validationsHelpers/validationHelper");
const ValidationError = require("../../exceptions/ValidationError");


module.exports = (req, res) => {

    const { name, email,  password, phone, image } = req.body;
    validationHelper.ObjExists(["devicetoken", "usertoken"], req.headers); //check headers info
   

    req.body.appSetIPAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    req.body.appSetDeviceToken = req.headers.devicetoken;
    req.body.appSetUserToken = req.headers.usertoken;
    

    // ==> check required key exists or not
    validationHelper.ObjExists(["name", "email",  "password", 'phone', 'image'], req.body);

    // ==> Required Should  Be not empty Value
    validationHelper.isEmpty([ name, email,  password, phone, image ]);

    // ==> name validation
    if (validationHelper.nameValidation(name)) throw new ValidationError("Should be use Only character in name");

    // ==> password Validation
    validationHelper.passwordValidation(password);

    // ==> email number Validation
    validationHelper.emailValidation(email);

    // ==> phone number validation
    validationHelper.phoneValidation({phone})

    return true;

}