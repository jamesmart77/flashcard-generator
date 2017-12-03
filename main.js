var basicCardObj = require("./basicCard.js");

var flashcardType = process.argv[2];

try {
    if (flashcardType.toLowerCase() === "basic") {
        var basic1 = new basicCardObj("The first president of the United States.", "George Washington");
        var basic2 = new basicCardObj("What is the deficiency for thaimine?", "Beri Beri");
        var basic3 = new basicCardObj("What is the main mineral in bananas?", "Potassium");
        var basic4 = new basicCardObj("What is the deficiency in Vitamin A?", "Night Blindness");
        var basic5 = new basicCardObj("What is Starbuck's favorite city?", "Ft. Latte Dale");

        console.log("FLASHCARD 1 =============================");
        basic1.showFrontBack();
        console.log("=========================================");

        console.log("FLASHCARD 2 =============================");
        basic2.showFrontBack();
        console.log("=========================================");

        console.log("FLASHCARD 3 =============================");
        basic3.showFrontBack();
        console.log("=========================================");

        console.log("FLASHCARD 4 =============================");
        basic4.showFrontBack();
        console.log("=========================================");

        console.log("FLASHCARD 5 =============================");
        basic5.showFrontBack();
        console.log("=========================================");
    } else if (process.argv[2].toLowercase() === "cloze") {

    } else {
        console.log("ERROR: Please type either 'Basic' or 'Cloze' after 'node main.js'....")
    }
} catch (err) {
    console.log("Looks like something went wrong. Make sure you type 'Basic' or 'Cloze' after 'node main.js'...")
}