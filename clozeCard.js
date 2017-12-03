//cloze card Constructor
function ClozeCard (front, back){
    this.front = front;
    this.back = back;
}

//display contents prototype
ClozeCard.prototype.showFrontBack = function(){
        console.log("FRONT: " + this.front);
        console.log("BACK: " + this.back);
}

//export to main.js
module.exports = ClozeCard;