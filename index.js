var smartquotes = require('smartquotes'),
    parse5 = require('parse5'),
    interceptor = require('express-interceptor');

module.exports = interceptor(function(req, res){
  return {
    // intercept text or html
    isInterceptable: function(){
      var contentType = res.get('Content-Type');
      return !contentType || /text\/(html|plain)/.test(contentType);
    },
    intercept: function(body, send) {
      var contentType = res.get('Content-Type');
      if (!contentType || contentType.indexOf('text/plain') != -1) {
        // for plain text, let's send it as plain text
        send(smartquotes(body));
      } else {
        // otherwise, parse the html and return a new version
        var document = parse5.parse(body);
        smartquotes(document);
        send(parse5.serialize(document));
      }
    }
  };
});
