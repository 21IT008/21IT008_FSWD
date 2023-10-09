const { Schema, model } = require('mongoose');

const Projectschema = new Schema({
  pname: {type:String,required:true,trim:true},
  pdetail: {type:String,required:true,trim:true},
  pgit:{type:String,required:true},
},{
  timestamps:true
});
module.exports=model('Project',Projectschema);