//basic card Constructor
function BasicCard (front, back){
    this.front = front;
    this.back = back;
}

//display contents prototype
BasicCard.prototype.showFrontBack = function(){
        console.log("FRONT: " + this.front);
        console.log("BACK: " + this.back);
}

//export to main.js
module.exports = BasicCard;