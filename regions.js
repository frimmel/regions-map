$(".map-region").hover(
    function (e) {
        var region = $(this).data("region");
        $("#descriptions").removeClass().addClass(region);
    },
    function (e) {
        $("#descriptions").removeClass();
    }
);

$(".map-region").focus(
    function (e) {
        var region = $(this).data("region");
        $("#descriptions").removeClass().addClass(region);
    },
    function (e) {
        $("#descriptions").removeClass();
    }
);
