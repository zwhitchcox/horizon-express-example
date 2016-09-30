const express = require('express');
const horizon = require('@horizon/server');

const app = express();
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
const options = {
  project_name: 'example',
  auth: {
    allow_anonymous: true,
    allow_unauthenticated: true,
    token_secret: 'example',
    success_redirect: '/'
  },
  permissions: false,
  auto_create_collection: true,
  auto_create_index: true,
}
horizon(app.listen(8181), options);

console.log('Listening on port 8181.');
