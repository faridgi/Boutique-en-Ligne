const Product = require('../models/Product');
const User = require('../models/User');


  exports.allAccess = (req, res) => {
   res.status(200).send("");
    
  };

  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };