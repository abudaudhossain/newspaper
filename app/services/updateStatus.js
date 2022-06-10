const AppAccount = require("../models/user")// model

module.exports = async(query) => {
   return await AppAccount.updateMany(query, { $set: { status: 'inactive' } });
}