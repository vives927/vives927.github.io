(function($) {
  var tabs = function() {
    var $el = $('div.resultTabs'),
      $tab = $el.find('a.tab'),
      $tabContent = $el.find('div.tab-content');

    $tab.click(function(e) {
      e.preventDefault();
      if ($(this).is('[aria-selected=false]')) {
        var id = $(this).attr('href');
        // change selected state
        $tab.attr('aria-selected', false).attr('tabindex', '-1');
        $tabContent.attr('aria-hidden', true);

        $(this).attr('aria-selected', true).attr('tabindex', '0');
        $(id).attr('aria-hidden', false);
      }
    });
  }
  tabs();
}(jQuery));