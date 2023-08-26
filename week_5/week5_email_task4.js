const nodemailer = require("nodemailer");
let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "bhattom404@gmail.com",
    pass: "dmmblmrgoinaqvrt",
  },
});

let mailDetails = {
  from: "bhattom404@gmail.com",
  to: "21it008@charusat.edu.in",
  subject: "Test mail",
  text: "Node.js testing mail for GeeksforGeeks",
};
function sendMail(){
mailTransporter.sendMail(mailDetails, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("Last Email sent successfully");
  }
});
}
module.exports = sendMail;