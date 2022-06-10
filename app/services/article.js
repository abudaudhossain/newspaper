const setters = require("../helpers/setters");
const utility = require("../helpers/utility");

const AppArticle = require("../models/article")// model

module.exports = {
    // ==> create new account
    createNewArticle: async (data) => {
        const { title, description, category, tags, image, appSetUserToken } = data;
        const token = utility.getToken("ART");


        const newArticle = new AppArticle({
            token,
            title,
            description,
            category,
            tags,
            image,
            status: 'active',

            userToken: appSetUserToken

        })
        await newArticle.save();

        return newArticle;
    },

    // ==> get all account list
    getArticleList: async () => {
        return await AppArticle.find({});
    },

    // ==> find account by token
    getArticle: async (token) => {
        return await AppArticle.findOne({ token: token });
    },


}