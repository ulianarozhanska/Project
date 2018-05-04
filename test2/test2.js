$(function(){
    var TEMPLATE = $(".questionTemplate").html();
    var RESULT = $(".result").html();
    var points = 10;
    var answered = 0;

    function addResults() {
        var $node = $(RESULT);

        var $res = $node.find(".res");
        $res.text("Вам " + points + " рочків");

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

        var $answer3= $node.find(".answer3");
        $answer3.text(a3);

        $answer1.click(function () {
            if(!clicked) {
                points += p1;
                clicked = true;
                $answer1.css("background-color", "#db9541");
                answered++;
                if(answered == 10){
                    addResults();
                }
            }
        })

        $answer2.click(function () {
            if(!clicked) {
                points += p2;
                clicked = true;
                $answer2.css("background-color", "#db9541");
                answered++;
                if(answered == 10){
                    addResults();
                }
            }
        })

        $answer3.click(function () {
            if(!clicked) {
                points += p3;
                clicked = true;
                $answer3.css("background-color", "#db9541");
                answered++;
                if(answered == 10){
                    addResults();
                }
            }
        })

        $(".container").append($node);
        $node.hide();
        $node.slideDown(400);
    }

    function addPicQuestion(question, a1, a2, a3, p1, p2, p3) {
        var $node = $(TEMPLATE);
        var clicked = false;

        var $question = $node.find(".question");
        $question.text(question);

        var $answer1 = $node.find(".answer1");
        $answer1.text(a1);

        var $answer2 = $node.find(".answer2");
        $answer2.text(a2);

        var $answer3= $node.find(".answer3");
        $answer3.text(a3);

        $node.find(".picturesBox").css("display", "block");

        $answer1.click(function () {
            if(!clicked) {
                points += p1;
                clicked = true;
                $answer1.css("background-color", "#db9541");
                answered++;
                if(answered == 10){
                    addResults();
                }
            }
        })

        $answer2.click(function () {
            if(!clicked) {
                points += p2;
                clicked = true;
                $answer2.css("background-color", "#db9541");
                answered++;
                if(answered == 10){
                    addResults();
                }
            }
        })

        $answer3.click(function () {
            if(!clicked) {
                points += p3;
                clicked = true;
                $answer3.css("background-color", "#db9541");
                answered++;
                if(answered == 10){
                    addResults();
                }
            }
        })

        $(".container").append($node);
        $node.hide();
        $node.slideDown(400);
    }

    addQuestion("З ким крутила шашні Лєна-Ранєтка?", "З гуцулом", "З фізруком", "В школі вчитись треба, а не шашні крутіть", 0, 5, 0);
    setTimeout(function () {
        addPicQuestion("На якій фоткє Пєрєпєчко?", "Бубочка 1", "Бубочка 2", "Бубочка 3", 0, 5, 0);
    }, 100);
    setTimeout(function () {
        addQuestion("Дє люді живут хіп-хопом?", "В шоу Танцюють Всі", "В фільмі Шаг вперед", "У нас в клубі", 0, 0, 5);
    }, 200);
    setTimeout(function () {
        addQuestion("Вдох-выдох...", "И мы опыть играем в люимых", "Выдох-выдох-вдох", "Як ви дізналися, що я сьогодні зарядку нє робив?", 5, 0, 0);
    }, 300);
    setTimeout(function () {
        addQuestion("До кого пішла дружина Сергія Васнєцова?", "До Антонова", "До хокеїста", "До Едуарда Володимировича", 0, 5, 0);
    }, 400);
    setTimeout(function () {
        addQuestion("Як звав себе рома Букін?", "Колбастєр", "Сосістєр", "Гранд Мастєр Біт", 0, 0, 5);
    }, 500);
    setTimeout(function () {
        addQuestion("Дє нє звонЯт, а звОнят?", "У нас на районє", "На Троє", "В шоу Від пацанки До панянки", 5, 0, 0);
    }, 600);
    setTimeout(function () {
        addQuestion("Хто співає Міліон Алих Роз?", "Єгорка Крід", "Пугачова", "Малахов", 0, 5, 0);
    }, 700);
    setTimeout(function () {
        addQuestion("Як казав Ніколай Пєтровіч Воронін: … сіла", "Молдавськая", "Руссська", "Єгіпєтская", 0, 0, 5);
    }, 800);
    setTimeout(function () {
        addQuestion("Хто переміг?", "Матіас", "Максік Барскіх", "Стас Шурінс, бубочка моя люба", 5, 0, 0);
    }, 900);
});