// run
(function ($) {
    'use strict';

    // Sort recipes by category
    var $recipeList = $('#RecipeList');
    $('#sortBy').change(function() {
        var value = $(this).find('option:selected').attr('value');
        if (value !== 'All') {
            $recipeList.find('li').not('[data-category="' + value + '"]').addClass('Hidden');
            $recipeList.find('li').filter('[data-category="' + value + '"]').removeClass('Hidden');
        } else {
            $recipeList.find('li').removeClass('Hidden');
        }
    });

}(jQuery));  