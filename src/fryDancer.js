var FryDancer = function(top, left, timeBetweenSteps){
  var timeBetweenSteps = 10;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class = "dancer"><img src="lib/img/Fry.png"></span>');
  this.setPosition(top, left);
};

FryDancer.prototype = Object.create(Dancer.prototype);
FryDancer.prototype.constructor = FryDancer;
FryDancer.prototype.step = function(){
  // debugger;
  Dancer.prototype.step.apply(this);
  var top = this.styleSettings.top;
  // var left = this.styleSettings.left÷;
  var left = this.styleSettings.left + 3
  if(left > $("body").width()){
    left = 0;
  }
  this.setPosition(top, left)
}