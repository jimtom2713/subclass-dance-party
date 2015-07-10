var Dancer = function(top, left, timeBetweenSteps){
  this.styleSettings = {}; 
  this.styleSettings.top = top;
  this.styleSettings.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class = "dancer"></span>');
  this.setPosition(top, left);
  this.step();

};

Dancer.prototype.step = function(){
  var that = this;
  setTimeout(function(){that.step();}, that.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  this.styleSettings.top = top;
  this.styleSettings.left = left;
  this.$node.css(this.styleSettings);
};

Dancer.prototype.lineUp = function(height, width){
  this.setPosition(height, width);
};




