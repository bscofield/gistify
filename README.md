Gistify
=======

Summary
-------
Gistify is a jQuery plugin that improves the embedded-gist experience. 

Description
-----------
As we all know, relying on external services for content can be tricky – the service might be down, or might be slow to respond. Gistify helps with the particular case of using [gist.github.com](http://gist.github.com). With Gistify, you link to your gists instead of embedding `<script>` tags, and with a quick call to `gistify` you can replace them as part of the `$(document).ready()` function.

Example
-------
    $(document).ready(function() {
      $('a.gist').gistify();
    });

    <a class="gist" href="http://gist.github.com/181842">Check out my awesome code</a>
