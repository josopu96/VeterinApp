const Global = require('../models/global.model');

exports.getGlobalByUserId = function (req, res) {
  //console.log(req.body);
  Global.where({
    usuarioId: req.params.usuarioId
  }).findOne(function (err, resp) {
    if (resp) {
        res.send(resp);
      } else {
        res.sendStatus(404);
      }
  });
};
