//cloze card Constructor
function ClozeCard (text, cloze){
    this.cloze = cloze;
    this.full = text;
    this.partial = text.replace(cloze, " ... ");
}

//display contents prototype
ClozeCard.prototype.showCard = function(){
        console.log("PARTIAL  : " + this.partial);
        console.log("CLOZE    : " + this.cloze);
        console.log("FULL TEXT: " + this.full);
}

//export to main.js
module.exports = ClozeCard;