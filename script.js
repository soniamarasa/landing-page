const bxDays = document.getElementById('days');
const bxHours = document.getElementById('hours');
const bxMinutes = document.getElementById('minutes');
const bxSeconds = document.getElementById('seconds');
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const formCd = document.getElementById('formCd');

const date = new Date('november 26, 2021').getTime();

let days, hours, minutes, seconds;

window.addEventListener('load', () => {
  dates();

  formCd.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = { name: inputName.value, email: inputEmail.value };
    let cadastro = null;

    if (localStorage.hasOwnProperty('cadastro')) {
      cadastro = JSON.parse(localStorage.getItem('cadastro'));
    } else {
      cadastro = [];
    }

    cadastro.push(user);
    localStorage.setItem('cadastro', JSON.stringify(cadastro));
    alert('E-mail cadastrado com sucesso!!!');
    inputName.value = '';
    inputEmail.value = '';
  });

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
});

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
