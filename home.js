$(document).ready(function() {
    headerBackground();
    progressBarAnim();
    projectMediaHeight();
    projectAnim();
    scrollHeaderFooter();
    
    setListeners();
    
    $(window).resize(function() {
        headerBackground();
        projectMediaHeight();
        
    });
    
    $(window).on('scroll', function() {
        progressBarAnim();
        projectAnim();
        scrollHeaderFooter();
    });
});

function headerBackground() {
    if ($(window).width() <= 580) {
        $('.header-bg').text('P');
    } else {
        $('.header-bg').text('PG');
    }
}

function progressBarAnim() {
    $('.language-progress-bar').each(function() {
        var $this = $(this);

        if (!$this.hasClass('filled') && elemInViewport($this)) {
            $this.addClass('filled');
            $this.css('width', $(this).data('progression'));
        }
    });
}

function projectMediaHeight() {
    var $infos = $('.project-info');
    var $media = $('.project-media');
    
    if ($(window).width() >= 1180) {
        for (i = 0; i < $infos.length; i++) {
            $media.eq(i).css('min-height', $infos.eq(i).css('height'));
        }
    } else {
        for (i = 0; i < $media.length; i++) {
            $media.eq(i).css('min-height', '0px');
        }
    }
}

function projectAnim() {
    if ($(window).width() >= 1180) {
        $('.project-media').each(function() {
            var $this = $(this);

            if (!$this.hasClass('slidedLeft') && elemInViewport($this)) {
                $this.addClass('slidedLeft');
            }
        });
        $('.project-info').each(function() {
            var $this = $(this);

            if (!$this.hasClass('slidedRight') && elemInViewport($this)) {
                $this.addClass('slidedRight');
            }
        });
    }
}

function scrollHeaderFooter() {
    var headerHeight = $('.header').height();
    var footerHeight = $('.footer').height();

    if($(window).scrollTop() >= headerHeight) {
        $('.footer').css('display', 'block');
        $('.header').css('display', 'none');
    } else {
        $('footer').css('display', 'none');
        $('.header').css('display', 'block');

        var opacity = 1 - ($(window).scrollTop() / headerHeight);
        $('.header-bg, .header-text').css('opacity', opacity);
    }
}

// Checks if an element is in view of the user
function elemInViewport(elem) {
    var $elem = $(elem);
    var navBarHeight = $('.nav').height();

    var topOfElement = $elem.offset().top;
    var bottomOfElement = $elem.offset().top + $elem.outerHeight();
    var bottomOfScreen = $(window).scrollTop() + window.innerHeight;
    var topOfScreen = $(window).scrollTop() + navBarHeight;

    return (bottomOfScreen > bottomOfElement - $elem.height() / 2) && (topOfScreen < topOfElement)
        || (bottomOfScreen > bottomOfElement && (topOfScreen < topOfElement + $elem.height() / 2));
}

function setListeners() {
    // Smooth anchor scrolling
    $(document).on('click', '.nav a, a.header-arrow', function(event){
        event.preventDefault();
        var navHeight = Math.floor($('.nav-wrapper').height());
        var speed = 500;

        $('html, body').animate({ 
            scrollTop: $( $.attr(this, 'href') ).offset().top - navHeight
        }, speed);
    });

    // Mobile navigation
    $('.nav-navicon').on('click', function() {
        var $nav = $('.nav-mobile-items');

        if ($(this).text() == '☰') {
            $(this).html('&times;');
            $(this).css('font-size', '3.4rem');
            
        } else {
            $(this).html('&#9776;');
            $(this).css('font-size', '2rem');
        }
        $nav.toggleClass('open');
    });

    $('.mobile').on('click', function() {
        var navHeight = Math.floor($('.nav').height());

        if ($('.nav-mobile-items').css('max-height') != '0px') {
            console.log($('.nav-mobile-items').css('max-height'));
            $('.nav-navicon').trigger('click');
        }
    });

    // Progress bar hover anim
    $('.language-box').on({
        mouseover: function() {
            $(this).find('.language-progress-bar').addClass('lighter');
        },
        mouseleave: function() {
            $(this).find('.language-progress-bar').removeClass('lighter');
        }
    });

    setModalListeners();
}

function setModalListeners() {
    // Images
    $('.project-imgs img').on('click', function() {
        if ($(this).parent().children('img').length > 1) {
            $('.modal-prev').css('display', 'block');
            $('.modal-next').css('display', 'block');
        }

        $('.modal').css('display', 'block');
        $('.modal-img').css('display', 'block');

        $('.modal-img').attr('src', $(this).attr('src'));
    });

    // Videos
    $('.project-thumbnail img:not(.play_btn)').on('click', function() {
        $('.modal').css('display', 'block');
        $('.modal-vid').css('display', 'block');

        $(".modal-vid").get(0).pause();
        $('.modal-vid source').attr('src', $(this).attr('id'));
        $('.modal-vid').get(0).load();
        $('.modal-vid').get(0).play();
    });

    // Close button
    $('.modal-close').on('click', function() {
        $('.modal').css('display', 'none');
        $('.modal-img').css('display', 'none');
        $('.modal-vid').css('display', 'none');
        $('.modal-vid').get(0).pause();
        $('.modal-prev').css('display', 'none');
        $('.modal-next').css('display', 'none');
    });

    // Next button
    $('.modal-next').on('click', function() {
        var src = $('.modal-img').attr('src');
        var $currentImg = $(".project-imgs>img[src='" + src + "']");
        var $otherImgs = $currentImg.parent().children('img');
        var index = $currentImg.index();
        var newSrc;

        if (index + 1 > $otherImgs.length - 1) {
            newSrc = $otherImgs.first().attr('src');
        } else {
            newSrc = $otherImgs.eq(index + 1).attr('src');
        }
        $('.modal-img').attr('src', newSrc);
    });

    // Previous button
    $('.modal-prev').click(function() {
        var src = $('.modal-img').attr('src');
        var $currentImg = $(".project-imgs>img[src='" + src + "']");
        var $otherImgs = $currentImg.parent().children('img');
        var index = $currentImg.index();
        var newSrc;

        if (index - 1 < 0) {
            newSrc = $otherImgs.last().attr('src');
        } else {
            newSrc = $otherImgs.eq(index - 1).attr('src');
        }
        $('.modal-img').attr('src', newSrc);
    });
}
