require('./plugins/string-plugin')();
require('./plugins/numeric-plugin')();
require('./plugins/date-plugin')();
module.exports = function (app) {
  require('./plugins/crypto-plugin')(app);
  require('./plugins/pdf-plugin')(app);
  require('./plugins/json-plugin')(app);
  require('./plugins/async-plugin')(app);
  app.atob = require('atob');
  app.btoa = require('btoa');
  app.http = require('unirest');
  function setHeaders (httpPromise, req) {
    return httpPromise.header('authorization', req.headers.authorization).header('x-company-id', req.companyId).header('x-user-id', req.userId).header('x-lang', req.lang);
  }
  app.http.getx = function (url, req) {
    return setHeaders(this.get(url), req);
  };
  app.http.postx = function (url, req) {
    return setHeaders(this.post(url), req);
  };
  app.http.putx = function (url, req) {
    return setHeaders(this.put(url), req);
  };
  app.http.deletex = function (url, req) {
    return setHeaders(this.delete(url), req);
  };
};
