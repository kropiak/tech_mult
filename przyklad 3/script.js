// inicjalizacja potrzebnych zmiennych
const plotno = document.getElementById("plotno");
const ctx = plotno.getContext("2d");
const rerun_button = document.querySelector("#rerun_button");
const click_pos_box = document.querySelector("#click_pos");
let isRunning = false;
const background_img = new Image();
const pionek = new Image();


// dodajemy eventy
document.addEventListener("DOMContentLoaded", function() {
    
    plotno.addEventListener("click", printMousePos);
});

// inicjalizacja
function init(){
    background_img.src = 'plansza_1.png';
    pionek.src = 'pionek.png';
    // dopiero jak grafika zostanie załadowana można ją wyrysować
    background_img.onload = function(){
        ctx.drawImage(background_img, 0, 0);
        // pozycja startowa pionka
        ctx.drawImage(pionek, 913, 103);   
    }
}

function update(){
    if(isRunning){
        //czyszczenie płótna
        ctx.clearRect(0, 0, plotno.width, plotno.height);
        
        requestAnimationFrame(update);
    }
}

function printMousePos(event) {
    const rect = plotno.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    click_pos_box.innerHTML =
      "X: " + x +
      " - Y: " + y;
  }
  

init();