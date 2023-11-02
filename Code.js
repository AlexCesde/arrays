// Step 1 - array definition
let books = [{ key: 1, topic: "health", name: "100 secrets for a new life" }]

// Step 2 - Extra functionality to print all items
function PrintAll() {
    books.forEach(SingleItem);
}

// Step 3 - Callback functionality
function SingleItem(value, index, arrayCopy) {
    console.log(`key: ${index} value: ${value.topic}-${value.name} array size: ${arrayCopy.length}`);
}

// Step 4- find element by unique key
function PrintByKey(key) {
    console.log(`value: ${books.find(({ key }) => key === key).name}`);
}

// Step 5- Test trigger
PrintAll();

// Step 6- find element by unique key
PrintByKey(0);