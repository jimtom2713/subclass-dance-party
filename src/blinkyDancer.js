var BlinkyDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class = "dancer"><img src="lib/img/leela.png"></span>');
  this.setPosition(top, left);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){
  // debugger;
  Dancer.prototype.step.apply(this);
  this.$node.toggle();
  for(var i = 0; i < window.dancers.length; i++){
    if(dancers[i] instanceof 'FryDancer'){
      var fryTop = dancers[i].styleSettings.top;
      var fryLeft = dancers[i].styleSettings.left;
      if( Math.sqrt(Math.pow(fryLeft - this.styleSettings.left, 2) + Math.pow(fryTop - this.styleSettings.left, 2)) < 50 ){
        this.setPosition(fryTop, fryLeft);
      }
    }
  }
}