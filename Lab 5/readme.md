# Biblioteka jQuery

## Zadania

__Zadanie 1__

Stwórz prosty dokument HTML. Dodaj do niego przycisk oraz element `<div>`. Pod przycisk podepnij event, gdzie po jego kliknięciu wywoła się funkcja `fadeToggle()` trwająca 3 sekundy.

__Zadanie 2__

Przeanalizuj przykład spod [tego adresu](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_down) i wykorzystaj ten kod modyfikując go tak, żeby po ponownym kliknięciu elementu wsuwał się ponownie do góry i ukrywał.

__Zadanie 3__

Zmodyfikuj kod z zadania 2 tak, żeby podzielić górny panel na 3 klikalne części (coś jak menu poziome) oraz 3 panele, które się wysuwają poniżej. Ważne jest również, aby pozostałe panele się chowały.

* funkcja `each()`
* funkcja `index()`
* selektory CSS do pobierania wszystkich elementów potomnych/potomnych danej klasy, sprawdź [tu](http://www.kurshtml.edu.pl/css/selektory.html)

__Zadanie 4__

Przypomnij sobie zadanie z laboratorium 4, w którym należało przygotować słupek wykresu, który miał się "animować" określoną ilość sekund (od 1 do 10). Wykonaj teraz to zadania korzystając z jQuery - również input typu number z wartościami 1-10 do zmiany czasu trwania animacji.

Podpowiedzi:
* funkcja `animate()`

__Zadanie 5__

Stwórz element `<textarea>`, przycisk oraz element `<div>`. Po kliknięciu przycisku wstawiaj zawartość `<textarea>` do elementu `<div>`. To może być również HTML.

Podpowiedzi:
* funkcja `val()`


__Zadanie 6__

Do poprzedniego zadania dodaj kod, który będzie umożliwiał wpisanie maksymalnie 200 znaków w polu `<textarea>`. Wyświetlaj też ilość znaków jaka została jeszcze do wpisania.

Podpowiedzi:
* funkcja `text()`
* funkcja `val()`

__Zadanie 7__

Dodaj kontener 500x500 px, w którym umieść 3 elementy `<div>` o rozmiarach 100x100 px, które domyślnie znajdują się w kolumnie wyrównane do lewej strony kontenera. Dodaj przycisk, po kliknięciu którego kwadraty po kolei przesuną się płynnie do prawej krawędzi kontenera jeden po drugim, ale nie jednocześnie. Ponowne kliknięcie przesuwa je do lewej krawędzi itd.

Podpowiedzi:
* funkcja `delay()`
* `$(selektor).each(function() {});`
* funkcja `animate()`

__Zadanie 8__

Wykorzystaj kontener z elementami z zadania 7 i dodaj następującą funkcjonalność:
* po najechaniu na którykolwiek box w kontenerze pojawia się dodatkowy element (mogą to być strzałki góra/dół, napis lub cos innego), którego kliknięcie przeniesie element o jedną pozycję wyżej lub niżej.

Podpowiedzi:
* `$(selektor).prev();`
* `$(selektor).next();`
* funkcja `insertAfter()`
* funkcja `insertBefore()`



__Zadanie 9__

Stwórz dokument HTML a w nim:
* pole tekstowe
* element blokowy ala baner, w którym będzie pojawiał się tekst wpisywany w polu tekstowym (po wpisaniu każdego kolejnego znaku)
* przycisk, po kliknięciu którego uruchomi się animacja banera polegająca na tym, że napis się powiększa i zmienia swoją przezroczystość do 100%, 
* po zakończeniu animacji, tekst pola jest kasowany i baner przywracany do stanu początkowego (czyli bez tekstu).

Podpwowiedzi:
* `$(selektor).keyup()`
* `animate()`
* funkcja `fadeOut()` + callback (czyli funkcja wywoływana po zakończeniu animacji/efektu)

__zadanie 10 *__

Wykonaj ćwiczenia z [tego adresu](https://www.w3schools.com/jquery/jquery_exercises.asp) i sprawdź swoją wiedzę w Quzie [tu](https://www.w3schools.com/jquery/jquery_quiz.asp).

\* tych rozwiązań nie trzeba już umieszczać w swoim repozytorium