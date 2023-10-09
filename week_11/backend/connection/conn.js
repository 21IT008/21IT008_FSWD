const mongoose = require('mongoose');
try{
    mongoose.connect('mongodb+srv://21it008:wvPrTg3ykTB9glFK@cluster0.guwpnah.mongodb.net/Todo_Database?retryWrites=true&w=majority').then(()=>console.log("connected"));
}catch(e){
    console.log("error connecting to databse !");
}

