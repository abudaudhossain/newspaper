const handler = require("../exceptions/handler");
const validationHelper = require("../validations/validationsHelpers/validationHelper");
const AppAuthSession = require("../models/authSession");
const ValidationError = require("../exceptions/ValidationError");
const NotFoundError = require("../exceptions/NotFountError");

module.exports = async (req, res, next) => {
    try {
        validationHelper.ObjExists(["devicetoken", "sessiontoken"], req.headers);
        validationHelper.ObjExists(["accountNo", "phone"], req.body);

        console.log('hi, I am validUserRequestMiddleware')
        const deviceToken = req.headers.devicetoken;
        const sessionToken = req.headers.sessiontoken;
        const accountNo = req.body.accountNo;
        const phone = req.body.phone;

        const session = await AppAuthSession.findOne({ token: sessionToken })

        // ==> session token validation
        if (!session) throw new NotFoundError("🤑🤑🤑👾👾Please given valid session👽👽👾👽👽👽");

        // ==> device token validation
        if (session.deviceToken !== deviceToken) throw new ValidationError("🤑🤑🤑👾👾deviceToken is invalid. Please Login Now.👽👽👾👽👽👽");

        // ==> account token validation
        if (session.accountToken !== accountNo) throw new ValidationError("🤑🤑🤑👾👾AccountNo in invalid . Please Login Now.👽👽👾👽👽👽");

      
        //==> check session status
        if (session.status === "Inactive") throw new ValidationError("🤑🤑🤑👾👾session Is inactive.Please Login Now.👽👽👾👽👽👽")


        req.body.appSetSessionToken = sessionToken;

        next();
    } catch (error) {
        console.log(error);
        handler(error, res);
    }
}