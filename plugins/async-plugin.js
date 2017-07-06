module.exports = function (app) {
  // Async methods
  let async = {
    doAsync: function (fn, params) {
      return new Promise((resolve, reject) => {
        params.push(resolve);
        params.push(reject);
        fn.apply(this, params);
      });
    },
    doExecute: function (fn, params) {
      return fn.apply(this, params);
    }
  };
  if (app) {
    app.async = async;
  }
  return async;
};
