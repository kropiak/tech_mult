# 1. Wprowadzenie

## 1.1 Zdarzenia w drzewie DOM (Document Object Model)

Aby można było dodać jakieś zdarzenie do wybranego elementu dokumentu HTML trzeba najpier ten element wskazać. Aby tego dokonać można posłużyć się wybranymi funckjami wyszukującymi i zwracającymi pojedyncze pasujace elementy lub kolekcje takich elementów. Tutaj skoncentrujemy się na zdarzeniach, więc odsyłam do [kursu js](https://kursjs.pl/kurs/dom/dom.php) w celu zapoznania (przypomnienia) dostępnych metod selekcji elementów. Zanim przejdziemy do eventów warto wiedzieć, że powinniśmy operować na drzewie DOM w momencie kiedy mamy pewność, że jest już załadowane w całości, dlatego kod należy uruchamiać dopiero po wystąpieniu poniższego eventu:
```javascript
    document.addEventListener("DOMContentLoaded", function() {

    // dopiero tutaj umieszczamy kod operujący na naszym drzewie DOM

    });
```

Lista zdefiniowanych zdarzeń (eventów) jest dość długa. Przed odwiedzeniem poniższego linku spóbuj wyliczyć jakie eventy znasz lub możesz sobie wyobrazić dla stron obsługiwanych przez przeglądarki internetowe.
Teraz porównaj swoją listę z [tą listą](https://developer.mozilla.org/en-US/docs/Web/Events).

Przeczytaj część kursu rozpoczynając od [rejestrowania zdarzeń](https://kursjs.pl/kurs/events/events.php#inline) aż do sekcji "Wkraczamy w głąb zdarzenia". Następnie wykonaj poniższe ćwiczenia.

## 1.2 Ćwiczenia 1

**Zadanie 1**

Stwórz dokument HTML i dodaj do niego 3 elementy div i ustaw im dowolne kolory tła. Następnie dla każdego elementu zarejestruj zdarzenie kliknięcia myszy i wewnątrz tego elementu wyświetlaj liczbę kliknięć danego div-a.

**Zadanie 2**

Stwórz element ```<select>``` z 3 opcjami: przycisk 1, przycisk 2 i przycisk 3. Dodaj zdarzenie, które po wybraniu opcji wyzeruje licznik danego przycisku.

**Zadanie 3**

Dodaj do dokumentu element ```<canvas>``` i dodaj zdarzenie, które będzie monitorowało pozycję kursora myszy na płótnie i wyświetlało ją na stronie w dowolnym miejscu w formacie (x,y). Jeżeli kursor myszy znajdzie się poza płótnem, wyświetlaj w tym samym miejscu tekst "Kursor poza płótnem".

**Zadanie 4**

Na wcześniej utworzonym elemencie ```<canvas>``` zdefiniuj nowy kształt - to może być wczytana grafika, koło czy kwadrat. Dodaj obsługę zdarzeń, które umożliwią przesuwanie tego kształtu po płótnie za pomocą klawiszy strzałek. Kody klawiszy możesz sprawdzić np. [tu](https://keycode.info/).


## 2. Animacje

Animacja polega na przygotowaniu grafiki klatki do wyświetlenia poprzez funkcje rysujące, obsługę zdarzeń, które mają wpływ na położenie kształtów, symulację zjawisk fizycznych a następnie zastąpieniu całej zawartości płótna nową zawartością. W zależności od złożoności tych obliczeń, ilości elementów i wydajności komputera szybkość generowania nowych klatek może być różna. Z racji tego, że Internet i przeglądarki internetowe stały się tak powszechne to i sposób korzystania z nich ewoluował i mamy dzisiaj wsparcie kart graficznych w celu wydajnego renderowania grafiki 3D. Ten temat wykracza jednak poza ramy przedmiotu.

Tak jak przygotowujemy zbiór instrukcji, aby wyświetlić coś na płótnie tak musimy to zrobić w przypadku animacji. Całość powinna mieć jeden punkt wejścia, czyli funkcję, która będzie uruchamiana dla każdej klatki animacji. Następnie musimy wykorzystać jedną dostępnych funkcji, które wywołują tę metodę określoną ilość razy na sekundę.
W niektórych przypadkach możemy mieć wpływ na szybkość generowania klatek (FPS), a w niektórych możemy zdać się domyślne wartości, np. szybkość równą szybkości odświeżania ekranu, co ma sens.

Mamy do dyspozycji 3 możliwości uruchomienia mechanizmu animacji.
1. Metoda setInterval() ustawia odstęp czasu z jakim metoda ma być ponownie wywoływana:
```javascript
const rysuj = function() {
    // obliczenia zmieniające stan (np. położenie, kształt, kolor) oiektów na płótnie
    // czyścimy płótno
    // rysujemy elementy
}

setInterval(rysuj, 1000/60);
```

Jeżeli chcemy wyłączyć mechanizm animacji możemy użyć funkcji ```clearInterval()```, ale musimy ```setInterval()``` zadeklarować inaczej.
```javascript
const idInterwalu = window.setInterval(rysuj, 1000/60);
clearInterval(idInterwalu);
```

2. Metoda ```setTimeout()``` działa podobnie jednak z taką różnicą, że wywołuje metodę tylko raz. Możemy jednak to obejść używając rekurencji:

```javascript
const rysuj = function() {
    // obliczenia zmieniające stan (np. położenie, kształt, kolor) oiektów na płótnie
    // czyścimy płótno
    // rysujemy elementy

    setTimeout(rysuj, 1000/60);
}

setTimeout(rysuj, 1000/60);
```
Te metody jednak nie gwarantują takiego FPS jak zakładany i moga pojawić się problemy z płynnością animacji.

3. Metoda ```requestAnimationFrame()``` jest zalecanym sposobem na obsługe mechanizmu animacji, ale ma jedną wadę - nie możemy jawnie wskazać jaki ma być zakładany FPS. Jednak jeżeli chodzi o ten aspekt, to nie musimy się tym martwić dopóki nie chcemy zmniejszać szybkości generowanych klatek przez przeglądarkę.
```javascript
const rysuj = function() {
    // obliczenia zmieniające stan (np. położenie, kształt, kolor) oiektów na płótnie
    // czyścimy płótno
    // rysujemy elementy

    requestAnimationFrame(rysuj);
}

requestAnimationFrame(rysuj);
```

Warto tu zaznaczyć, że wywołanie ```requestAnimationFrame()``` wewnątrz klasy odbywa się w inny sposób:
```javascript
requestAnimationFrame(this.rysuj.bind(this));
```
Tutaj również możemy zatrzymać ten mechanizm:
```javascript
let requestId = requestAnimationFrame(rysuj);
cancelAnimationFrame(requestId)
```

Przykładowa kolejność operacji przy bardzo prostej animacji:

```javascript
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
```
Przykład jak zmniejszyć frame rate przy wykorzystaniu requestAnimationFrame() wraz z innymi przykładami można znaleźć [tu](https://kursjs.pl/kurs/canvas/canvas-animacja.php).

**Animacja poklatkowa**

Animacja poklatkowa polega na wyświetlaniu kolejnych klatek animacji pobierając obrazy lub ich fragmenty. Ze względu na pewne właściwości wydajnościowe (wczytanie jednego większego pliku odbywa się szybciej niż wczytanie kilku mniejszych plików z pociętego pliku źródłowego), które przyczyniły się do popularności tej techniki. Grafikę, która jest w ten sposób przygotowana, a nie generowana w czasie rzeczywistym , nazywa się sprite'ami. W Internecie można znaleźć bardzo bogate źródła takich materiałów. 
Kolejne klatki animacji są fragmentami źródłowego pliku, wyświetlanymi w określonej sekwencji. Jest to technika, która ma głównie zastosowanie w grach 2D. Dobrze zaprojektowany przykład znajdziemy [tu](https://kursjs.pl/kurs/canvas/canvas-animacja.php#animacja) albo [tu](https://medium.com/dailyjs/how-to-build-a-simple-sprite-animation-in-javascript-b764644244aa).
W kursie można znaleźć linki do źródeł grafiki, ale można też posłużyć się [tym źródłem](https://blog.furas.pl/darmowa-grafika-i-sprity-do-gier.html).


## 2.1 Ćwiczenia

**Zadanie 1**

Zmodyfikuj kod z powyższego przykładu tak, żeby kwadrat rozpoczynał swój ruch od lewego górnego narożnika płótna i poruszał się wzdłóż krawędzi płótna czyli po dotarciu do prawej krawędzie podąża w dół, później w lewo i na końcu do góry.

**Zadanie 2**

Dodaj kontrolki do rozwiązania z zadania 1, które pozwolą na uruchomienie animacji (powinna być domyślnie zatrzymana) oraz wstrzymania i ponownego uruchomienia animacji.

**Zadanie 3**

Stwórz animację (nowy dokument, może być na bazie przykładu z wprowadzenia), która będzie zwiększała wysokość prostokąta (który ma symulować słupek wykresu) przez czas (sekundy) z kontrolki ```<input>``` typu number z wartościami z zakresu [1, 10]. Po wciśnięciu przycisku "Start" rozpoczyna się animacja i zapełnia prostokąt do jego finalnego rozmiaru przez określony wcześniej czas.

**Zadanie 4**

Zmodyfikuj zadanie 4 tak, aby możliwe było określenie ile ma być tych słupków oraz jaką wysokośc ma mieć każdy z nich. Teraz mają "rosnąć" wszystkie jednocześnie, kżdy do swojego rozmiaru końcowego.

**Zadanie 5**

Dodanie dowolnej animacji poklatkowej bazującej na przykładzie z [kursu js](https://kursjs.pl/kurs/canvas/canvas-animacja.php).

**Zadanie 6**

Stwórz animację przesuwającego się nieskończonego tła, która polega na wykorzystaniu dwóch kopii tej samej grafiki i po jej "zjechaniu" z widocznego obszaru płótna ponownie ustawiana jest tuż za przesuwającym się właśnie fragmentem.

