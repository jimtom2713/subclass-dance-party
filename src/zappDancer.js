var ZappDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.styleSettings['border'] = 0;
  this.$node = $('<span class = "dancer"><img src="lib/img/ZappBrannigan.png"></span>')
  this.$node.draggable();
  this.setPosition(top, left);
};

ZappDancer.prototype = Object.create(Dancer.prototype);
ZappDancer.prototype.constructor = ZappDancer;
ZappDancer.prototype.step = function(){
  // debugger;
  Dancer.prototype.step.apply(this);
  // this.$node.toggle();
  

}

