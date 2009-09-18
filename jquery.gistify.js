(function($) {
  $.fn.gistify = function() {
    return this.each(function() {
      var link = $(this);
      var href = this.href;

      var gist_id = /http:\/\/gist\.github\.com\/(\d+)/.exec(href);

      if (gist_id) {
        link.replaceWith('<div id="embedded-gist-'+gist_id[1]+'"></div>');
        $('div#embedded-gist-'+gist_id[1]).load(href+'.pibb');
      }
    });
  }
})(jQuery);