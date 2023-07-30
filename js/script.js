$(function(){
    $('.single-item').slick({
        autoplay:true,
        autoplaySpeed:0,
        speed:4000,
        cssEase:"linear",
        slidesToShow: 4,
        slidesToScroll: 4
    });



    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
        var h = $(window).height();//ブラウザの高さを取得
        $(".splashbg").css({
        "border-width":h,//ボーダーの太さにブラウザの高さを代入
        "animation-name":"backBoxAnime"//animation-nameを定義
        }); 
        });
        $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
        $("#splash").click(function(){
            $("#splash").css("display","none");
        });

        document.querySelectorAll(".js-g08").forEach((item, i) => {
            const tl = gsap.timeline({
              delay: i * 0.1,
            });
            tl.from(item, { opacity: 0, scale: 0, duration: 0.5, ease: "back", })
              .to(item, { yPercent: -50, duration: 0.25, ease: "back", }, "+=0.4") //0.4秒後
              .to(item, { yPercent: 0, duration: 0.25, ease: "back", })
          });
          
});
