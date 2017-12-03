function BasicCard (front, back){
    this.front = front;
    this.back = back;
}

BasicCard.prototype.showFrontBack = function(){
        console.log("FRONT: " + this.front);
        console.log("BACK: " + this.back);
}

module.exports = BasicCard;