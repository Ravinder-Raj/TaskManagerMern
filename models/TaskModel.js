const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task:{
        type:String,
        require:true
    },
})

console.log("Getting Task from mongoosse 3")

module.exports = mongoose.model("Notes",taskSchema);