 /*公共js*/
 $(document).ready(function() {
     //滚动后，导航置顶
     $(window).scroll(function() {
         if ($(window).scrollTop() > 0) {
             $('.header').addClass('fixed');
             $('.to-top').removeClass('hide');
         } else {
             $('.header').removeClass('fixed');
             $('.to-top').addClass('hide');


         }
     });
     // 底部轮播
     var bottomSwiper = new Swiper('.bottom-swiper', {
         slidesPerView: 6,
         prevButton: '.bottom-swiper .swiper-button-prev',
         nextButton: '.bottom-swiper .swiper-button-next'
     });
     //返回顶部
     $('.to-top').on('click', function() {
         $('body,html').animate({ scrollTop: 0 }, 500);
     })

     /*注册代码开始*/
     //关闭弹出层
     $('.popup-wrapper').find('.close-popup').on('click', function() {
         $(this).parents('.popup-wrapper').hide();
     })
     //打开弹出层
     $('.wechat-box-text,#startTravel').on('click', function(event) {
         event.preventDefault();
         /* Act on the event */
         $('.popup-wrapper.membership-application').show();
     });

     $('#sendIdentifyingCodeBtn').on('click', function(event) {
         event.preventDefault();

         alert('发送验证码');
     })
     $('#submitBtn').on('click', function(event) {
         event.preventDefault();

         alert('提交申请');
         $('.before-submit ').hide();
         $('.submit-success').show();
         //关闭弹窗
         // $(this).parents('.popup-wrapper').hide();
     })

     /*设置所有锚点滚动效果*/
     $('a[href*="#"]:not([href="#"])').click(function() {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 $('html, body').animate({
                     scrollTop: target.offset().top-140
                 }, 500);
                 return false;
             }
         }
     });

 });


 /*首页*/
 $(document).ready(function() {
     //banner图
     var banner = new Swiper('.banner', {
         autoplay: 5000, //可选选项，自动滑动
         loop: true,
         pagination: '.banner .swiper-pagination',
         paginationClickable: true,
     })
     // 会员感言
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
     var themeTabs = new Swiper('.theme-banner', {
         autoplay: 5000,
         onSlideChangeEnd: function(swiper) {
             var j = themeTabs.activeIndex;
             $('.theme-tabs li').removeClass('active').eq(j).addClass('active');
         }
     })
     //主题切换
     $('.theme-tabs li').on('click', function(e) {
         e.preventDefault();
         //得到当前索引
         var i = $(this).index();
         $('.theme-tabs li').removeClass('active').eq(i).addClass('active');
         themeTabs.slideTo(i, 500, false);
     });

     /*滚动到main-page*/
     $('.to-main-page').on('click', function() {
         $('html,body').animate({ scrollTop: $('#main-page').offset().top },
             300
         );

     })

 });

 /*会员尊享*/
 $(document).ready(function() {
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

     /*一星二星*/

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
     //滚动一屏后，导航置顶
     $(window).scroll(function() {
         if ($(window).scrollTop() > 0) {
             $('.header').addClass('fixed');
         } else {
             $('.header').removeClass('fixed');

         }
     });
     $('.to-top').on('click', function() {
         $('body,html').animate({ scrollTop: 0 }, 500);
     })

 });



 /*产品日历*/
 $(document).ready(function() {
     // 底部轮播
     var bottomSwiper = new Swiper('.bottom-swiper', {
         slidesPerView: 6,
         prevButton: '.bottom-swiper .swiper-button-prev',
         nextButton: '.bottom-swiper .swiper-button-next'
     });

     //滚动一屏后，导航置顶
     $(window).scroll(function() {
         if ($(window).scrollTop() > 0) {
             $('.header').addClass('fixed');
         } else {
             $('.header').removeClass('fixed');

         }
     });

     $('#more-month-btn').on('click',function(event){
        event.preventDefault();
        $('.months-ul-li').show();
        $(this).parent().hide();
     })

 });

 /*7大主题*/
 $(document).ready(function() {

     //滚动到网站导航，7大主题锚点跳转固定在网站导航下方
     if ($('.themes-list-header').offset()) {
         var themesTabTop = $('.themes-list-header').offset().top;

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
         var navHeight = $('#header').height();
         if (scrollTop > (themesTabTop - navHeight)) {

             $('.themes-list-header').addClass('fixed');

         } else {
             $('.themes-list-header').removeClass('fixed');

         }

         if (themeTops) {
             //加的数值越大，根据页面滚动位置导航条选中状态变化越早
             scrollTop = scrollTop + 700;
             themeTopsLength = themeTops.length;
             for (var i = 0; i < themeTopsLength; i++) {

                 if (scrollTop > themeTops[i] && scrollTop < themeTops[i + 1]) {
                     $('.themes-list-header').find('li').eq(i).addClass('active').siblings('li').removeClass('active');

                 }
                 if (scrollTop > themeTops[themeTopsLength - 1]) {
                     $('.themes-list-header').find('li').eq(themeTopsLength - 1).addClass('active').siblings('li').removeClass('active');

                 }
             }
         }



     });

     //7大主题锚点跳跃
     $('.themes-list-header ul').find('li').on('click', function() {
         $('.themes-list-header ul').find('li').removeClass('active');
         $(this).addClass('active');
         var index = $(this).index();
         //获取要跳转到的元素
         var ele = $('.themes-list-ul').find('li.themes-list-ul-li').eq(index);
         if ($('.header').hasClass('fixed')) {
             $('html,body').animate({ scrollTop: $(ele).offset().top - 139 },
                 300
             );
         } else {
             $('html,body').animate({ scrollTop: $(ele).offset().top - 200 },
                 300
             );
         }


     })

     /*整个图可以点击*/
     $('.themes-pic-item').on('click', function() {
         window.location = $(this).find('a.to-detail').attr('href');
     })


 });