$(function(){
    var TEMPLATE = $(".questionTemplate").html();
    var RESULT = $(".result").html();
    var points = 0;
    var answered = 0;

    function addResults() {
        var $node = $(RESULT);

        var $res = $node.find(".res");
        $res.text(points + "%");

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
                if(answered == 9){
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
                if(answered == 9){
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
                if(answered == 9){
                    addResults();
                }
            }
        })

        $(".container").append($node);
        $node.hide();
        $node.slideDown(400);
    }

    addQuestion("Кого ви більше любите?", "Дівчаток", "Хлопців", "Взагалі людей не люблю", 11, 0, 0);
    setTimeout(function () {
        addQuestion("Як називається американська валюта?", "Долари", "Євро", "ДолЯри", 0, 0, 11);
    }, 100);
    setTimeout(function () {
        addQuestion("Що треба говорити, якщо вам все зрозуміло?", "Всьо понятно", "І коню ясно!", "Мені ніколи не буває все зрозуміло((", 0, 11, 0);
    }, 200);
    setTimeout(function () {
        addQuestion("Чим є банан?", "Просто бананом", "Фруктом", "Що за непристойні запитання?", 11, 0, 0);
    }, 300);
    setTimeout(function () {
        addQuestion("З чим у вас асоціюється Ленін?", "З Мавхолеєм", "З градієнтом, звісно", "З найкращими часами", 0, 11, 0);
    }, 400);
    setTimeout(function () {
        addQuestion("Кого «бил по роже» піонєр Сірожа?", "ШО????", "Октябрьонка Пєтю", "Іноді здається, що мене", 0, 11, 0);
    }, 500);
    setTimeout(function () {
        addQuestion("Як треба виправдовуватись, якщо ви доторкнулися до дівчини без її дозволу?", "Ой, вибачте, я випадково", "Робити вигялд, що нічого не сталося", "Що хочу, те й роблю!", 11, 0, 0);
    }, 600);
    setTimeout(function () {
        addQuestion("Викладачка із яким прізвищем була колись на каферді?", "Леніна", "Вронська", "Влізло", 0, 0, 11);
    }, 700);
    setTimeout(function () {
        addQuestion("Як треба пояснювати матан і ТФКЗ?", "Окремо, бо це зовсім різні предмети", "Все разом (і, звісно, ніколи не казати, що до чого)", "Це взагалі нікому не потрібно", 0, 11, 0);
    }, 800);
});