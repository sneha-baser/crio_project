
const { builtinModules } = require("module");
const mongoose = require("mongoose");
const memeSchema = new mongoose.Schema({
    name : String,
    url:String,
    caption : String

});
const Memetable = new mongoose.model('Memetable',memeSchema);
module.exports = Memetable;