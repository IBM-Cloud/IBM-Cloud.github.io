$( ".dropdown.col-md-12.col-xs-12" ).hide();
$(".filterButton").css(
      "background: #5596e6"
    );

function handler1() {
  $(".filterButton").css({
        "background": '#5596e6 url("../static/icons/filter.svg") right no-repeat',
        "color": "white",
        "text-decoration": "none"
      });

    $(this).one("click", handler2);
    $( ".dropdown.col-md-12.col-xs-12" ).show();

}

function handler2() {
  $(".filterButton").css({
        "background": '#ffffff url("../static/icons/filter.svg") right no-repeat',
        "color": "#5596e6",
        "text-decoration": "none"
      });

    $(this).one("click", handler1);
    $( ".dropdown.col-md-12.col-xs-12" ).hide();
}

$(".filterButton").one("click", handler1);
