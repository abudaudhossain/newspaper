const handler = require("../exceptions/handler");
const { nativeResponse, getJwtToken } = require("../helpers/utility");
const createNewSession = require("../services/createNewSession");
const removeEditorAccount = require("../services/removeEditorAccount");
const userAccount = require("../services/userAccount");
const createEditorRequestValidation = require("../validations/request/createEditorRequestValidation");
const removeEditorRequestValidation = require("../validations/request/removeEditorRequestValidation");
const validationHelper = require("../validations/validationsHelpers/validationHelper")

module.exports = {
    createEditor: async (req, res) => {
        try {
            console.log(req.body)
            // Validation part
            createEditorRequestValidation(req, res);
            // check user rule
            await validationHelper.isAdmin(req.body.appSetUserToken)

            await validationHelper.accountExists(req.body.email)

            const account = await userAccount.createNewAccount(req.body);

            // set body account token and create new session
            req.body.appSetAccountToken = account[0].AccountNo;
            const newSession = await createNewSession(req.body);

            console.log("new session account =>>24", newSession);
            // ==> add to new session token 
            account[0].sessionToken = newSession.data.sessionToken;
            account[0].sessionStatus = newSession.data.status;

            // ==> add jwt token
            account[0].jwtToken = getJwtToken(account[0].AccountNo, account[0].sessionToken)
            console.log("accountAuth l27 :", account[0]);



            nativeResponse(account[0], "😎😉Create a new account😍💋", res)

        } catch (error) {
            console.log(error);
            handler(error, res)
        }
    },
    removeEditor: async (req, res) => {
        try {
            // validation part
            removeEditorRequestValidation(req, res);
            // check user rule
            await validationHelper.isAdmin(req.body.appSetUserToken)

            const result = await removeEditorAccount({ token: req.body.editorToken })
            console.log("ekjflskd=============", result)


            nativeResponse(result.data, result.msg, res)



        } catch (error) {
            console.log(error);
            handler(error, res);
        }
    },
}