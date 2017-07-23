var name = "";


$(window).keypress(function(e) {
  console.log(e.which);
  


  if(e.which == 97) {
    $(".order2").append($(".letter-wrapper_a").clone().removeClass("letter-wrapper_a"));
    name = name + '<div class="letter-wrapper_a"><div class="letter_a"><div class="bar horizontal_a mid_a dark"></div><div class="bar vertical_a clear"></div><div class="bar vertical_a right_a clear"></div></div></div>';
  }
  if(e.which == 98) {
    $(".order2").append($(".letter-wrapper_b").clone().removeClass("letter-wrapper_b"));
    name = name + '<div class="letter-wrapper_b"><div class="letter_b"><div class="bar vertical_b dark"></div><div class="circle_b clear"></div></div></div>';
  }
  if(e.which == 99) {
    $(".order2").append($(".letter-wrapper_c").clone().removeClass("letter-wrapper_c"));
    name = name + '<div class= "letter-wrapper_c"><div class="letter_c"><div class="bar horizontal_c top clear"></div><div class="bar vertical_c mid dark"></div><div class="bar horizontal_c bottom_c clear"></div></div></div>';
  }
  if(e.which == 100) {
    $(".order2").append($(".letter-wrapper_d").clone().removeClass("letter-wrapper_d"));
    name = name + '<div class="letter-wrapper_d"><div class="letter_d"><div class="bar_d vertical_d dark"></div><div class="circle_d clear"></div></div></div>';
  }
  if(e.which == 101) {
    $(".order2").append($(".letter-wrapper_e").clone().removeClass("letter-wrapper_e"));
    name = name + '<div class= "letter-wrapper_e"><div class="letter_e"><div class="bar horizontal_e top_e clear"></div><div class="bar horizontal_e mid_e dark"></div><div class="bar vertical_e clear"></div><div class="bar horizontal_e bottom_e clear"></div></div></div>';
  }
  if(e.which == 102) {
    $(".order2").append($(".letter-wrapper_f").clone().removeClass("letter-wrapper_f"));
    name = name + '<div class= "letter-wrapper_f"><div class="letter_f"><div class="bar horizontal_f top_f clear"></div><div class="bar horizontal_f mid_f dark"></div><div class="bar vertical_f clear"></div></div>';
  }
  if(e.which == 103) {
    $(".order2").append($(".letter-wrapper_g").clone().removeClass("letter-wrapper_g"));
    name = name + '<div class= "letter-wrapper_g"><div class="letter_g"><div class="bar vertical_g dark"></div><div class="circle_g clear"></div><div class="bar horizontal_g clear"></div></div></div>'
  }
  if(e.which == 104) {
    $(".order2").append($(".letter-wrapper_h").clone().removeClass("letter-wrapper_h"));
    name = name + '<div class= "letter-wrapper_h"><div class="letter_h"><!-- <div class="bar horizontal red"></div> --><div class="bar horizontal_h mid_h dark"></div><div class="bar vertical_h clear"></div><div class="bar vertical_h right_h clear"></div></div></div>';
  }
  if(e.which == 105) {
    $(".order2").append($(".letter-wrapper_i").clone().removeClass("letter-wrapper_i"));
    name = name + '<div class= "letter-wrapper_i"><div class="letter_i"><div class="circle_i dark"></div><div class="bar vertical_i right_i clear"></div></div></div>';
  }
  if(e.which == 106) {
    $(".order2").append($(".letter-wrapper_j").clone().removeClass("letter-wrapper_j"));
    name = name + ''
  }
  if(e.which == 107) {
    $(".order2").append($(".letter-wrapper_k").clone().removeClass("letter-wrapper_k"));
    name = name + '<div class= "letter-wrapper_k"><div class="letter_k"><!-- <div class="bar horizontal red"></div> --><div class="bar horizontal_k mid_k dark"></div><div class="bar straight_k clear"></div><div class="bar vertical_k right_k dark"></div></div></div>';
  }
  if(e.which == 108) {
    $(".order2").append($(".letter-wrapper_l").clone().removeClass("letter-wrapper_l"));
    name = name + '<div class= "letter-wrapper_l"><div class="letter_l"><div class="bar horizontal_l mid_l dark"></div><div class="bar vertical_l clear"></div></div></div>';
  }
  if(e.which == 109) {
    $(".order2").append($(".letter-wrapper_m").clone().removeClass("letter-wrapper_m"));
    name = name + '<div class= "letter-wrapper_m"><div class="letter_m"><div class="bar_m left_m dark"></div><div class="bar_m mid_m clear"></div><div class="bar_m right_m dark"></div></div></div>';
  }
  if(e.which == 110) {
    $(".order2").append($(".letter-wrapper_n").clone().removeClass("letter-wrapper_n"));
    name = name + '<div class= "letter-wrapper_n"><div class="letter_n"><div class="bar horizontal_n mid_n dark"></div><div class="bar vertical_n clear"></div><div class="bar vertical_n right_n clear"></div></div></div>';
  }
  if(e.which == 111) {
    $(".order2").append($(".letter-wrapper_o").clone().removeClass("letter-wrapper_o"));
    name = name + ' <div class= "letter-wrapper_o"><div class="letter_o"><div class="circle_o big_o dark"></div><div class="circle_o small_o clear"></div></div>';
  }
  if(e.which == 112) {
    $(".order2").append($(".letter-wrapper_p").clone().removeClass("letter-wrapper_p"));
    name = name + '<div class= "letter-wrapper_p"><div class="letter_p"><div class="bar vertical_p dark"></div><div class="circle_p clear"></div></div></div>';
  }
  if(e.which == 113) {
    $(".order2").append($(".letter-wrapper_q").clone().removeClass("letter-wrapper_q"));
    name = name + '<div class= "letter-wrapper_q"><div class="letter_q"> <div class="bar_q vertical_q dark"></div><div class="circle_q clear"></div></div></div>';
  }
  if(e.which == 114) {
    $(".order2").append($(".letter-wrapper_r").clone().removeClass("letter-wrapper_r"));
    name = name + '<div class= "letter-wrapper_r"> <div class="letter_r"><div class="bar horizontal_r top_r clear"></div><div class="bar vertical left_r"></div><div class="bar vertical right_r dark"></div></div></div>';
  }
  if(e.which == 116) {
    $(".order2").append($(".letter-wrapper_t").clone().removeClass("letter-wrapper_t"));
    name = name + '<div class= "letter-wrapper_t"><div class="letter_t"><div class="bar horizontal_t mid_t dark"></div><div class="bar vertical_t clear"></div></div></div>';
  }
  if(e.which == 117) {
    $(".order2").append($(".letter-wrapper_u").clone().removeClass("letter-wrapper_u"));
    name = name + '<div class= "letter-wrapper_u"><div class="letter_u"><div class="bar horizontal_u mid_u dark"></div><div class="bar vertical_u clear"></div><div class="bar vertical_u right_u clear"></div></div></div>';
  }
  if(e.which == 118) {
    $(".order2").append($(".letter-wrapper_v").clone().removeClass("letter-wrapper_v"));
    name = name + '<div class= "letter-wrapper_v"><div class="letter_v"><div class="bar_v horizontal_v mid_v dark"></div><div class="bar_v vertical_v right_v clear"></div></div></div>';
  }
  if(e.which == 120) {
    $(".order2").append($(".letter-wrapper_x").clone().removeClass("letter-wrapper_x"));
    name = name + '<div class= "letter-wrapper_x"><div class="letter_x"><div class="bar horizontal_x mid_x dark"></div><div class="bar vertical_x right_x clear"></div></div></div>';
  }
  if(e.which == 121) {
    $(".order2").append($(".letter-wrapper_y").clone().removeClass("letter-wrapper_y"));
    name = name + '<div class="letter-wrapper_y"><div class="letter_y"><div class="bar_y horizontal_y mid_y clear"></div><div class="bar_y vertical_y right_y dark"></div></div></div>';
  }
  if(e.which == 122) {
    $(".order2").append($(".letter-wrapper_z").clone().removeClass("letter-wrapper_z"));
    name = name + '<div class= "letter-wrapper_z"><div class="letter_z"><div class="bar vertical_z dark"></div><div class="bar horizontal_z mid_z clear"></div><div class="bar horizontal_z right_z clear"></div></div></div>';
  }

});

$(".order").click(function(){

    $(".order2").empty();
    $(".order2").fadeOut(600);
    $(".order").fadeOut(600);
    $(".cupholder").fadeOut(600);
    $(".prompt").empty(600);
    $(".container1").fadeOut(600);
    $(".shelfcontainer").fadeOut(600);

    $(".brewing").fadeIn(500);
    $(".brewing").fadeOut(500);
    $(".brewing").fadeIn(500);
    $(".brewing").fadeOut(500);
    $(".brewing").fadeIn(500);
    $(".brewing").fadeOut(500);
    $(".brewing").fadeIn(500);
    $(".brewing").fadeOut(500);

    // $(".container1").delay(4000).fadeIn(600);
    // $(".shelfcontainer").delay(4000).fadeIn(600);
    $(".namebox").delay(6000).fadeIn(500);
    $(".namebox").html(name);
    $(".namebox2").delay(6500).fadeIn(500);
    $(".namebox3").delay(7500).fadeIn(500);
    $(".cupholder").delay(8500).fadeIn(800);




    




    // alert("The paragraph was clicked.");
});







