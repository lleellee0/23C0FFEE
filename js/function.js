var colorArray = ["red", "#FF0000", 
"crimson", "#DC143C", 
"firebrick", "#B22222", 
"maroon", "#800000", 
"darkred", "#8B0000", 
"brown", "#A52A2A", 
"sienna", "#A0522D", 
"saddlebrown", "#8B4513", 
"indianred", "#CD5C5C", 
"rosybrown", "#BC8F8F", 
"lightcoral", "#F08080", 
"salmon", "#FA8072", 
"darksalmon", "#E9967A", 
"coral", "#FF7F50", 
"tomato", "#FF6347", 
"sandybrown", "#F4A460", 
"lightsalmon", "#FFA07A", 
"peru", "#CD853F", 
"chocolate", "#D2691E", 
"orangered", "#FF4500", 
"orange", "#FFA500", 
"darkorange", "#FF8C00", 
"tan", "#D2B48C", 
"peachpuff", "#FFDAB9", 
"bisque", "#FFE4C4", 
"moccasin", "#FFE4B5", 
"navajowhite", "#FFDEAD", 
"wheat", "#F5DEB3", 
"burlywood", "#DEB887", 
"darkgoldenrod", "#B8860B", 
"goldenrod", "#DAA520", 
"gold", "#FFD700", 
"yellow", "#FFFF00", 
"lightgoldenrodyellow", "#FAFAD2", 
"palegoldenrod", "#EEE8AA", 
"khaki", "#F0E68C", 
"darkkhaki", "#BDB76B", 
"lawngreen", "#7CFC00", 
"greenyellow", "#ADFF2F", 
"chartreuse", "#7FFF00", 
"lime", "#00FF00", 
"limegreen", "#32CD32", 
"yellowgreen", "#9ACD32", 
"olive", "#808000", 
"olivedrab", "#6B8E23", 
"darkolivegreen", "#556B2F", 
"forestgreen", "#228B22", 
"darkgreen", "#006400", 
"green", "#008000", 
"seagreen", "#2E8B57", 
"mediumseagreen", "#3CB371", 
"darkseagreen", "#8FBC8F", 
"lightgreen", "#90EE90", 
"palegreen", "#98FB98", 
"springgreen", "#00FF7F", 
"mediumspringgreen", "#00FA9A", 
"teal", "#008080", 
"darkcyan", "#008B8B", 
"lightseagreen", "#20B2AA", 
"mediumaquamarine", "#66CDAA", 
"cadetblue", "#5F9EA0", 
"steelblue", "#4682B4", 
"aquamarine", "#7FFFD4", 
"powderblue", "#B0E0E6", 
"pavarurquoise", "#AFEEEE", 
"lightblue", "#ADD8E6", 
"lightsteelblue", "#B0C4DE", 
"skyblue", "#87CEEB", 
"lightskyblue", "#87CEFA", 
"mediumturquoise", "#48D1CC", 
"turquoise", "#40E0D0", 
"darkturquoise", "#00CED1", 
"aqua", "#00FFFF", 
"cyan", "#00FFFF", 
"deepskyblue", "#00BFFF", 
"dodgerblue", "#1E90FF", 
"cornflowerblue", "#6495ED", 
"royalblue", "#4169E1", 
"blue", "#0000FF", 
"mediumblue", "#0000CD", 
"navy", "#000080", 
"darkblue", "#00008B", 
"midnightblue", "#191970", 
"darkslateblue", "#483D8B", 
"slateblue", "#6A5ACD", 
"mediumslateblue", "#7B68EE", 
"mediumpurple", "#9370DB", 
"darkorchid", "#9932CC", 
"darkviovar", "#9400D3", 
"blueviovar", "#8A2BE2", 
"mediumorchid", "#BA55D3", 
"plum", "#DDA0DD", 
"lavender", "#E6E6FA", 
"thistle", "#D8BFD8", 
"orchid", "#DA70D6", 
"viovar", "#EE82EE", 
"indigo", "#4B0082", 
"darkmagenta", "#8B008B", 
"purple", "#800080", 
"mediumviovarred", "#C71585", 
"deeppink", "#FF1493", 
"fuchsia", "#FF00FF", 
"magenta", "#FF00FF", 
"hotpink", "#FF69B4", 
"paleviovarred", "#DB7093", 
"lightpink", "#FFB6C1", 
"pink", "#FFC0CB", 
"mistyrose", "#FFE4E1", 
"blanchedalmond", "#FFEBCD", 
"lightyellow", "#FFFFE0", 
"cornsilk", "#FFF8DC", 
"antiquewhite", "#FAEBD7", 
"papayawhip", "#FFEFD5", 
"lemonchiffon", "#FFFACD", 
"beige", "#F5F5DC", 
"linen", "#FAF0E6", 
"oldlace", "#FDF5E6", 
"lightcyan", "#E0FFFF", 
"aliceblue", "#F0F8FF", 
"whitesmoke", "#F5F5F5", 
"lavenderblush", "#FFF0F5", 
"floralwhite", "#FFFAF0", 
"mintcream", "#F5FFFA", 
"ghostwhite", "#F8F8FF", 
"honeydew", "#F0FFF0", 
"seashell", "#FFF5EE", 
"ivory", "#FFFFF0", 
"azure", "#F0FFFF", 
"snow", "#FFFAFA", 
"white", "#FFFFFF", 
"gainsboro", "#DCDCDC", 
"lightgrey", "#D3D3D3", 
"silver", "#C0C0C0", 
"darkgray", "#A9A9A9", 
"lightslategray", "#778899", 
"slategray", "#708090", 
"gray", "#808080", 
"dimgray", "#696969", 
"darkslategray", "#2F4F4F", 
"black", "#000000"];
// colorArray.length는 280
// 총 140개의 색깔존재


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 1. 전역 변수 선언 시작 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

var level = 1;
var timer;
var pickedColorIndexes;

var score = 0;
var levelStartTime;	// 빨리 정답을 맞추면 가점을 주기 위해 레벨마다 시작시간 기록
var prevIncorrectTime;	// 이전에 오답을 입력했던 시간 (레벨 시작시 levelStartTime로 초기화)
var timerSecond;

var seqCorrectCount = 0;
var maxSeqCorrectCount = 0;
var correctCount = 0;
var incorrectCount = 0;

var isHard = false;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 1. 전역 변수 선언 끝 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 2. 이벤트 등록 시작 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
$('.block').on('click', function(event) {
	var $eventTarget = $(event.target);
	var $combo = $('#combo');

	if($eventTarget.hasClass("disabled")) {	// 이미 클릭되어 오답처리된 블록
		return;
	}

	if($eventTarget.hasClass("correct")) {	// 정답인경우
		clearGameTimer();	// 타이머 제거
		$eventTarget.removeClass("correct")
		addAndDrawScore();
		progressGame();

		// Combo 설정
		seqCorrectCount++;
		$combo.text(seqCorrectCount);

		// 최대 Combo 기록
		if(maxSeqCorrectCount < seqCorrectCount)
			maxSeqCorrectCount = seqCorrectCount;

		// 정답 횟수 증가
		correctCount++;
	}
	else {	// 오답인 경우
		$eventTarget.addClass("disabled");

		var currentTime = new Date().getTime();
		timerSecond = timerSecond - ((currentTime - prevIncorrectTime)/1000.0 + 0.5);

		if(timerSecond < 0)
			timerSecond = 0;

		setProgressBarAndRefresh(timerSecond, (timerSecond / calculateTimerSecond(level - 1) * 100));

		prevIncorrectTime = currentTime;

		clearGameTimer();
		setGameTimer(timerSecond);

		seqCorrectCount = 0;
		$combo.text(seqCorrectCount);

		// 오답 횟수 증가
		incorrectCount++;
	}
});

$('#normal-mode').on('click', function(event) {
	isHard = false;
	startGame();
});

$('#hard-mode').on('click', function(event) {
	isHard = true;
	startGame();
});


$('#return-menu').on('click', function(event) {
	$('#result').addClass('display-none');
	$('#menu').removeClass('display-none');
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 2. 이벤트 등록 끝 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 3. 동작 함수 시작 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 게임 시작 함수
function startGame() {
	initVariablesAndScore();
	hideMenuModal();
	showCountDown();
	setTimeout(function() {
		$('.modal-background').addClass('display-none');
		progressGame();	
	}, 3500);	// 3.5초 후 시작
}

function initVariablesAndScore() {
	level = 1;
	score = 0;
	seqCorrectCount = 0;
	maxSeqCorrectCount = 0;
	correctCount = 0;
	incorrectCount = 0;

	$('#score').text(score);
	$('#combo').text(seqCorrectCount);
}


// 일반 게임 함수 (매 Level마다 호출됨)
function progressGame() {
	$('.disabled').removeClass('disabled');

	var correctAnswerIndex;
	timerSecond = calculateTimerSecond(level++);
	progressBarRefresh(timerSecond);	// Progress Bar 설정
	setGameTimer(timerSecond);			// 타이머 설정(Progress Bar와 sync)

	pickedColorIndexes = new Set();
	pickColor(9);								// 9개의 색 선택
	correctAnswerIndex = getRandomInteger(9);	// 그중 한개의 정답 인덱스 선택 (배열이 아닌 블록에 대한 인덱스임.)

	var blockCount = 0;
	pickedColorIndexes.forEach(function(index) {
		/*
		 * correctAnswertIndex는 현재 블록 내의 인덱스를 의미하므로 이 색이 colorArray에서 어느 인덱스 인지를 넘겨줘야함.
		 */
		if(blockCount === correctAnswerIndex)
			displayColorValues(index);

		drawColorAtBlock(blockCount++, index);
	});									// 블록에 색칠

	signCorrectBlock(correctAnswerIndex);	// 정답블록에 correct라는 이름의 class 등록
	
	levelStartTime = new Date().getTime();
	prevIncorrectTime = levelStartTime;
}

function setGameTimer(timerSecond) {
	timer = setTimeout(function() {
		finishGame();
	}, timerSecond * 1000);
}

function clearGameTimer() {
	clearTimeout(timer);
}


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 3. 동작 함수 끝 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 4. 화면 관련 함수 시작 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function showCountDown() {
	var $countdown = $('.countdown');

	for(var i = 0; i < 3; i++) {
		setTimeout(function() {
			$countdown.text((3-i));
		}, i*1000);
	}
	setTimeout(function() {
		$countdown.text(('Start'));
		$('.modal-background').css('opacity', '0.0');
	}, 3000);
}

function hideMenuModal() {
	$('#menu').addClass('display-none');
}
function showMenuModal() {
	$('#menu').removeClass('display-none');
}

function hideResultModal() {
	$('#result').addClass('display-none');
}
function showResultModal() {
	$('#result').removeClass('display-none');
}

function progressBarRefresh(timerSecond) {
	var $progressBar = $(".progress-bar");

	$(".progress-wrapper").css("width", "100%");
	$progressBar.css("animation-duration", timerSecond + "s");	// Progress Bar 애니메이션 시간 지정

	// 아래 코드는 아래 링크를 보고 해결
	// http://stackoverflow.com/questions/3485365/how-can-i-force-webkit-to-redraw-repaint-to-propagate-style-changes/3485654#14382251
	$progressBar.css("display", "none").height();
	$progressBar.css("display", "block");
}

function setProgressBarAndRefresh(timerSecond, widthPercent) {
	var $progressBar = $(".progress-bar");

	$(".progress-wrapper").css("width", widthPercent + "%");
	$progressBar.css("animation-duration", timerSecond + "s");	// Progress Bar 애니메이션 시간 지정

	// 아래 코드는 아래 링크를 보고 해결
	// http://stackoverflow.com/questions/3485365/how-can-i-force-webkit-to-redraw-repaint-to-propagate-style-changes/3485654#14382251
	$progressBar.css("display", "none").height();
	$progressBar.css("display", "block");
}

function drawColorAtBlock(blockCount, index) {
	$("#block-" + blockCount).css("background", colorArray[index+1]);
}

function drawColorAtScoreBoard(hex) {
	var $scoreBoardWrapper = $('.score-board-wrapper');
	var correctAnswerRgbString = hexToRgb(hex);

	var complementaryRgbString = calculateComplementaryColor(correctAnswerRgbString);
	$scoreBoardWrapper.css('background-color', correctAnswerRgbString);
	$scoreBoardWrapper.css('color', complementaryRgbString);
}

function clearColorAtScoreBoard() {
	$('.score-board-wrapper').removeAttr('style');
}

function signCorrectBlock(correctAnswerIndex) {
	$("#block-" + (correctAnswerIndex)).addClass("correct");
}

	// Menu에 값을 띄워준다.
function displayColorValues(correctColorIndex) {
	$("#hex").text(colorArray[correctColorIndex+1]);
	$("#name").text(colorArray[correctColorIndex]);
	$("#rgb").text(hexToRgb(colorArray[correctColorIndex+1]));

	if(isHard === true)
		clearColorAtScoreBoard();
	else
		drawColorAtScoreBoard(colorArray[correctColorIndex+1]);
}

function addAndDrawScore() {
	var levelEndTime = new Date().getTime();
	var currentTakeScore;

	currentTakeScore = Math.floor((1000000 / (levelEndTime - levelStartTime)));	// 빨리푼 경우 가산점
	currentTakeScore *= Math.floor((10 + seqCorrectCount) / 10.0);	// 연속 정답 횟수 * 10% 씩 가산점

	score += currentTakeScore;
	$("#score").text(score);
}

function finishGame() {
	var $progressBar = $(".progress-bar");
	var $modalBackground = $('.modal-background');

	$(".progress-wrapper").css("width", "100%");
	$progressBar.css("animation-duration", "0s");	// 한번 더 애니메이션이 발생하는 버그를 애니메이션 시간을 0으로 바꿔서 해결 (미봉책인 것 같다.)

	// 아래 코드는 아래 링크를 보고 해결
	// http://stackoverflow.com/questions/3485365/how-can-i-force-webkit-to-redraw-repaint-to-propagate-style-changes/3485654#14382251
	$progressBar.css("display", "none").height();
	$progressBar.css("display", "block");


	// 결과창 보여주기
	$modalBackground.removeClass('display-none');
	$modalBackground.css('opacity', '0.9');
	showResultModal();
	displayResultValues();
}

function displayResultValues() {
	if(isHard)
		$('#result-mode').text('Hard');
	else
		$('#result-mode').text('Normal');

	$('#result-score').text(score);
	$('#result-level').text(level - 1);
	$('#result-max-seq-count').text(maxSeqCorrectCount);
	$('#result-incorrect').text(incorrectCount);
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 4. 화면 관련 함수 끝 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 5. API 시작 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function hexToRgb(hex) {
    var regArray = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var rgbString = "rgb(";

    rgbString += parseInt(regArray[1], 16);
    rgbString += ", ";
    rgbString += parseInt(regArray[2], 16);
	rgbString += ", ";
    rgbString += parseInt(regArray[3], 16);
    rgbString += ")";

    return rgbString;
}

// 0 <= x <= (limit - 1) 반환
function getRandomInteger(limit) {
	return (Math.floor(Math.random() * limit));
}

function calculateComplementaryColor(rgbString) {
	var regArray = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/.exec(rgbString);
	var complementaryRgbString = "rgb(";

	complementaryRgbString += (255 - parseInt(regArray[2], 10));
	complementaryRgbString += ", ";
	complementaryRgbString += (255 - parseInt(regArray[3], 10));
	complementaryRgbString += ", ";
	complementaryRgbString += (255 - parseInt(regArray[4], 10));
	complementaryRgbString += ")";

	return complementaryRgbString;
}

function pickColor(pickColorNumber) {
	while(pickedColorIndexes.size !== pickColorNumber) {
		pickedColorIndexes.add(getRandomInteger(colorArray.length/2) * 2);
	}
}

function calculateTimerSecond(level) {
	return (3*level+3)/level + 3;
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 5. API 끝 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@