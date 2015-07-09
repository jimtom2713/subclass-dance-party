var SquareDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.styleSettings['border-radius'] = 0;
  this.setPosition(top, left);
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;
SquareDancer.prototype.step = function(){
  // debugger;
  Dancer.prototype.step.apply(this);
  // this.$node.toggle();
  
}





