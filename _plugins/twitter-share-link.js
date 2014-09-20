module.exports = function() {

  this.events.on('beforeRenderLayout', function(page) {
    if (page.layout == 'article') {
      page.twitterShareLink = 'http://twitter.com/intent/tweet?text='
        + encodeURIComponent(page.title)
        + '&url='
        + encodeURIComponent('http://cabhishek.com'
          + (page.originalPermalink || page.permalink.toString()))
        + '&via=cabhishek';
    }
  });

};
