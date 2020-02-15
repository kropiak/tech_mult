// inicjalizacja potrzebnych zmiennych
const plotno = document.getElementById("plotno");
const ctx = plotno.getContext("2d");
const rerun_button = document.querySelector("#rerun_button");
let bars = [];
let data = [
    {key: 'Adam', value: 280},
    {key: 'Zbyszek', value: 192},
    {key: 'Alan', value: 350}
]
let isRunning = false;

// dodajemy obsługę zdarzenia dla przycisku
document.addEventListener("DOMContentLoaded", function() {
    
    rerun_button.addEventListener("click", (event) =>{
        start();
    });
});

function start(){
    isRunning = true;
    // dodajemy nowy słupek
    // trzeba w jakiś sposób określić ich odstępy
    bars = [];
    let spacing = 0;
    data.forEach(element => {
        let bar = new Bar(target_height=element.value, label=element.key)
        bar.x+=spacing;
        bars.push(bar);
        spacing+=70;
    });
    update();
}

function stop(){
    isRunning = false;
}

function update(){
    if(isRunning){
        //czyszczenie płótna
        ctx.clearRect(0, 0, plotno.width, plotno.height);
        // dla każdego słupka
        bars.forEach(bar => {
            bar.draw(ctx);
        });
        // inne funkcje zmieniające stan klatki do wyrysowania
        // można też sprawdzic czy wszystkie są już narysowane
        // tutaj można by wykorzystać wzorzec obserwator
        requestAnimationFrame(update);
    }
}

// klasy na potrzeby rozwiązania
// takie rozwiązanie spowoduje możliwość ponownego wykorzystania kodu i hermetyzacji części funkcji

class Bar {
    constructor(target_height=200, label='bar 1', width=50, color='#445599'){
        this.x = 10;
        // tutaj powinno byc bardziej uniwersalne rozwiązanie, np. klasa wykres z parametrami swojego położenia
        this.y = plotno.height-10;
        this.dx = 3;
        this.color = color;
        this.height = 0;
        this.width = width;
        this.isDrawn = false;
        this.label = label;
        this.target_height = target_height;
    }

    // rysowanie słupka i etykiety
    draw(ctx){
        
        // kod rysujący
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, -this.height);
        ctx.fillStyle = '#000';
        ctx.font = "20px Georgia";
        ctx.fillText(this.label,this.x, this.y-this.height-5);
        this._update();
    }

    // metoda aktualizująca parametry słupka
    // wersja ES2019 wprowadziła prywatne pola i metody klasy. Należy wtedy rozpoczać nazwę od znaku #
    // np. #update
    // jeżeli nie ma możliwości użyć tej wersji możemy skorzystać z konwencji, w której aby wskazać 
    // prywatne składowe klasy rozpoczynamy nazwy od _
    _update(){
        // jeżeli jesteśmy już blisko docelowej wysokości - zwalniamy szybkość rysowania słupka
        if((this.height / this.target_height > 0.8) && this.dx > 1){
            this.dx--;
        }
        if(this.height < this.target_height){
            this.height+=this.dx;
        }
        // narysowany
        else{
            this.isDrawn = true;
        }
    }
}