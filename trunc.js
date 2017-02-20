(function($) {

  $.fn.trunc = function(options) {

    var basic = 300;
    var settings = (options === undefined) ? basic : options;
    var defaultText = [];

    return this.each(function() {
      var fullText = $(this).text();
      var lenghtChars = fullText.length;

      if (settings < lenghtChars) {
        var shortText = fullText.slice(0, settings);
        $(this).addClass('truncEdit');
        $(this).html('<div class="fullText">' + fullText + '</div>');
        $('.fullText').css('display', 'none');
        $(this).append('<div class="shortText">' + shortText + '<a href="#" class="fullShow">&hellip;</a></div>');
      }

      $('.fullShow').click(function(ev, index) {
        ev.preventDefault();
        ev.stopPropagation();
        console.log("click");
        var parentTrunc = $(this).closest('.truncEdit');
        $(parentTrunc).find('.fullText').css('display', 'block');
        $(parentTrunc).find('.shortText').css('display', 'none');
      })
    });

  };
})(jQuery);
