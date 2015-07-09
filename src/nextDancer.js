var NextDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.styleSettings['border'] = 0;
  this.$node = $('<span class = "dancer"><img src="https://upload.wikimedia.org/wikipedia/en/1/15/Captain_Zapp_Brannigan.png"></span>')
  this.setPosition(top, left);
};

NextDancer.prototype = Object.create(Dancer.prototype);
NextDancer.prototype.constructor = NextDancer;
NextDancer.prototype.step = function(){
  // debugger;
  Dancer.prototype.step.apply(this);
  // this.$node.toggle();
  
}





