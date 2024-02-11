// Funktion zum Addieren von Zahlen
function addNumbers() {
    // Eingabefeld-Werte abrufen
    const inputValue1 = document.getElementById('inputField1').value;
    const inputValue2 = document.getElementById('inputField2').value;

    // Überprüfen, ob die Eingaben Zahlen sind
    if (!isNaN(inputValue1) && !isNaN(inputValue2)) {
        // Eingaben zu Zahlen konvertieren und addieren
        const result = parseFloat(inputValue1) + parseFloat(inputValue2);

        // Ergebnis im Ausgabefeld anzeigen
        document.getElementById('outputField').innerText = `Ergebnis: ${result}`;
    } else {
        // Fehlermeldung anzeigen, wenn die Eingabe keine Zahlen sind
        document.getElementById('outputField').innerText = 'Ungültige Eingabe. Bitte geben Sie Zahlen ein.';
    }
}