let passport = require('passport');
let mongoose = require('mongoose');
let User = mongoose.model('User');
const gravatar = require('gravatar-api');

let sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function(req, res) {
  console.log('in register..');
  let user = new User();

  user.name = req.body.name;
  user.email = req.body.email;
  const options = {
      email: user.email
  }
  const avatar = gravatar.imageUrl(options);
  user.img = avatar;

  console.log(user);
  user.setPassword(req.body.password);

  user.save(function(err) {
    let token;
    token = user.generateJwt();
    res.status(200);
    
    
    res.json({
      "token" : token
    });
  });

};

module.exports.login = function(req, res) {

  passport.authenticate('local', function(err, user, info){
    let token;

    if (err) {
      res.status(404).json(err);
      return;
    }

    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      res.status(401).json(info);
    }
  })(req, res);

};