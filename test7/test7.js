$(function () {
    var TEMPLATE = $(".questionTemplate").html();
    var RESULT = $(".result").html();
    var points = 0;
    var answered = 0;

    function addResults() {
        var $node = $(RESULT);

        var $res = $node.find(".res");
        $res.text(points);

        $(".container").append($node);
        $node.hide();
        $node.slideDown(400);
        window.scrollTo(0, window.innerHeight + window.pageYOffset);
    }

    function addQuestion(question, a1, a2, a3, p1, p2, p3) {
        var $node = $(TEMPLATE);
        var clicked = false;

        var $question = $node.find(".question");
        $question.text(question);

        var $answer1 = $node.find(".answer1");
        $answer1.text(a1);

        var $answer2 = $node.find(".answer2");
        $answer2.text(a2);

        var $answer3 = $node.find(".answer3");
        $answer3.text(a3);

        $answer1.click(function () {
            if (!clicked) {
                points += p1;
                clicked = true;
                $answer1.css("background-color", "#db9541");
                answered++;
                if (answered == 10) {
                    addResults();
                }
            }
        })

        $answer2.click(function () {
            if (!clicked) {
                points += p2;
                clicked = true;
                $answer2.css("background-color", "#db9541");
                answered++;
                if (answered == 10) {
                    addResults();
                }
            }
        })

        $answer3.click(function () {
            if (!clicked) {
                points += p3;
                clicked = true;
                $answer3.css("background-color", "#db9541");
                answered++;
                if (answered == 10) {
                    addResults();
                }
            }
        })

        $(".container").append($node);
        $node.hide();
        $node.slideDown(400);
    }

    addQuestion("", "", "", "", 0, 0, 0);
    setTimeout(function () {
        addQuestion("", "", "", "", 0, 0, 0);
    }, 100);
    setTimeout(function () {
        addQuestion("", "", "", "", 0, 0, 0);
    }, 200);
    setTimeout(function () {
        addQuestion("", "", "", "", 0, 0, 0);
    }, 300);
    setTimeout(function () {
        addQuestion("", "", "", "", 0, 0, 0);
    }, 400);
    setTimeout(function () {
        addQuestion("", "", "", "", 0, 0, 0);
    }, 500);
    setTimeout(function () {
        addQuestion("", "", "", "", 0, 0, 0);
    }, 600);
    setTimeout(function () {
        addQuestion("", "", "", "", 0, 0, 0);
    }, 700);
    setTimeout(function () {
        addQuestion("", "", "", "", 0, 0, 0);
    }, 800);
    setTimeout(function () {
        addQuestion("", "", "", "", 0, 0, 0);
    }, 900);
});