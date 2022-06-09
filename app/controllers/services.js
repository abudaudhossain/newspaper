const handler = require("../exceptions/handler");
const { nativeResponse } = require("../helpers/utility");


module.exports = {
    addNewPost: async (req, res) => {
        try {
            
            // nativeResponse(result.data, result.msg, res)

        } catch (error) {
            console.log(error);
            handler(error, res);
        }
    }
}