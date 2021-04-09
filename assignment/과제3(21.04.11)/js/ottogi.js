$(function(){
    var trigger =$("#trigger");
    var menu = $("ul li");

    $(trigger).on("click", function(e){
        e.preventDefault();
        menu.slideToggle();
           
    });
   
    $(window).resize(function(){
        var w=$(window).width();

        if(w > 320 && menu.is(":hidden")){
            menu.removeAttr("style");
        }
    });
    //resize는 화면 크기에 따라 비율은 다르개해줌 
});

$(function(){
    var menuLink1 = $(".menuLink1");
    var sub =$(".submenuLink");

    $(menuLink1).on("click",function(e){
        e.preventDefault();
        sub.slideToggle();
    });
    $(window).resize(function(){
        var n =$(window).width();

        if(n > 320 && sub.is(":hidden")){
            sub.removeAttr("style");
        }
    });
});