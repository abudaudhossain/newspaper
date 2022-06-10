const AppAccount = require("../models/user")// model

module.exports = async (query) => {
    await AppAccount.findOneAndRemove(query);


    return {
        data: {},
        msg: "Item delete successfully"
    }
    
}