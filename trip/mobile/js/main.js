/*公共js*/
$(document).ready(function() {
    /*导航*/
    var isMenuOpen = false;
    //打开菜单切换图标
    $('.menu-btn').on('click', function(event) {
        $('.menu-wrapper ul li').show('fast');
        $('ul.submenu').hide('fast');
        $('.menu-wrapper .menu li.has-submenu>a').removeClass('back');
        submenuIsShow = true;
        //设置菜单高度
        var screenHeight = $(window).height();
        var menuHeight = screenHeight - $('.header').height();
        if (isMenuOpen) {
            $(this).removeClass('close');
            isMenuOpen = false;
            $('.menu-wrapper').hide('fast');

        } else {
            $('.menu-wrapper ul.submenu').hide('fast');
            $(this).addClass('close');
            isMenuOpen = true;
            $('.menu-wrapper').css('height', menuHeight).show('fast');
        }

    })
    //开启子菜单
    var submenuIsShow = true;
    $('.menu-wrapper .menu li.has-submenu>a').on('click', function(event) {
        event.preventDefault();
        if (submenuIsShow) {
            $(this).parent().siblings('li').hide('fast');
            $(this).next('ul.submenu').show('fast');
            $(this).addClass('back');
            submenuIsShow = false;
        } else {
            $(this).parent().siblings('li').show('fast');
            $(this).next('ul.submenu').hide('fast');
            $(this).removeClass('back');
            submenuIsShow = true;
        }

    })
    //对 不包含子菜单的链接 定义事件 ，点击时关闭菜单
    $(".menu-wrapper li:not('.has-submenu') a").on('click', function(event) {
        isMenuOpen = false;
        $('.menu-wrapper').hide('fast');
        $('.menu-btn').removeClass('close');
    })
    //防止事件冒泡
    $('.menu-wrapper').on('click', function(event) {
        event.stopPropagation();
    })

    //注册和微信
    $('a.register').on('click', function() {

    })
    $('a.wechat-icon').on('click', function() {
        alert('weixin')
    })


    /*底部轮播*/
    var bottomBanner = new Swiper('.bottom-swiper', {
        slidesPerView: 3,
        prevButton: '.bottom-banner .swiper-button-prev',
        nextButton: '.bottom-banner .swiper-button-next',
    });

    /*设置所有锚点滚动效果*/
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 500);
                return false;
            }
        }
    });

});




/*首页*/
$(document).ready(function() {
    /*首页轮播*/
    var banner = new Swiper('.banner', {
        autoplay: 5000, //可选选项，自动滑动
        loop: true,
        pagination: '.banner .swiper-pagination',
        paginationClickable: true,
    })

    /*滚动一屏后，导航置顶*/
    $(window).scroll(function() {
        var screenHeight = $(window).height();
        if ($(window).scrollTop() > screenHeight) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });

    /*滚动到主要内容*/
    $('#to-main-page').on('click', function() {
        $('html,body').animate({ scrollTop: $('#main-page').offset().top },
            300
        );

    })
    /*会员感言*/
    var memberCommentsBanner = new Swiper('.j-member1', {
        autoplay: 5000, //可选选项，自动滑动
        loop: true,
        pagination: '.j-member1 .swiper-pagination',
        paginationClickable: true,
        onSlideChangeEnd: function(swiper) {
            var currenIndex = swiper.realIndex + 1;
            var total = swiper.bullets.length;

            if (currenIndex < 10) {
                currenIndex = "0" + currenIndex;
            }
            if (total < 10) {
                total = "0" + total;
            }
            var value = currenIndex + "/" + total;
            $('.j-member1').find('.curren-silde-num').text(value);
        },
    })
    /*旅游权益7大主题列表切换*/
    var themeSwiper = new Swiper('.j-theme-swiper1', {
        slidesPerView: 5,
        prevButton: '.j-theme-list-box1 .swiper-button-prev',
        nextButton: '.j-theme-list-box1 .swiper-button-next',

    });
    $('.j-theme-swiper1 .swiper-slide').on('click', function() {
        var index = $(this).index();
        $(this).addClass('theme-active').siblings('.swiper-slide').removeClass('theme-active');
        themeTabs.slideTo(index, 1000, false);
    })
    var themeTabs = new Swiper('.theme-banner', {
        onSlideChangeEnd: function(swiper) {
            var j = themeTabs.activeIndex;
            themeSwiper.slideTo(j, 1000, false);
            $('.j-theme-swiper1 .swiper-slide').removeClass('theme-active').eq(j).addClass('theme-active');

        }
    });

});
/*全年产品日历*/
$(document).ready(function() {

    /*滚动后，导航置顶*/
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });
    /*产品日历tab切换*/
    var monthSwiper = new Swiper('.month-swiper', {
        slidesPerView: 5,
        prevButton: '.month-list-box .swiper-button-prev',
        nextButton: '.month-list-box .swiper-button-next',

    });
    $('.month-swiper .swiper-slide').on('click', function() {
        var index = $(this).index();
        $(this).addClass('month-active').siblings('.swiper-slide').removeClass('month-active');
        $('.month-content>ul>li').hide('fast').eq(index).show('fast');
        $('html,body').animate({ scrollTop: 0 },
            300
        );
    })
    //月份导航固定顶端网站导航下
    if ($('.j-month-list').offset()) {
        var monthSwiperTop = $('.j-month-list').offset().top;
    }
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var navHeight = $('.header').height();
        if (scrollTop > (monthSwiperTop - navHeight)) {

            $('.j-month-list').addClass('fixed').addClass('headerSpacingTop');
            $('.j-month-list .swiper-button-prev').addClass('contentSpacingTop');
            $('.j-month-list .swiper-button-next').addClass('contentSpacingTop');

        } else {
            $('.j-month-list').removeClass('fixed').removeClass('headerSpacingTop');
            $('.j-month-list .swiper-button-prev').removeClass('contentSpacingTop');
            $('.j-month-list .swiper-button-next').removeClass('contentSpacingTop');
        }
    });

});


/*7大主题*/
$(document).ready(function() {
   var htmlFontSize = $('html').css('font-size').replace(/px/, "") * 1;


    /*滚动一屏后，导航置顶*/
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('fixed').addClass('spacingTop');
        } else {
            $('.header').removeClass('fixed');
        }
    });
    /*7大主题锚点跳转*/
    var themeSwiper = new Swiper('.j-theme-swiper2', {
        slidesPerView: 5,
        prevButton: '.j-theme-list-box2 .swiper-button-prev',
        nextButton: '.j-theme-list-box2 .swiper-button-next',
    });
    $('.j-theme-swiper2 .swiper-slide').on('click', function() {
        var index = $(this).index();
        $(this).addClass('theme-active').siblings('.swiper-slide').removeClass('theme-active');
        var ele = $('.theme-content>ul>li').eq(index);
        // 2.37rem是两个固定导航在顶部占据的总高度 2.37+1.89=4.26
        if ($('.header').hasClass('fixed')) {
            $('html,body').animate({ scrollTop: $(ele).offset().top - 2.37 * htmlFontSize },
                300
            );
        } else {
            $('html,body').animate({ scrollTop: $(ele).offset().top - 4.26 * htmlFontSize },
                300
            );
        }

    })
    //滚动到网站导航，7大主题锚点跳转固定在网站导航下方
    if ($('.j-theme-list-box2').offset()) {
        var htmlFontSize = $('html').css('font-size').replace(/px/, "") * 1;
        var themeSwiperTop = $('.j-theme-list-box2').offset().top - 0.89 * htmlFontSize;
    }

    //获取每个主题距离顶端的距离存入数组中
    if ($('#theme-content')) {
        var themeTops = [];
        var themePage = $('#theme-content');
        themePage.find('ul li').each(function(index, el) {
            themeTops.push($(el).offset().top)
        });
    }

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var navHeight = $('.header').height();
        if (scrollTop > (themeSwiperTop - navHeight)) {

            $('.j-theme-list-box2').addClass('fixed').addClass('headerSpacingTop').css('background', '#FFF');
            $('.j-theme-list-box2 .swiper-button-prev').addClass('contentSpacingTop');
            $('.j-theme-list-box2 .swiper-button-next').addClass('contentSpacingTop');

        } else {
            $('.j-theme-list-box2').removeClass('fixed').removeClass('headerSpacingTop').css('background', '#FFF');
            $('.j-theme-list-box2 .swiper-button-prev').removeClass('contentSpacingTop');
            $('.j-theme-list-box2 .swiper-button-next').removeClass('contentSpacingTop');
        }
        if (themeTops) {
            //加的数值越大，根据页面滚动位置导航条选中状态变化越早
            scrollTop = scrollTop+$(window).height()*1.1;
            themeTopsLength = themeTops.length;
            for (var i = 0; i < themeTopsLength; i++) {

                if (scrollTop > themeTops[i] && scrollTop < themeTops[i + 1]) {
                    $('.j-theme-swiper2').find('.swiper-slide').eq(i).addClass('theme-active').siblings('.swiper-slide').removeClass('theme-active');
                    themeSwiper.slideTo(i, 1000, false);
                }
                if (scrollTop > themeTops[themeTopsLength - 1]) {
                    $('.j-theme-swiper2').find('.swiper-slide').eq(themeTopsLength - 1).addClass('theme-active').siblings('.swiper-slide').removeClass('theme-active');
                    themeSwiper.slideTo(themeTopsLength - 1, 1000, false);
                }
            }
        }
    });
    /*7大主题锚点跳转*/
    /*主题下整个图可以点击*/
    $('.themes-pic-item').on('click', function() {
        window.location = $(this).find('a.to-detail').attr('href');
    })

    document.addEventListener('touchstart',function(){
        if( $('.j-theme-list-box2')){
             $('.j-theme-list-box2').css('background', '#FFF');
        }
       $('.header').addClass('fixed');

    },false);
});
/*会员尊享*/
$(document).ready(function() {
    /*滚动一屏后，导航置顶*/
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });

    /*一星和二星tab切换*/
    var themeTabs = new Swiper('.star-two-list', {
        autoplay: 5000,
        onSlideChangeEnd: function(swiper) {
            var j = themeTabs.activeIndex;
            $('.star-tabs li').removeClass('active').eq(j).addClass('active');
        }
    })
    $('.star-tabs li').on('click', function(e) {
        e.preventDefault();
        //得到当前索引
        var i = $(this).index();
        $('.star-tabs li').removeClass('active').eq(i).addClass('active');
        themeTabs.slideTo(i, 500, false);
    });

    /*会员感言*/
    var memberCommentsBanner = new Swiper('.j-member2', {
        autoplay: 5000, //可选选项，自动滑动
        loop: true,
        pagination: '.j-member2 .swiper-pagination',
        paginationClickable: true,
        onSlideChangeEnd: function(swiper) {
            var currenIndex = swiper.realIndex + 1;
            var total = swiper.bullets.length;

            if (currenIndex < 10) {
                currenIndex = "0" + currenIndex;
            }
            if (total < 10) {
                total = "0" + total;
            }
            var value = currenIndex + "/" + total;
            $('.j-member2').find('.curren-silde-num').text(value);
        },
    })

});
/*会员申请*/
$(document).ready(function() {
    /*滚动后，导航置顶*/
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });
    /*注册*/
    $('#sendIdentifyingCodeBtn').on('click', function(event) {
        event.preventDefault();

        alert('发送验证码');
    })
    $('#submitBtn').on('click', function(event) {
        event.preventDefault();

        alert('提交申请');
        $('.before-submit ').hide('fast');
        $('.submit-success').show('fast');

    })
    /*注册*/
});
