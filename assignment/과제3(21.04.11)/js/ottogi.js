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