const hours = document.getElementById('hours')
const minutes = document.getElementById('mins')
const seconds = document.getElementById('sec')

const watch = setInterval(function time() {
    let dateTodoy = new Date();
    let hr = dateTodoy.getHours();
    let min = dateTodoy.getMinutes(); 
    let sec = dateTodoy.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;

})


function clic() {
    window.open('https://github.com/07Rafael08/')
}
