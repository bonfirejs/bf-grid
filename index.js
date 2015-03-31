/* jshint node: true */
'use strict';

module.exports = {
  name: 'bf-grid',
  included: function(app, parentAddon) {
    this._super.included(app, parentAddon);
    app.import('vendor/bf-grid.css');
  }
};
