const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.post("/signup", async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password} = req.body;
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res.status(400).json({
        errorMessage: "Email already exists, please try a different one!",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      password: passwordHash,
    });
    await newUser.save();
    console.log("Error creating a user", newUser);

    //NODEMAILER

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
          user: 'dahlia.crist4@ethereal.email', // ethereal user
          pass: 'pZj9gmH89CenBCzwS6', // ethereal password
      },
  });
  
  const msg = {
      from: '"BOOMFIT" welcome@boomfit.com>', // sender address
      to: email, // list of receivers
      subject: "Bem-vindo à BOOMFIT", // Subject line
      text: "Olá, obrigado por se registar na BOOMFIT!", // plain text body
  }
 // send mail with defined transport object
  const info = await transporter.sendMail(msg);

  console.log("Message sent: %s", info.messageId);
 

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
 
    return res.json({ message: "Successfully signed up user" });

  } catch (err) {
    console.error(err);
    return res.status(400).json({ errorMessage: "Something went wrong!" });
  }
});


module.exports = router;
