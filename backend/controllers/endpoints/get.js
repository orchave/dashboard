const Endpoint = require('../../models/endpoint/Endpoint');

module.exports = (req, res) => {
  Endpoint.findEndpointsByFilters(req.query, (err, endpoints) => {
    if (err) return res.json({ success: false, error: err });

    return res.json({ success: true, endpoints });
  });
};