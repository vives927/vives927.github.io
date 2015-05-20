(function($) {
    'use strict';

    var formId = 'ebscohostCustomSearchBox';
    
    $('#' + formId).addClass('FakeForm-' + formId);
    var $fakeForm = $('.FakeForm-' + formId);
    var $text = $fakeForm.find('input[type="text"]');

    function submitForm() {
        var $realForm = $('.RealForm-' + formId);

        if ($text.val() !== '') {
            $realForm.html('');
            $realForm.append($fakeForm.html());
            $realForm.find('input[type="text"]').val($text.val());
            $realForm.submit();
        } else {
            window.alert('Please enter search term(s).');
        }
    };

    function copyForm() {
        var formHtml = '<form id="' + $fakeForm.attr('id') + '" action="' + $fakeForm.attr('action') + '" onsubmit="' + $fakeForm.attr('onsubmit') + '" method="' + $fakeForm.attr('post') + '" style="' + $fakeForm.attr('style') + ';display:none;" class="RealForm-' + formId + '"></form>';
        $('form').after(formHtml);
    }

    $text.click(function (e) {
        e.preventDefault();
        if (e.keyCode === 13) {
            submitForm();
        }
    });

    $fakeForm.find('input[type="submit"]').click(function (e) {
        e.preventDefault();
        submitForm();
    });

    copyForm();

}(jQuery));