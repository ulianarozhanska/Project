$(function(){
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

    addQuestion("Ви потратили більше 5 хвилін на оцей шедевр?", "Я ж не даун", "Пфф, конєшно, менше", "Досі нє завершив", 0, 5, 10);
    setTimeout(function () {
        addQuestion("Лаба компілюється?", "ЕЕЕ, шо???", "Мій компухтер скомпілює всьо, шо захочу", "Єстєсна, я ж не даун", 0, 10, 5);
    }, 100);
    setTimeout(function () {
        addQuestion("Вам соромно показать Оце мамунє?", "Конєшно, нє соромно. Я ж її маленький гєній", "Не хотєлося б руйнувать лєгєнду про то, шо я топ-прогер (сікло)", "Начальнік вже зацінив, то й мамуня заціне", 5, 0, 10);
    }, 200);
    setTimeout(function () {
        addQuestion("Хто допомагав вам дєлать?", "Бабуня", "Мамуня", "В нас бартєр з Ніколяшею", 10, 5, 0);
    }, 300);
    setTimeout(function () {
        addQuestion("На якій мові програмуєте?", "BrainFuck", "YoptaScript", "Іной отвєт", 5, 10, 0);
    }, 400);
    setTimeout(function () {
        addQuestion("Під яке музло займались кодінгом?", "Під марш Шопена", "Єгорка Крід", "Мєладзе", 5, 0, 10);
    }, 500);
    setTimeout(function () {
        addQuestion("Як оціните свой код-сойдьот?", "60", "91", "Вообщє-то це код-рижебород", 0, 5, 10);
    }, 600);
    setTimeout(function () {
        addQuestion("Яка клікуха в вашої лаби?", "Бубочка моя", "Нічний нєдоЖах", "Нічний доЖах", 10, 0, 5);
    }, 700);
    setTimeout(function () {
        addQuestion("Компухтер вижив після вашої Бубочки?", "Мій ноут пережив дайвінг , а Це ні…", "Мамуня сказала, шо новий більше нікада нє купить((", "Та нормальна лаба, шо ти починаєш!?", 5, 10, 0);
    }, 800);
    setTimeout(function () {
        addQuestion("Гроші за незарах і контракт підготували?", "Я вже на контракті.", "Вже шукаю третю роботу", "Працюю в модельній агенції «Сауна на Окружной», тож завжди готова(ий)", 0, 5, 10);
    }, 900);
});