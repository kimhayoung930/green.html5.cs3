(function(win, $){
	var $html = $("html");
	var deviceSize = {
		pc:1009,
		tablet:801,
		mobile:800
	};

	function scrollShowHide(status) {
		$html.css({"overflow-y":status});
		return $html.width();    
	}

	var sc_w1 = scrollShowHide("hidden"), // 스크롤이 없을때 width
	sc_w2 = scrollShowHide("scroll"),   // 스크롤이 있을때 width
	sc_w3 = sc_w1 - sc_w2;

	if(sc_w3 > 0) {
		deviceSize.pc = deviceSize.pc -  sc_w3;
		deviceSize.tablet = deviceSize.tablet -  sc_w3;
		deviceSize.mobile = deviceSize.mobile -  sc_w3;
	}
    
	// console.log(deviceSize.pc);

	$(win).on("resize", function() {
		var w_size = $(win).width();
		
		if(w_size >= deviceSize.pc && !$("html").hasClass("pc")) {
			$html.removeClass("mobile tablet").addClass("pc");
			scrollShowHide("scroll");
		} 
		
		else if(w_size < deviceSize.pc && w_size >= deviceSize.tablet 
		&& !$("html").hasClass("tablet")) {
			$html.removeClass("mobile pc").addClass("tablet");
			scrollShowHide("scroll");
		} 
		
		else if(w_size <= deviceSize.mobile 
		&& !$html.hasClass("mobile")) {
			$html.removeClass("pc tablet").addClass("mobile");
			var menu_pos = parseInt($(".mobile-menu-wrap").css("left"));

			if(menu_pos >= 0) {
							scrollShowHide("hidden");
			}
		}
	});

	$(function(){
		$(win).trigger("resize"); // 사이트 로딩시 강제 실행

		$(document).on("mouseover focus",  // 데스크톱, 태블릿 이벤트
		".pc #gnb>ul>li>a, .tablet #gnb>ul>li>a", 
		gnbPlay);

		$(document).on("click",   // 모바일 상위 메뉴 터치시 이벤트
		".mobile #gnb>ul>li:not(.no-sub)>a", 
		gnbPlay);

		function gnbPlay() {  // 하위 메뉴 슬라이드 업/다운 기능
			var $ts = $(this);
			if($("html").hasClass("mobile")) {
				$(".mobile #gnb>ul>li>a").removeClass("on");
				$("#gnb ul ul:visible").slideUp(300);

				if($ts.next().is(":hidden")) {
					$ts.addClass("on");
					$ts.next().stop(true,true).slideDown(300);
				}
			} else {
				$("#gnb ul ul:visible").slideUp(300);
				$ts.next().stop(true,true).slideDown(300);
			}
		}

		$(document).on("mouseleave",
		".pc #gnb, .tablet #gnb", gnbleave);

		function gnbleave() {
			$("#gnb ul ul:visible").slideUp(300);
			$("#gnb>ul>li>a").removeClass("on");
		}

		$(".mobile-menu-open button").on("click", function() {
			$(".mobile-menu-wrap").animate({"left":0}, 200);
			scrollShowHide("hidden");
		});

		$(".mobile-menu-close button").on("click", function() {
			$(".mobile-menu-wrap").animate({"left":"-1000px"}, 200);
			scrollShowHide("scroll");
			gnbleave();
		});
	});

}(window, jQuery));