var _           = require('lodash');
var pp          = require('preprocess');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable && this.cacheable()

  var query        = loaderUtils.parseQuery(this.query);
  var context      = _.merge({}, process.env, query);

  context.NODE_ENV = context.NODE_ENV || 'development';

  return pp.preprocess(source, context, 'js');
};
