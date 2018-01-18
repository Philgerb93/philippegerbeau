// Smooth anchor scrolling
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

// Progress bar animations
checkAnimation();

$(window).scroll(function() {
    checkAnimation();
})

function checkAnimation() {
    $('.progress-bar').each(function() {
        var $this = $(this);

        if (!$this.hasClass('filled') && elemInViewport($this)) {
            $this.addClass('filled');
        }
    });
}

function elemInViewport(elem) {
    var $elem = $(elem);

    var top_of_element = $elem.offset().top;
    var bottom_of_element = $elem.offset().top + $elem.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();

    return (bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element);
}

// Equal project length
setProjectLength();

$(window).resize(setProjectLength);

function setProjectLength() {
    $('.content-wrapper').each(function() {
        var $first = $(this).children().eq(0);

        if ($first.hasClass('project-card')) {
            var $second = $(this).children().eq(1);

            if ($first.height() > $second.height()) {
                var diff = $first.height() - $second.height();
                $second.height($first.height());
                $second.find('.project-info').css('margin-bottom', diff);
            } else {
                var diff = $second.height() - $first.height();
                $first.height($second.height());
                $first.find('.project-info').css('margin-bottom', diff);
            }
        }
    });
}
