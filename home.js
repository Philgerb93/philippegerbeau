// Smooth anchor scrolling
$(document).on('click', 'nav a', function(event){
    event.preventDefault();
    var navHeight = Math.floor($('nav').height());
    var speed = 500;

    $('html, body').animate({ 
        scrollTop: $( $.attr(this, 'href') ).offset().top - navHeight
    }, speed);
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
});

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
        var $second = $(this).children().eq(1);

        if ($first.hasClass('project-card') && $second != undefined) {
            $first.find('.project-info').css('margin-bottom', 0);
            $second.find('.project-info').css('margin-bottom', 0);

            if ($first.height() > $second.height()) {
                var diff = $first.height() - $second.height();
                $second.find('.project-info').css('margin-bottom', diff);
            } else if ($first.height() < $second.height()) {
                var diff = $second.height() - $first.height();
                $first.find('.project-info').css('margin-bottom', diff);
            }
        }
    });
}

// Parallax
$(window).on('load', function() {
    scrollFooter();
});

$(window).scroll(function() {
    var windowHeight = $(window).height();
    var heightDocument = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;
    
    $('header').css('background-position-y', 50 - (window.scrollY * 100 / heightDocument) + '%');

    scrollFooter();
});

function scrollFooter() {
    var headerHeight = $('header').height();
    var footerHeight = $('footer').height();

    if(window.scrollY >= headerHeight) {
        $('footer').css('bottom', 0);
    } else {
        $('footer').css('bottom', '-' + footerHeight + 'px');
    }
}