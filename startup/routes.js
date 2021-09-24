const express = require('express');
const projectsRoute = require('../routes/projectsRoute');
const error = require('../middleware/error');
const cors = require('../middleware/cors');
const { apiVersion, endpoints } = require('../config.json');

const getApiEndpoint = endpoint => `/api/${apiVersion}/${endpoint}`;

module.exports = function (app) {
  app.use(express.json());

  app.use(cors);

  app.use(getApiEndpoint(endpoints.Projects), projectsRoute);

  //Error Middleware, always LAST middleware used
  app.use(error);
};
