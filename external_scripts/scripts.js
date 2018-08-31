$(document).ready(function(){
    $('#right-button').click(function () {
        alert("Yeah!");
        event.preventDefault();
        $('li.inside.project-item.slide-animation.ng-scope').animate({
            scrollLeft: "+=300px"
        }, "slow");
    });

    $('#left-button').click(function () {
        event.preventDefault();
        $('li.inside.project-item.slide-animation.ng-scope').animate({
            scrollLeft: "-=300px"
        }, "slow");
    });
});