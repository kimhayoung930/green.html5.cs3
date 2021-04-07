$(function(){
    $(".nav").hover(function(){
        var lnbShow =$(".lnb_container").is(':visible')

        if(lnbShow){ //하위메뉴가 보이면 실행
            $(".lnb_container").removeClass("appear");
            $(".lnb_container").addClass("disappear");
        } else{  // 하위메뉴가 보이지 않으면 실행
            $(".lnb_container").removeClass("disappear");
            $(".lnb_container").addClass("appear");
        }
        $(".lnb_container").toggle();
    });
    $(".nav li").hover(function(){
        $(".active_bor").toggle();

        var listLeft= $(this).offset().left;
        var listWidth= $(this).width();

        $(".active_bor").width(listWidth);
        $(".active_bor").offset({left : listLeft + 17});

    });
});