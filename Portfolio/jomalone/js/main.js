$(document).ready(function(){
    var wd = $(window);
    $('section[data-type="background"]').each(function(){
        var bg = $(this);
        wd.scroll(function(){
            var yPos = -(wd.scrollTop() / bg.data('speed'));
            var coords = '50%' + yPos + 'px';
            console.log("coords:" + coords);
            bg.css({backgroundPosition:coords});
        });
    });
});
