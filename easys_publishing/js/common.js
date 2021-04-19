(function(win, $){
	var $html = $("html");
	var deviceSize = {
		pc:1009,
		tablet:801,
		mobile:800
	};

	function scrollShowHide(status) {
		$html.css({"overflow-y" : status});
		return $html.width();
	}
	var sc_w1 = scrollShowHide("hidden"), //스크롤이 없을때 width
	sc_w2 = scrollShowHide("scroll"), //스크롤이 있을때 width
	sc_w3 = sc_w1 - sc_w2;
	if(sc_w3 > 0) {
		deviceSize.pc = deviceSize.pc - sc_w3;
		deviceSize.tablet = deviceSize.tablet - sc_w3;
		deviceSize.mobile = deviceSize.mobile - sc_w3;
	}
	// console.log(deviceSize.pc);

	$(win) .on("resize", function(){
		var w_size =$(win).width();

		if(w_size >= deviceSize.pc && !$("html").hasClass("pc")){
			$html.removeClass("mobile tablet").addClass("pc");
			scrollShowHide("scroll");
		}  //pc버전

		else if(w_size < deviceSize.pc && w_size >=deviceSize.tablet 
			&& !$("html").hasClass("tablet")){
				$html.removeClass("mobile pc").addClass("tablet");
				scrollShowHide("scroll");
			} //pc버전과 tablet버전 일때

			else if(w_size <= deviceSize.mobile
				&& !$html.hasClass("mobile")){
					$html.removeClass("pc tablet").addClass("mobile");
					var menu_pos =parseInt($(".mobile-menu-wrap").css("left"));

					if(menu_pos >= 0){
						scrollShowHide("hidden");
					}
				} //mobile 버전
	});
	
}(window, jQuery));


