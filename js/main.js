
// =========Handle Click buttons============


// let startButton = document.getElementById('button-start')
// startButton.addEventListener('click', start)

// let stopButton = document.getElementById('button-stop')
// stopButton.addEventListener('click', stop)

// let resetButton = document.getElementById('button-reset')
// resetButton.addEventListener('click', reset)

//Write the start-stop-reset operation with functions.
const operationBtn = (id, operation) => {
    let btn = document.getElementById(id)
        btn.addEventListener('click', operation)
};

let startButton = operationBtn('button-start', start),
    stopButton = operationBtn('button-stop', stop),
    resetButton = operationBtn('button-reset', reset);



let interval;
let tens = 00;
let seconds = 00;
let minutes = 00;

let appendTens = document.getElementById('tens')
let appendSeconds = document.getElementById('seconds')
let appendMinutes = document.getElementById('minutes')

    
//Handle stopwatch start
function start(){
    clearInterval(interval);
    interval = setInterval(startTimer, 10)
}

//Callback for start function
function startTimer(){
    tens++
    if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      }

    if (tens > 99) {
        //console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
        appendSeconds.innerHTML = seconds;
    }

    if (seconds >= 60) {
        //console.log("seconds");
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }
}
//Handles stopwatch pause/stop
function stop(){ 
    clearInterval(interval)
}

//Handles reset stopwatch
function reset(){
    clearInterval(interval)
    tens = "00";
  	seconds = "00";
  	minutes = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
    appendMinutes.innerHTML = minutes;
}

