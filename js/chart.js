
(function ($) {
    'use strict';

    // Highchart Table plugin
    // https://github.com/highchartTable/jquery-highchartTable-plugin
    $('table.highchart').data({
        'graph-type': 'column',
        'graph-inverted': 1,
        'graph-container': '.highchart-container-1',
        'graph-margin-left': 40,
        'graph-height': 900
    });
    $('table.highchart').highchartTable();



}(jQuery));