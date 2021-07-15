var date = new Date('november 26, 2021').getTime();

var bxDays = document.getElementById('days');
var bxHours = document.getElementById('hours');
var bxMinutes = document.getElementById('minutes');
var bxSeconds = document.getElementById('seconds');

var days, hours, minutes, seconds;

var regressiva = document.getElementById('regressiva');

setInterval(function () {
  var currentDate = new Date().getTime();
  seconds = (date - currentDate) / 1000;
  
  days = parseInt(seconds / 86400);
  seconds = seconds % 86400;
  hours = parseInt(seconds / 3600);
  seconds = seconds % 3600;

  minutes = parseInt(seconds / 60);
  seconds = parseInt(seconds % 60);

  bxDays.innerHTML = days;
  bxHours.innerHTML = hours;
  bxMinutes.innerHTML = minutes;
  bxSeconds.innerHTML = seconds;
}, 1000);
