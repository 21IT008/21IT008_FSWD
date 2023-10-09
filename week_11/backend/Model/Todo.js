const { Schema, model } = require('mongoose');

const Todoschema = new Schema({
  title: {type:String,required:true,trim:true},
  description: {type:String,required:true,trim:true},
  status:{type:Boolean,required:true,default:false},
},{
  timestamps:true
});
module.exports=model('Todo-List',Todoschema);
