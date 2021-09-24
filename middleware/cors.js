//Authorization middleware
module.exports = function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'https://iskewedi.github.io/*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  );

  next();
};
