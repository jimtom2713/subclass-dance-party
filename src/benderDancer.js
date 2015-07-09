var BenderDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.styleSettings['border-radius'] = 0;
  this.$node = $('<span class = "dancer"><img src="lib/img/Bender.png"></span>')
  this.setPosition(top, left);
  this.direction = 'up';
  this.squareSize = 100;
  this.initialTop = top;
  this.initialLeft = left;
  this.timeBetweenSteps = 10;
};

BenderDancer.prototype = Object.create(Dancer.prototype);
BenderDancer.prototype.constructor = BenderDancer;
BenderDancer.prototype.step = function(){
  // debugger;
  Dancer.prototype.step.apply(this);
  if(this.direction === 'up'){
    this.setPosition(this.styleSettings.top-1, this.styleSettings.left);
    if(Math.abs(this.styleSettings.top - this.initialTop) >= this.squareSize){
      this.direction = 'right';
    }
  }  
  if(this.direction === 'right'){
    this.setPosition(this.styleSettings.top, this.styleSettings.left + 1);
    if(Math.abs(this.styleSettings.left - this.initialLeft) >= this.squareSize){
      this.direction = 'down';
    }
  }  
  if(this.direction === 'down'){
    this.setPosition(this.styleSettings.top+1, this.styleSettings.left);
    if(Math.abs(this.styleSettings.top - this.initialTop) >= this.squareSize){
      this.direction = 'left';
    }
  }  
  if(this.direction === 'left'){
    this.setPosition(this.styleSettings.top, this.styleSettings.left-1);
    if(Math.abs(this.styleSettings.left - this.initialLeft) >= this.squareSize){
      this.direction = 'up';
    }
  }
}

BenderDancer.prototype.lineUp = function(height, width){
  Dancer.prototype.lineUp.apply(this, arguments);
  this.initialTop = height;
  this.initialLeft = width;
}
