module.exports = function () {
  // String methods
  /* eslint-disable */
  String.prototype.fmt = function (args) {
    let formatted = this.valueOf();
    for (let index in args) {
      formatted = formatted.replace(`{${index}}`, args[index]);
    }
    return formatted;
  };
};
