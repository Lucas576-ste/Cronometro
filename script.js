let cron;
let segundos = 0;
let minutos = 0;
let horas = 0;
let rodando = false;
let cronometro = document.getElementById("cronometro");

function formatarTempo(h, m, s) {
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  return h + ":" + m + ":" + s;
}

function start() {
  if (!rodando) {
    rodando = true;
    cron = setInterval(function () {
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
      }
      if (minutos === 60) {
        minutos = 0;
        horas++;
      }
      cronometro.innerHTML = formatarTempo(horas, minutos, segundos);
    }, 1000);
  }
}

function pause() {
  clearInterval(cron);
  rodando = false;
}

function reset() {
  clearInterval(cron);
  rodando = false;
  segundos = 0;
  minutos = 0;
  horas = 0;
  cronometro.innerHTML = "00:00:00";
}
