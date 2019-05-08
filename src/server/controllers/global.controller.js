const Global = require('../models/global.model');

exports.getGlobalLogin = function (req, res) {
  Global.where({
    type: 'login'
  }).findOne(function (err, resp) {
    if (resp) {
      res.send(resp);
    } else {
      res.sendStatus(404);
    }
  });
};

exports.updateGlobalLogin = function (req, res) {
  Global.findOneAndUpdate({ type: 'login' }, {
    $set: req.body
  }, function (err, _) {
    if (err) res.send(err);
    res.send();
  });
};
