/* Pomodo Clock developed by Pierre Macedo*/

isRunning = true;
this.timing;
function startSession(duration, display) {
    var timer = duration, minutes, seconds;
    this.timing = setInterval(function () {
    if (!isRunning) {
        // not running, do nothing
    } else {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
      
  if (timer === 0) {
   wait();}
    }}, 1000);
}
function startBreak(duration, display) {
    var timer = duration, minutes, seconds;
    this.timing = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
  if (timer === 0) {
   go();}
    }, 1000);
}

function go() {
  isRunning = true;
var userinput = $("#session").text();
var test = parseInt(userinput) * 60,
        display = $('#time');
    startSession(test, display);
}
function wait() {
  clearInterval(this.timing);
  var userinput = $("#break").text();
var test = parseInt(userinput) * 60,
        display = $('#time');
    startBreak(test, display);
}

function stop() {
isRunning = false;
$('#start').addClass('display');
$('#resume').removeClass('display');
}

function resume () {
    isRunning = true;
    }

function reset() {
  clearInterval(this.timing);
  $('#time').empty();
  $('#time').html('25:00');
  $('#start').removeClass('display');
  $('#resume').addClass('display');
}
function plusB () {
    var plus = $('#break').text();
    var plus2 = parseInt(plus) + 1;
    $('#break').empty().html(plus2);
}
function minusB () {
    var minus = $('#break').text();
    var minus2 = parseInt(minus) - 1;
if (minus2 < 0) {
  $('#break').empty().html('0');
} else {
  $('#break').empty().html(minus2);
}
}
function plusS () {
    var plus = $('#session').text();
    var plus2 = parseInt(plus) + 1;
    $('#session').empty().html(plus2);
}
function minusS () {
    var minus = $('#session').text();
    var minus2 = parseInt(minus) - 1;
if (minus2 < 0) {
  $('#session').empty().html('0');
} else {
  $('#session').empty().html(minus2);
}
}