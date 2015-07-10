var FryAndLeelaDancer = function(top, left, timeBetweenSteps){
  // var timeBetweenSteps = 10;
  FryDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class = "dancer"><img src="lib/img/FrayAndLeela.png"></span>');
  this.setPosition(top, left);

};

FryAndLeelaDancer.prototype = Object.create(FryDancer.prototype);
FryAndLeelaDancer.prototype.constructor = FryAndLeelaDancer;