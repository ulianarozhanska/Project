$(function () {
    var RESULT = $(".result").html();

    function addResults() {
        var $node = $(RESULT);

        var $res = $node.find(".res");
        $res.text("Для того, щоб сказати, що ви обожнюєте Глибовця, ніякий тест не потрібен!");
        $res.css("font-size", "60px");

        $(".container").append($node);
        $node.hide();
        $node.slideDown(400);
        window.scrollTo(0, window.innerHeight + window.pageYOffset);
    }

    addResults();
});