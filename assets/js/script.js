jQuery(function($)
{

    $.scrollTo(0);
    
    $('.link1').click(function() { $.scrollTo($('#destination1'), 500); });
    $('.link1').click(function() { $.scrollTo($('#destination1'), 500); });
    $('#link2').click(function() { $.scrollTo($('#destination2'), 500); });
    $('#link3').click(function() { $.scrollTo($('#destination3'), 500); });
    $('#link4').click(function() { $.scrollTo($('#destination4'), 500); });

    $('#scrollup').click(function() { $.scrollTo(0,500);});



}
);

