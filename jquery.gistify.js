(function($) {
  $.fn.gistify = function() {
    return this.each(function() {
      var link = $(this);
      var href = $(this).attr('href');

      var gist_id = /http:\/\/gist\.github\.com\/(\d+)/.exec(href);

      if (gist_id) {
        link.wrap('<div id="embedded-gist-'+gist_id[1]+'">');
        jQuery.getJSON(href+'.json?callback=?', function(data) {
          var stylesheet_needed = true;
          $('head link[rel=stylesheet]').each(function() {
            if (this.href == data.stylesheet) { stylesheet_needed = false; }
          })
          
          if (stylesheet_needed) {$('head').append('<link rel="stylesheet" href="' + data.stylesheet + '" />');}
          $('div#embedded-gist-'+gist_id[1]).replaceWith(data.div);
        });
      }
    });
  }
})(jQuery);