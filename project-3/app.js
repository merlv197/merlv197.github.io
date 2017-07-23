$(document).ready(function(){
  var colors = ["#3C485E","#CE7082","#F3BFA9","#FEDCCC","#EED974","#178E96","#008FD3","#EE8565","#BFB5D7","F3C9DD","#61BFAD"];                
  var rand = Math.floor(Math.random()*colors.length);           
  $('#controls-wrapper').css("background-color", colors[rand]);
  $('body').css("background-color", colors[rand]);
});

