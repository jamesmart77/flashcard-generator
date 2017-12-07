//import constructor files
var basicCardObj = require("./basicCard.js");
var clozeCardObj = require("./clozeCard.js");

//just file system library
var fs = require("fs");

//try for error catching
try {
    //flag setting
    var isBasic = true;

    //determine user entry
    if (process.argv[2].toLowerCase() === "basic") {
        var textFile = "basic.txt";
    } else if (process.argv[2].toLowerCase() === "cloze") {
        var textFile = "clozeFlashCard.txt";
        isBasic = false;
    } else {
        console.log("ERROR: Please type either 'Basic' or 'Cloze' after 'node main.js'....")
        return
    }

    //invoke readFile function
    //flashcard.txt in same directory
    //utf8 decoding
    fs.readFile(textFile, "utf8", function (error, data) {
        if (error) throw error

        //assign values frm .txt file to array variable
        var dataArr = data.split(";");

        //for each index in array split between question and answer
        //user Constructor to build flashcard objects
        dataArr.forEach(element => {

            //split flashcard string by question/answer
            let flashcardArr = element.split(",");

            console.log("FLASHCARD\n=========================================");

            //instantiating appropriate object based on user entry
            if (isBasic) {
                var basicCard = new basicCardObj(flashcardArr[0], flashcardArr[1].trim());
                basicCard.showFrontBack();//print flashcard
            } else {
                var clozeCard = new clozeCardObj(flashcardArr[0], flashcardArr[1].trim());
                clozeCard.showCard();//print flashcard
            }

            console.log("=========================================\n");
        });
    })
    //catch all error 
} catch (err) {
    console.log("Looks like something went wrong.\nMake sure you type 'Basic' or 'Cloze' after 'node main.js'...\nCheck if 'flashcard.txt' is named properly and is in the correct directory.")
}