const mongoose = require('mongoose');
const xeHoiSchema = new mongoose.Schema({
    ten:{
        type:String,
        require:true
    },
    nam:{
        type:String
    },
    giaBan:{
        type:String,
        default:0
    }
});
const xeHoiModel = new mongoose.model('xehoi',xeHoiSchema);
module.exports = xeHoiModel;
