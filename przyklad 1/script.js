// inicjalizacja potrzebnych zmiennych
const plotno = document.getElementById("plotno");
const ctx = plotno.getContext("2d");
const kwadrat = { a:20, x:10, y:10 };


const rysuj = function() {

    // obliczenia
    kwadrat.x+=1;

    // czyścimy płótno
    ctx.clearRect(0, 0, plotno.width, plotno.height);

    // rysujemy 
    ctx.fillStyle = '#000';
    ctx.fillRect(kwadrat.x, kwadrat.y, kwadrat.a, kwadrat.a);

    requestAnimationFrame(rysuj);
}

// rejestrowanie funkcji do animacji
requestAnimationFrame(rysuj);