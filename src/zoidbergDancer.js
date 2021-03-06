var ZoidbergDancer = function(top, left, timeBetweenSteps, t){
  timeBetweenSteps = 10;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.styleSettings['border'] = 0;
  this.$node = $('<span class = "dancer"><img src="lib/img/Zoidberg_animated.gif"></span>')
  this.setPosition(top, left);
  this.t = t || 0;
  this.initialTop = top;
  this.initialLeft = left;
  // this.$node.draggable();

};

ZoidbergDancer.prototype = Object.create(Dancer.prototype);
ZoidbergDancer.prototype.constructor = ZoidbergDancer;
ZoidbergDancer.prototype.step = function(){
  // debugger;
  Dancer.prototype.step.apply(this);
  var x = 300 * Math.sin(2 * this.t + Math.PI / 2) + this.initialLeft;
  var y = 100 * Math.sin(4 * this.t) + this.initialTop;
  this.setPosition(y, x);
  this.t += .01;
}

ZoidbergDancer.prototype.lineUp = function(height, width){
  Dancer.prototype.lineUp.apply(this, arguments);
  this.initialTop = height;
  this.initialLeft = width;
}
