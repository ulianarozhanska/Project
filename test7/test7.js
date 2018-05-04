$(function () {
    var TEMPLATE = $(".questionTemplate").html();
    var RESULT = $(".result").html();
    var points1 = 0;
    var points2 = 0;
    var points3 = 0;
    var points4 = 0;
    var points5 = 0;
    var answered = 0;

    function addResults() {
        var $node = $(RESULT);

        var $res = $node.find(".res");

        if (points1 >= points2 && points1 >= points3 && points1 >= points4 && points1 >=points5){
            $res.text("Паранойальний психотип");}
        if (points2 >= points1 && points2 >= points3 && points2 >= points4 && points2 >=points5){
            $res.text("Епилептоїд");}
        if (points3 >= points1 && points3 >= points2 && points3 >= points4 && points3 >=points5){
            $res.text("Істероїд");}
        if (points4 >= points1 && points4 >= points2 && points4 >= points3 && points4 >=points5){
            $res.text("Гіпертим");}
        if (points5 >= points1 && points5 >= points2 && points5 >= points3 && points5 >=points4){
            $res.text("Шизоїд");}

        $(".container").append($node);
        $node.hide();
        $node.slideDown(400);
        window.scrollTo(0, window.innerHeight + window.pageYOffset);
    }

    function addQuestion5(question, a1, a2, a3, a4, a5) {
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

        var $answer4 = $node.find(".answer4");
        $answer4.text(a4);

        var $answer5 = $node.find(".answer5");
        $answer5.text(a5);

        $answer1.click(function () {
            if (!clicked) {
                points1 ++;
                clicked = true;
                $answer1.css("background-color", "#db9541");
                answered++;
                if (answered == 6) {
                    addResults();
                }
            }
        })

        $answer2.click(function () {
            if (!clicked) {
                points2 ++;
                clicked = true;
                $answer2.css("background-color", "#db9541");
                answered++;
                if (answered == 6) {
                    addResults();
                }
            }
        })

        $answer3.click(function () {
            if (!clicked) {
                points3++;
                clicked = true;
                $answer3.css("background-color", "#db9541");
                answered++;
                if (answered == 6) {
                    addResults();
                }
            }
        })

        $answer4.click(function () {
            if (!clicked) {
                points4++;
                clicked = true;
                $answer4.css("background-color", "#db9541");
                answered++;
                if (answered == 6) {
                    addResults();
                }
            }
        })

        $answer5.click(function () {
            if (!clicked) {
                points5++;
                clicked = true;
                $answer5.css("background-color", "#db9541");
                answered++;
                if (answered == 6) {
                    addResults();
                }
            }
        })

        $(".container").append($node);
        $node.hide();
        $node.slideDown(400);
    }

    addQuestion5("Як ви зазвичай говорите?", "Переконливо", "Внятно", "Мелодійно", "Швидко і багато", "Ніби повний рот смаколиків набрав");
    setTimeout(function () {
        addQuestion5("А як одягаєтесь?", "Як лідер повстанців", "З іголочки", "Як моднік", "По-різному", "Мені все одно");
    }, 100);
    setTimeout(function () {
        addQuestion5("Що будете робити, якщо до заліку декілька годин, а ви ще не починали нічого вчити?", "Змушу прєпода так поставити", "Зі мною такого не буває, я завжди все знаю", "Вигадаю щось, щоб пояснити, чому не встиг", "Та я і так здам, я ж не сікло", "Згенерую щось на місці");
    }, 200);
    setTimeout(function () {
        addQuestion5("На що більше схожий ваш дім?", "Штаб-квартира СБУ", "Моя крєпость", "Авансцена", "Проходний двір", "На величезний смітник, який я кличу творча атмосфера");
    }, 300);
    setTimeout(function () {
        addQuestion5("Як будете домовлятися з тим, чия допомога вам конче потрібна?", "Шантажуватиму його", "Ультіматуми - то наше всьо", "Ізі, я ж майстер маніпуляцій", "Зі мною всі товаришують, тож домовимося швидко", "Задавлю його своїм інтєлєктом");
    }, 400);
    setTimeout(function () {
        addQuestion5("Яка професія вам би підійшла?", "Реформатор-бунтівник", "Вчитель, лікар", "Актор, продавець-консультант", "Слєсарь", "Науковець");
    }, 500);
});