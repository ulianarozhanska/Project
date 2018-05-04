$(function () {
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

        var $answer3 = $node.find(".answer3");
        $answer3.text(a3);

        $answer1.click(function () {
            if (!clicked) {
                points += p1;
                clicked = true;
                $answer1.css("background-color", "#db9541");
                answered++;
                if (answered == 20) {
                    addResults();
                }
            }
        });

        $answer2.click(function () {
            if (!clicked) {
                points += p2;
                clicked = true;
                $answer2.css("background-color", "#db9541");
                answered++;
                if (answered == 20) {
                    addResults();
                }
            }
        });

        $answer3.click(function () {
            if (!clicked) {
                points += p3;
                clicked = true;
                $answer3.css("background-color", "#db9541");
                answered++;
                if (answered == 20) {
                    addResults();
                }
            }
        });

        $(".container").append($node);
        $node.hide();
        $node.slideDown(400);
    }

    addQuestion("Где можно увидеть свет уходящего солнца?", "В её глазах", "На горе", "В космосе", 5, 0, 0);
    setTimeout(function () {
        addQuestion("Почему в его поступках не было логики?", "Ну, он же не на примате учился", "Он не умеет жить по-другому", "А в чём она вообще есть?", 0, 5, 0);
    }, 100);
    setTimeout(function () {
        addQuestion("Если она пришла из ниоткуда, то куда же она исчезла?", "Взяла академку и уехала в родной город", "Интересно, где это Ниоткуда находится...", "В никуда", 0, 0, 5);
    }, 200);
    setTimeout(function () {
        addQuestion("Почему нельзя играть с огнём?", "Если разгорится, пропадём вдвоём", "Мамуня запрещает мне такие игры", "Нужно же быть осторожным(ой)", 5, 0, 0);
    }, 300);
    setTimeout(function () {
        addQuestion("Какой может быть полёт", "Нормальный", "Быстрый", "Свободный", 0, 0, 5);
    }, 400);
    setTimeout(function () {
        addQuestion("В каком случае нужно развести огонь?", "Если твёрдо выбираешь его", "Посреди холодного дня", "Если шашлык хочется пожарить", 5, 0, 0);
    }, 500);
    setTimeout(function () {
        addQuestion("Что нужно говорить вместо слов про твою любовь?", "Слова про твою неннависть", "Кричать от боли", "Призывать тропикану-женщину", 0, 5, 0);
    }, 600);
    setTimeout(function () {
        addQuestion("Что будет, если выбрать себя?", "Выиграешь", "Пропадёшь", "Не попадёшь", 0, 0, 5);
    }, 700);
    setTimeout(function () {
        addQuestion("Как нужно прощаться?", "Легко", "Долго", "Вообще не нужно", 5, 0, 0);
    }, 800);
    setTimeout(function () {
        addQuestion("Кому труднее всего избежать одиночества?", "Утончённым натурам", "Тем, кто ожилает сказочного принца", "Девушкам из высшего общества", 0, 0, 5);
    }, 900);
    setTimeout(function () {
        addQuestion("В каком случае всё могло бы быть иначе?", "Если бы ты смог обмануть судьбу", "Когда б я мог тебя забыть", "Когда б я женщин не любил", 0, 5, 5);
    }, 1000);
    setTimeout(function () {
        addQuestion("Какой может быть река?", "Как белый день", "Чёрная как ночь", "Пламенной", 5, 5, 0);
    }, 1100);
    setTimeout(function () {
        addQuestion("Кто плакал, глядя в треснувшее зеркало?", "Пьяный лицедей", "Комедиант", "Тот, в ком уживаются две души", 5, 5, 0);
    }, 1200);
    setTimeout(function () {
        addQuestion("Что случилось в двух шагах от рая?", "Мы оторвались от земли", "Мы навек простились", "Мы остановились", 0, 5, 5);
    }, 1300);
    setTimeout(function () {
        addQuestion("Почему нет никого опаснее чёрной кошки?", "Она действует на нервы постаревшим ловеласам", "Её нельзя приручить", "Она приносит неудачи мужчинам", 5, 0, 0);
    }, 1400);
    setTimeout(function () {
        addQuestion("Один из нас прощён уже, а что случилось со вторым?", "Не прощён", "Простил давно", "У кого-то ещё остался горький осадок", 0, 5, 0);
    }, 1500);
    setTimeout(function () {
        addQuestion("Когда можно увидеть из окна слова из ярких лампочек?", "Когда закончатся полёты первых ласточек", "Когда ты усталая придёшь домой", "Если это моя жизнь, то никогла", 5, 5, 0);
    }, 1600);
    setTimeout(function () {
        addQuestion("Что произошло в первый день весны?", "На краешке земли падал белый снег и розы не цвели", "Мы встретились с тобой", "К нам пришла отчаянно красивая весенняя любовь", 5, 5, 5);
    }, 1700);
    setTimeout(function () {
        addQuestion("Что может быть безответно?", "Distedu", "Мольбы о светлом будущем", "Одиночество моё", 0, 0, 5);
    }, 1800);
    setTimeout(function () {
        addQuestion("Что делает мечта?", "В небе летает", "Мечтает", "Утешает", 5, 0, 5);
    }, 1900);
});