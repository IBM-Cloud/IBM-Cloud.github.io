$( "#filterDropdown" ).hide();
$("#filterButton").css(
  "background: #5596e6"
);

function handler1() {
  $("#filterButton").css({
    "background": '#5596e6',
    "color": "white",
    "text-decoration": "none"
  });

  $("#filterButton polygon").css({
    "fill": 'white',
  });

  $(this).one("click", handler2);
  $( "#filterDropdown" ).show();

}

function handler2() {
  $("#filterButton").css({
    "background": '#ffffff',
    "color": "#5596e6",
    "text-decoration": "none"
  });

  $("#filterButton polygon").css({
    "fill": '#3D70B2',
  });

  $("a#fliterButtonID:hover").css({
    "text-decoration": "none"
  });

  $(this).one("click", handler1);
  $( "#filterDropdown" ).hide();
}

$("#filterButton").one("click", handler1);
