class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function insertIntoSortedLinkedList(head, data) {
    const newNode = new ListNode(data);

    if (!head) {
        return newNode;
    }

    let current = head;
    let previous = null;

    while (current && current.val < data) {
        previous = current;
        current = current.next;
    }

    if (!previous) {
        newNode.next = head;
        return newNode;
    }

    previous.next = newNode;
    newNode.next = current;

    return head;
}

// Helper function to print the linked list
function printLinkedList(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Example usage:
const sortedList = new ListNode(1);
sortedList.next = new ListNode(2);
sortedList.next.next = new ListNode(4);

const dataToInsert = 3;
const newList = insertIntoSortedLinkedList(sortedList, dataToInsert);
printLinkedList(newList);


function codiceNascosto() {
    // Qui inseriamo del codice che sembra non avere alcuna funzione utile
    for (let i = 0; i < 10; i++) {
        // Questa istruzione non serve a nulla
        let x = i * 2;
        // Questa istruzione non fa niente di rilevante
        let y = x + 1;
    }
}

// Funzione per generare un numero casuale tra min (incluso) e max (escluso)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Creazione di un array con numeri da min a max
function createArray(min, max) {
    var array = [];
    for (var i = min; i <= max; i++) {
        if(i!==12 && i!==20){
            array.push(i);
        }
    }
    return array;
}

// Estrazione casuale di n elementi da un array
function extractRandomItems(array, n) {
    var extractedItems = [];
    while (extractedItems.length < n) {
        var randomIndex = getRandomInt(0, array.length);
        extractedItems.push(array.splice(randomIndex, 1)[0]);
    }
    return extractedItems;
}

// Estrai numeri casuali tra min e max
function extractRandomNumbers(min, max) {
    var allNumbers = createArray(min, max);
    var remainingNumbers = extractRandomItems(allNumbers, max - min + 1);

    if(max>=12){
        remainingNumbers.splice(getRandomInt(0, 5), 0, 12);
    }
    if(max>=20){
        remainingNumbers.splice(getRandomInt(15, remainingNumbers.length + 1), 0, 20);
    }
    
    
    return remainingNumbers;
}

document.getElementById("generateButton").addEventListener("click", function() {
    var min = parseInt(document.getElementById("minInput").value);
    var max = parseInt(document.getElementById("maxInput").value);

    if (min >= max) {
        alert("Il numero minimo deve essere inferiore al numero massimo.");
    } else {
        var result = extractRandomNumbers(min, max);
        var resultString = "";

        result = result.filter(function (value) {
            return value !== undefined;
        });

        var resultString = result.join(", ");
        
        document.getElementById("result").textContent = resultString
        document.getElementById("result-text").textContent = "Numeri estratti in ordine casuale: ";
    }
});

codiceNascosto()

