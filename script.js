const date = new Date('november 26, 2021').getTime();

const bxDays = document.getElementById('days');
const bxHours = document.getElementById('hours');
const bxMinutes = document.getElementById('minutes');
const bxSeconds = document.getElementById('seconds');

let days, hours, minutes, seconds;


window.addEventListener('load', () => { 

    dates()
})

function dates() {
  let todayIs = document.getElementById('todayIs');
  let date = new Date();
  let day = date.getDate();
  let weeklyDay = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();

  let weeklyDayName = [
    ' domingo',
    ' segunda-feira',
    ' terça-feira',
    ' quarta-feira',
    ' quinta-feira',
    ' sexta-feira',
    ' sábado',
  ];

  let monthName = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  let WeeklyName = weeklyDayName[weeklyDay];

  todayIs.textContent =
    WeeklyName + ', ' + day + ' de ' + monthName[month] + ' de ' + year;
}

setInterval(() => {
  let currentDate = new Date().getTime();
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
