var LeelaDancer = function(top, left, timeBetweenSteps){
  var timeBetweenSteps = 10;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class = "dancer"><img src="lib/img/leela.png"></span>');
  this.setPosition(top, left);

};

LeelaDancer.prototype = Object.create(Dancer.prototype);
LeelaDancer.prototype.constructor = LeelaDancer;
LeelaDancer.prototype.step = function(){
  // debugger;
  Dancer.prototype.step.apply(this);
  for(var i = 0; i < window.dancers.length; i++){
    if(dancers[i].constructor === FryDancer){
      var fryTop = dancers[i].styleSettings.top;
      var fryLeft = dancers[i].styleSettings.left;
      var fryTime = dancers[i].timeBetweenSteps;
      if( Math.sqrt(Math.pow(fryLeft - this.styleSettings.left, 2) + Math.pow(fryTop - this.styleSettings.top, 2)) < 50 ){
        this.$node.remove();
        dancers[i].$node.remove();
        this.step = dancers[i].step;
        dancers.splice(i, 1);
        this.$node = $('<span class = "dancer"><img src="lib/img/FrayAndLeela.png"></span>');
        this.setPosition(fryTop, fryLeft - 75);
        $('body').append(this.$node);
        // this.setPosition(fryTop, fryLeft-30)
        // this.step = dancers[i].step;
        // this.timeBetweenSteps = dancers[i].timeBetweenSteps;
      }
    }
  }
}