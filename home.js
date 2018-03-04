$(window).on('load', function() {
    progressBarAnimation();
    setProjectLength();
    scrollFooter();

    setClickListeners();

    $(window).resize(setProjectLength);

    $(window).scroll(function() {
        progressBarAnimation();
        scrollFooter();
    });
});

function setClickListeners() {
    // Smooth anchor scrolling
    $(document).on('click', 'nav a', function(event){
        event.preventDefault();
        var navHeight = Math.floor($('nav').height());
        var speed = 500;
        var mobileModif = 0;

        if ($(this).parent().attr('id') == 'mobile-nav') {
            mobileModif = 80;
        }

        $('html, body').animate({ 
            scrollTop: $( $.attr(this, 'href') ).offset().top - navHeight + mobileModif
        }, speed);
    });

    // Mobile navigation
    $('#navicon').on('click', function() {
        var $nav = $('#mobile-nav');

        if ($(this).text() == '☰') {
            $(this).html('&times;');
            $(this).css('font-size', '46px');
            
        } else {
            $(this).html('&#9776;');
            $(this).css('font-size', '30px');
        }
        $nav.toggleClass('open');
    });

    $('.mobile-nav-btn').on('click', function() {
        if ($('#mobile-nav').css('max-height') == '80px') {
            $('#navicon').trigger('click');
        }
    });

    // Modal
    // Images
    $('div#main img:not(.thumbnail)').on('click', function() {
        if ($(this).parent().children().length > 1) {
            $('#modal-prev').css('display', 'block');
            $('#modal-next').css('display', 'block');
        }

        $('#modal').css('display', 'block');
        $('#modal-img').css('display', 'block');

        $('#modal-img').attr('src', $(this).attr('src'));
    });

    // Videos
    $('div#main img.thumbnail').on('click', function() {
        $('#modal').css('display', 'block');
        $('#modal-vid').css('display', 'block');

        $("#modal-vid").get(0).pause();
        $('#modal-vid source').attr('src', $(this).attr('id'));
        $('#modal-vid').get(0).load();
        $('#modal-vid').get(0).play();
    });

    $('#modal-close').on('click', function() {
        $('#modal').css('display', 'none');
        $('#modal-img').css('display', 'none');
        $('#modal-vid').css('display', 'none');
        $('#modal-vid').get(0).pause();
        $('#modal-prev').css('display', 'none');
        $('#modal-next').css('display', 'none');
    });

    $('#modal-next').on('click', function() {
        var src = $('#modal-img').attr('src');
        var $currentImg = $("div.img-holder>img[src='" + src + "']");
        var $otherImgs = $currentImg.parent().children('img');
        var index = $currentImg.index();
        var newSrc;

        if (index + 1 > $otherImgs.length - 1) {
            newSrc = $otherImgs.first().attr('src');
        } else {
            newSrc = $otherImgs.eq(index + 1).attr('src');
        }
        $('#modal-img').attr('src', newSrc);
    });

    $('#modal-prev').click(function() {
        var src = $('#modal-img').attr('src');
        var $currentImg = $("div.img-holder>img[src='" + src + "']");
        var $otherImgs = $currentImg.parent().children('img');
        var index = $currentImg.index();
        var newSrc;

        if (index - 1 < 0) {
            newSrc = $otherImgs.last().attr('src');
        } else {
            newSrc = $otherImgs.eq(index - 1).attr('src');
        }
        $('#modal-img').attr('src', newSrc);
    });
}

// Decides when to trigger the progress bar animations
function progressBarAnimation() {
    $('.progress-bar').each(function() {
        var $this = $(this);

        if (!$this.hasClass('filled') && elemInViewport($this)) {
            $this.addClass('filled');
        }
    });
}

// Checks if an element is in view of the user
function elemInViewport(elem) {
    var $elem = $(elem);
    var navBarHeight = $('nav').height();

    var topOfElement = $elem.offset().top;
    var bottomOfElement = $elem.offset().top + $elem.outerHeight();
    var bottomOfScreen = $(window).scrollTop() + window.innerHeight;
    var topOfScreen = $(window).scrollTop() + navBarHeight;

    return (bottomOfScreen > topOfElement) && (topOfScreen < bottomOfElement);
}

// Changes the footer's visibility depending on scroll position
function scrollFooter() {
    var headerHeight = $('header').height();
    var footerHeight = $('footer').height();

    if(window.scrollY >= headerHeight) {
        $('footer').css('display', 'block');
        $('#header-bg').css('display', 'none');
    } else {
        $('footer').css('display', 'none');
        $('#header-bg').css('display', 'block');
    }
}

// Adjust length of side by side projects
function setProjectLength() {
    $('.project-wrapper').each(function() {
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
