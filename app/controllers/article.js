const handler = require("../exceptions/handler");
const { nativeResponse } = require("../helpers/utility");
const article = require("../services/article");
const addNewArticleRequestValidation = require("../validations/request/addNewArticleRequestValidation");
const validationHelper = require("../validations/validationsHelpers/validationHelper");


module.exports = {
    
    addNewArticle: async (req, res) => {
        try {
            addNewArticleRequestValidation(req, res);

             // check editor Active or not
             await validationHelper.isEditorActive(req.body.appSetUserToken)
             
             const addArticle = await article.createNewArticle(req.body);

             nativeResponse(addArticle, "😎😉add a new article😍", res)
        
        } catch (error) {
            console.log(error);
            handler(error, res);
        }
    },
    getAllArticle: async (req, res) =>{
        try {
             
             const articles = await article.getArticleList();

             nativeResponse(articles, "😎😉find all articles😍", res)
        
        } catch (error) {
            console.log(error);
            handler(error, res);
        }
    }
}