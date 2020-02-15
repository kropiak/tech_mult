// inicjalizacja potrzebnych zmiennych
const plotno = document.getElementById("plotno");
const ctx = plotno.getContext("2d");
const kwadrat = { a:20, x:10, y:10 };
const pause_button = document.querySelector("#pause_button");
let isRunning = false;

// dodajemy obsługę zdarzenia dla przycisku
document.addEventListener("DOMContentLoaded", function() {
    
    pause_button.addEventListener("click", (event) =>{
        isRunning = !isRunning;
        event.target.innerHTML = (isRunning) ? "Stop" : "Start";
        (isRunning) ? start() : stop();
        // console.log(event.target);
        // console.log(isRunning);
        // console.log(pause_button.innerHTML);
    });
});

// funkcja uruchamiająca animację
function start(){
    isRunning = true;
    update();
}

// aby zatrzymać animację
function stop(){
    isRunning = false;
}

// dla ułatwienia obsługi wielu animacji stworzymy funkcję, w której będzie umieszczany kod
// generujacy kolejne klatki animacji
function update(){
    if(isRunning){
        rysuj_kwadrat();
        // inne funkcje zmieniające stan klatki do wyrysowania
        requestAnimationFrame(update);
    }
}

// funkcja rysująca kwadrat
const rysuj_kwadrat = function() {

    // obliczenia
    kwadrat.x+=1;

    // czyścimy płótno
    ctx.clearRect(0, 0, plotno.width, plotno.height);

    // rysujemy 
    ctx.fillStyle = '#000';
    ctx.fillRect(kwadrat.x, kwadrat.y, kwadrat.a, kwadrat.a);
}