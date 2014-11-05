// run
(function ($) {
    'use strict';

    var $recipeList = $('#RecipeList');
    
    var sortList = function(value, attr) {
        if (value !== 'All') {
            $recipeList.find('li').not('[data-' + attr + '="' + value + '"]').addClass('Hidden');
            $recipeList.find('li').filter('[data-' + attr + '="' + value + '"]').removeClass('Hidden');
        } else {
            $recipeList.find('li').removeClass('Hidden');
        }
    }

    // Sort recipes by category
    $('#sortByCategory').change(function() {
        var value = $(this).find('option:selected').attr('value');
        sortList(value, 'category');
    });

    // Sort recipes by source
    $('#sortBySource').change(function() {
        var value = $(this).find('option:selected').attr('value');
        sortList(value, 'source');
    });

}(jQuery));  