const setters = require("../helpers/setters");
const utility = require("../helpers/utility");
const updateStatus = require("./updateStatus")

const AppAccount = require("../models/user")// model

module.exports = {
    // ==> create new account
    createNewAccount: async (data) => {
        const { name, email, image, password, phone } = data;
        const token = utility.getToken("ACC");

        await updateStatus({ rule: 'editor' }); // inactive all active editor
        const newAccount = new AppAccount({
            token,
            name,
            email,
            phone,
            image,
            password,
            rule: 'editor',
            status: 'active'

        })
        await newAccount.save();

        return setters.accountSetter([newAccount]);
    },

    // ==> get all account list
    accountList: async () => {
        return setters.accountSetter(await AppAccount.find({}));
    },

    // ==> find account by token
    userAccount: async (token) => {
        return await AppAccount.findOne({ token: token });
    },
    // ==> find account by email
    myAccount: async (email) => {
        return await AppAccount.findOne({ email: email });
    },



}