// Author: Pham Cong Son - Email: phamcongsonit@gmail.com
$(function() {
	console.log("Tác giả: Phạm Công Sơn - phamcongsonit@gmail.com");
	setTimeout(function() {
		var pcs = 0;
		var time = ((Math.random()) + 1) * 500;
		var button = '<button type="button" class="btn small pcs-button pcs-follow-active">Auto Follow</button>';
		button += '<button type="button" class="btn small pcs-button pcs-unfollow-active">Auto Unfollow</button>';
		button += '<button type="button" class="btn small pcs-button pcs-like-active">Auto Like</button>';
		var style = '<style>.pcs-button{position:fixed; bottom:80px; left:10px;} .pcs-button.active{background: #55acee; color: white; border: 1px solid #3b88c3;} .pcs-button.pcs-unfollow-active{bottom:50px;} .pcs-button.pcs-like-active{bottom:20px;}</style>';
		$("body").append(button + style);
		$(document).on('click', '.pcs-unfollow-active', function() {
			$(this).addClass("active");
			setInterval(function() {
				time = ((Math.random()) + 1) * 500;
				user = ".Grid-cell.u-size1of2:eq(" + pcs + ")";
				$('body,html').animate({
					scrollTop: $(user).offset().top - 50
				});
				$(user).find(".following").find(".user-actions-follow-button").click();
				pcs += 1;
				
			}, time);
		});
		$(document).on('click', '.pcs-follow-active', function() {
			$(this).addClass("active");
			setInterval(function() {
				time = ((Math.random()) + 1) * 500;
				user = ".Grid-cell.u-size1of2:eq(" + pcs + ")";
				$('body,html').animate({
					scrollTop: $(user).offset().top - 50
				});
				var bgSrc = $(user).find(".ProfileCard-avatarImage.js-action-profile-avatar").prop("src");
				if (bgSrc.indexOf("default_profile_images") == -1) {
					$(user).find(".not-following").find(".user-actions-follow-button").click();
				}
				pcs += 1;
			}, time);
		});
		$(document).on('click', '.pcs-like-active', function(){
			$(this).addClass("active");
			setInterval(function() {
				time = ((Math.random()) + 1) * 500;
				if ($(".js-actionFavorite:eq(" + pcs + ").ProfileTweet-actionButtonUndo").css("display") == "none"){
					$(".js-actionFavorite:eq(" + pcs + ")").click();
				}
				$('body,html').animate({
					scrollTop: $(".js-actionFavorite:eq(" + pcs + ")").offset().top - 50
				});
				pcs += 1;
			}, time);
		});
	}, 1)
});