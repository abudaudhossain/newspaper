const mongoose = require("mongoose");


const articleSchema =  mongoose.Schema({
    userToken: {
        type: String,
 
    },
    token:{
         type: String,
 
    },
    title: {
        type: String,
 
    },
    description: {
        type: String,
   
    },
    image: {
        type: String,
   
    },
    category: {
        type: String,
       
    },
    tags: {
        type: Array
    },
    status: {
        type: String
    }
},{
    timestamps: true,
});

module.exports = mongoose.model("appArticle", articleSchema);