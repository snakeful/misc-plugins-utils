module.exports = function (app) {
  app.json = {
    parse: function (json, jsDefault) {
      try {
        if (json) {
          return JSON.parse(json);
        }
        return jsDefault;
      } catch (err) {
        console.log(`Error: ${err.message}`);
        return jsDefault;
      }
    }
  };
};
