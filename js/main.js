$(function() {
    var img = new Image();
    $(img)
        .load(function() {
            $("<div/>", {
                class: "background"
            }).hide()
            .appendTo("body")
            .fadeIn(1000);
        })
        .attr("src", "img/background.jpg");
});