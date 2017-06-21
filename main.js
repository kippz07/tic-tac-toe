$(function () {

	var $divs = $('div');
	var $h1 = $('h1');
	var $h2 = $('h2');
	var $cross = $('.cross');
	var $nought = $('.nought');
	var $main = $('main');
	var $button = $('button');

	var player = '';
	var count = 0;
	var endResult = '';

	$cross.addClass('invisible');
	$nought.addClass('invisible');

	$button.click(function (event) {
		clear();
	})

	$button.hover(function (event) {
		$(this).css('background', 'crimson');
	})

	$button.mouseleave(function (event) {
		$(this).css('background', 'lightblue');
	})
	

	$divs.each(function (event) {
		$(this).click(function (event) {
			var h1El = run();;

			if(($(this).children('h1.cross').hasClass('invisible')) && ($(this).children('h1.nought').hasClass('invisible'))) {
				$(this).children(h1El).removeClass('invisible');
				$(this).addClass(player);
				count++;
			}
			
				winner(player);
			if (count === 9 && !$divs.hasClass('display')) {
				draw();
			}

			$(this).animate({ "top": "+=1px" }, "fast" );
			$(this).animate({ "top": "-=1px" }, "fast" );
			
		});

	});


	function run () {
		if (count % 2 === 0) {
			player = 'player1';
			return h1El = playerOne();
		} else {
			player = 'player2'
			return h1El = playerTwo();
		}
	}

	function playerOne () {
		return 'h1.cross';
	}

	function playerTwo () {
		return 'h1.nought';
	}


	function winner (player) {
		checkRows(player);
		checkColumns(player);
		checkDiagonals(player);
	}

	function draw () {
		$divs.fadeOut();
		$main.fadeOut();
		$divs.addClass('display');
		$h2.html('It\'s a draw!');
		$('h2').animate({fontSize: '80px'});
		$button.removeClass('invisible');
	}

	function endScreen (player) {
		$divs.fadeOut();
		$main.fadeOut();
		$divs.addClass('display');
		$h2.html(player + ' wins!');
		$('h2').animate({fontSize: '80px'});
		$button.removeClass('invisible');
		
	}

	function clear () {
		player = '';
		count = 0;
		endResult = '';
		$cross.addClass('invisible');
		$nought.addClass('invisible');
		$divs.removeClass('display');
		$button.addClass('invisible');
		$divs.show();
		$main.show();
		$h2.css('fontSize', '1px');
		$('div.player1').removeClass('player1');
		$('div.player2').removeClass('player2');
		$('p').remove();
	}

	function checkRows (player) {
		if (($divs.eq(0).hasClass(player)) && ($divs.eq(1).hasClass(player)) && ($divs.eq(2).hasClass(player))) {
			endScreen(player);
		}

		if (($divs.eq(3).hasClass(player)) && ($divs.eq(4).hasClass(player)) && ($divs.eq(5).hasClass(player))) {
			endScreen(player);
		}

		if (($divs.eq(6).hasClass(player)) && ($divs.eq(7).hasClass(player)) && ($divs.eq(8).hasClass(player))) {
			endScreen(player);
		}
	}

	function checkColumns (player) {
		if (($divs.eq(0).hasClass(player)) && ($divs.eq(3).hasClass(player)) && ($divs.eq(6).hasClass(player))) {
			endScreen(player);
		}

		if (($divs.eq(1).hasClass(player)) && ($divs.eq(4).hasClass(player)) && ($divs.eq(7).hasClass(player))) {
			endScreen(player);
		}

		if (($divs.eq(2).hasClass(player)) && ($divs.eq(5).hasClass(player)) && ($divs.eq(8).hasClass(player))) {
			endScreen(player);
		}
	}

	function checkDiagonals (player) {
		if (($divs.eq(0).hasClass(player)) && ($divs.eq(4).hasClass(player)) && ($divs.eq(8).hasClass(player))) {
			endScreen(player);
		}

		if (($divs.eq(6).hasClass(player)) && ($divs.eq(4).hasClass(player)) && ($divs.eq(2).hasClass(player))) {
			endScreen(player);
		}
	}

















});
