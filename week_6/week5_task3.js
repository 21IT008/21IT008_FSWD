const express = require('express');
const Joi =require('joi');
const multer=require('multer');
const path = require('path');
const app=express();
app.use(express.json());
app.listen(8000);

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './public/images');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });
  const upload = multer({ storage: storage });

const userSchema = Joi.object({
    Firstname: Joi.string().required(),
    Lastname: Joi.string().required(),
    Email: Joi.string().email().required(),
    Age: Joi.number().integer().min(18).max(120).required(),
});
app.use(express.static('public'));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'public/form.html'))
})
app.post('/signup', function(req, res){
    const data=req.body;
    console.log(data);
    const { error, value } = userSchema.validate(data);

    if (error) {
        return res.status(400).json({
            error: 'Validation Error',
            message: error.details[0].message,
        });
    }
    else {
        console.log(value );
        res.json(value);
    }
})
app.post('/photos',upload.single('file'),function(req,res){
    res.json({
        status: 'OK',
        filename: req.file.filename // Output the filename
      });
})