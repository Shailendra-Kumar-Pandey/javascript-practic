let minte = 00;
let second = 00;
let milisec = 00;
let timerId = null;
const timer = document.querySelector('.timer');

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

start.addEventListener('click', function(){
    if(timerId != null){
        clearInterval(timerId);
    }
    timerId = setInterval(clock, 10);
});
stop.addEventListener('click', function(){
    clearInterval(timerId);
})
reset.addEventListener('click', function(){
    clearInterval(timerId);
    timer.innerHTML = "00 : 00 : 00";
    minte = second = milisec = 00;
})

function clock(){
    milisec++
    if(milisec == 100){
        milisec = 0;
        second++;
        if(second == 60){
            second = 0;
            minte++;
        }
    }
        let  milisec1 =  (milisec<10) ? `0${milisec}`:milisec;
        let second1 = (second<10) ? `0${second}`:second;
        let minte1 = (minte<10) ? "0"+minte:minte;

    timer.innerHTML = `${minte1} : ${second1} : ${milisec1}`;
}