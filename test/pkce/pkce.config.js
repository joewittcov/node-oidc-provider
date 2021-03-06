'use strict';

const _ = require('lodash');
const config = _.clone(require('../default.config'));

config.features = { pkce: {} };

module.exports = {
  config,
  clients: [{
    application_type: 'native',
    client_id: 'clientPost',
    token_endpoint_auth_method: 'client_secret_post',
    client_secret: 'secret',
    grant_types: ['authorization_code', 'implicit', 'refresh_token'],
    response_types: ['code', 'id_token', 'code id_token'],
    redirect_uris: ['myapp://localhost/cb'],
  }, {
    application_type: 'native',
    client_id: 'client',
    client_secret: 'secret',
    grant_types: ['authorization_code', 'refresh_token'],
    redirect_uris: ['myapp://localhost/cb'],
  }],
};
