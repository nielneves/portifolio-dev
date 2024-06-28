const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

setInterval(()=> {

    const dateToday = new Date();

    let hr = dateToday.getHours();
    let mn = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (sec < 10) sec = "0" + sec;
    if (hr < 10) hr = "0" + hr;
    if (mn < 10) mn = "0" + mn;

    horas.innerHTML = hr;
    minutos.textContent = mn;  
    segundos.innerText = sec;
    
},1);