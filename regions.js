/*
$("a").hover(
    function (e) {
        var region = $(this).data("region");
        $("#descriptions").removeClass().addClass(region);
    },
    function (e) {
        $("#descriptions").removeClass();
    }
);
*/

$(".map-region").hover(
    function (e) {
        var region = $(this).data("region");
        console.log(region)
        $("#descriptions").removeClass().addClass(region);
        console.log("hover in")
    },
    function (e) {
        $("#descriptions").removeClass();
        console.log("hover out")
    }
);

$("a.map-region-link").focus(
    function (e) {
        var region = $(this).find(".map-region").data("region");
        $("#descriptions").removeClass().addClass(region);
    }
);

$("a.map-region-link").focusout(
    function (e) {
        $("#descriptions").removeClass();
    }
);
