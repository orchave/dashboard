const mongoose = require('mongoose');
const validator = require('validator');

const ALLOWED_TYPE_VALUES = ['GET', 'POST'];
const MAX_DATABASE_TEXT_FIELD_LENGTH = 1e4;

const Schema = mongoose.Schema;

const EndpointSchema = new Schema({
  url: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: MAX_DATABASE_TEXT_FIELD_LENGTH
  },
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: MAX_DATABASE_TEXT_FIELD_LENGTH
  },
  piece_cid: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: MAX_DATABASE_TEXT_FIELD_LENGTH
  }
});

EndpointSchema.statics.createEndpoint = function (data, callback) {
  const Endpoint = this;

  if (!data || typeof data != 'object')
    return callback('bad_request');

  if (!data.url || typeof data.url != 'string' || !validator.isURL(data.url))
    return callback('bad_request');

  if (!data.type || !ALLOWED_TYPE_VALUES.includes(data.type))
    return callback('bad_request');

  if (!data.name || typeof data.name != 'string' || !data.name.length || data.name.length > MAX_DATABASE_TEXT_FIELD_LENGTH)
    return callback('bad_request');

  if (!data.piece_cid || typeof data.piece_cid != 'string' || !data.piece_cid.length || data.piece_cid.length > MAX_DATABASE_TEXT_FIELD_LENGTH)
    return callback('bad_request');

  const newEndpointSchema = {
    url: data.url,
    type: data.type,
    name: data.name,
    piece_cid: data.piece_cid
  };
  
  const newEndpoint = new Endpoint(newEndpointSchema);

  newEndpoint.save((err, endpoint) => {
    if (err) return callback('database_error');

    return callback(null, endpoint);
  });
};

EndpointSchema.statics.findEndpointsByFilters = function (data, callback) {
  const Endpoint = this;

  if (!data || typeof data != 'object')
    return callback('invalid_filters');

  const filters = {};

  if (data.search && typeof data.search == 'string')
    filters.name = { $regex: data.search, $options: 'i' };

  Endpoint
    .find(filters)
    .sort({ name: 1 })
    .then(endpoints => callback(null, endpoints))
    .catch(_ => callback('database_error'));
};

module.exports = mongoose.model('Endpoint', EndpointSchema);
