const AppAccount = require("../models/user");// model
const updateStatus = require("./updateStatus");

module.exports = async (query) => {

    const { status } = query;
    if (status === 'active') {
        const editor = await AppAccount.findOneAndUpdate({ token: query.token }, { $set: { status: 'inactive' } });
        editor.status = "inactive";
        return {
            data: { editor },
            msg: "Item inactive successfully, please active or add anther editor"
        }
    } else {
        await updateStatus({ rule: 'editor' }); // all editor inactive
        const editor = await AppAccount.findOneAndUpdate({ token: query.token }, { $set: { status: 'active' } })
        editor.status = "active";
        return {
            data: { editor },
            msg: "editor active successfully"
        }
    }





}