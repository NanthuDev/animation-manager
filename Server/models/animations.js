const { default: mongoose, Schema } = require("mongoose");

const AnimationsSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tags:{
        type:String,
        required:true
    }, 
    fileName:{
        type:String,
        required:true
    }, 
    date:{
        type:Date,
        required:true
    },
})


module.exports = mongoose.model("Animations",AnimationsSchema)