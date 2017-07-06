module.exports = function (app) {
  app.crypto = require('crypto');
  app.crypto.factorIteration = 100;
  app.crypto.calcHmac = function (hmacKey, hmacData) {
    let hmac = this.createHmac('sha512', hmacKey);
    hmac.update(hmacData);
    return hmac.digest('base64');
  };
  app.crypto.derivedEncodedKey = function (hmacKey, hmacData) {
    let result = this.calcHmac(hmacKey, hmacData);
    for (let i = 1; i < (hmacKey.length * this.factorIteration - 1); i++) {
      result = this.calcHmac(hmacKey, result);
    }
    return result;
  };
  app.crypto.encrypt = function (key, data) {
    let cipher = this.createCipher('aes192', key);
    let result = cipher.update(data, 'utf8', 'base64');
    result += cipher.final('base64');
    return result;
  };
  app.crypto.decrypt = function (key, data) {
    let decipher = this.createDecipher('aes192', key);
    let result = decipher.update(data, 'base64', 'utf8');
    result += decipher.final('utf8');
    return result;
  };
};
