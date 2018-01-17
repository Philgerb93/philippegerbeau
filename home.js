1// Smooth anchor scrolling
$(document).on('click', 'header a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 100
    }, 500);
});

// Modal
$('div#main img:not(.thumbnail)').click(function() {
    $('#modal').css('display', 'block');
    $('#modal-img').css('display', 'block');

    $('#modal-img').attr('src', $(this).attr('src'));
});

$('div#main img.thumbnail').click(function() {
    $('#modal').css('display', 'block');
    $('#modal-vid').css('display', 'block');

    $("#modal-vid").get(0).pause();
    $('#modal-vid source').attr('src', $(this).attr('id'));
    $('#modal-vid').get(0).load();
    $('#modal-vid').get(0).play();
});

$('#modal-close').click(function() {
    $('#modal').css('display', 'none');
    $('#modal-img').css('display', 'none');
    $('#modal-vid').css('display', 'none');
    $('#modal-vid').get(0).pause();
});
