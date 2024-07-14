const Endpoint = require('../../models/endpoint/Endpoint');

module.exports = (req, res) => {
  Endpoint.createEndpoint(req.body, (err, endpoint) => {
    if (err) return res.json({ success: false, error: err });

    return res.json({ success: true, endpoint });
  });
};