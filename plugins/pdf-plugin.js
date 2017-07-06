module.exports = function (app) {
  // pdf make
  app.pdf = {
    text: function (str, style) {
      let data = {
        text: str
      };
      if (style) {
        data.style = style;
      }
      return data;
    },
    textCenter: function (str, style) {
      let data = this.text(str, style);
      data.alignment = 'center';
      return data;
    },
    textLeft: function (str, style) {
      let data = this.text(str, style);
      data.alignment = 'left';
      return data;
    },
    textRight: function (str, style) {
      let data = this.text(str, style);
      data.alignment = 'right';
      return data;
    }
  };
};
