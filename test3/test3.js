$(function () {
    var TEMPLATE = $(".questionTemplate").html();
    var RESULT = $(".result").html();
    var points = 0;
    var answered = 0;

    function addResults() {
        var $node = $(RESULT);

        var $res = $node.find(".res");
        if (points <= 100) {
            $res.text("Григорій Многогрішний");
            if (points <= 90) {
                $res.text("Наталка Полтавка");
                if (points <= 60) {
                    $res.text("Ярославна");
                    if (points <= 40) {
                        $res.text("Іван Дідух");
                        if (points <= 30) {
                            $res.text("Степан Радченко");
                            if (points <= 20) {
                                $res.text("Мина Мазайло");
                                if (points <= 10) {
                                    $res.text("Кайдашиха");
                                }
                            }
                        }
                    }
                }
            }
        }

        $(".container").append($node);
        $node.hide();
        $node.slideDown(400);
        window.scrollTo(0, window.innerHeight + window.pageYOffset);
    }

    function addQuestion4(question, a1, a2, a3, a4, p1, p2, p3, p4) {
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

        $node.find(".answer5").css("display", "none");
        $node.find(".answer6").css("display", "none");

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

        $answer4.click(function () {
            if (!clicked) {
                points += p4;
                clicked = true;
                $answer4.css("background-color", "#db9541");
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

    function addQuestion5(question, a1, a2, a3, a4, a5, p1, p2, p3, p4, p5) {
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

        $node.find(".answer6").css("display", "none");

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

        $answer4.click(function () {
            if (!clicked) {
                points += p4;
                clicked = true;
                $answer4.css("background-color", "#db9541");
                answered++;
                if (answered == 10) {
                    addResults();
                }
            }
        })

        $answer5.click(function () {
            if (!clicked) {
                points += p5;
                clicked = true;
                $answer5.css("background-color", "#db9541");
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

    function addQuestion6(question, a1, a2, a3, a4, a5, a6, p1, p2, p3, p4, p5, p6) {
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

        var $answer6 = $node.find(".answer6");
        $answer6.text(a6);

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

        $answer4.click(function () {
            if (!clicked) {
                points += p4;
                clicked = true;
                $answer4.css("background-color", "#db9541");
                answered++;
                if (answered == 10) {
                    addResults();
                }
            }
        })

        $answer5.click(function () {
            if (!clicked) {
                points += p5;
                clicked = true;
                $answer5.css("background-color", "#db9541");
                answered++;
                if (answered == 10) {
                    addResults();
                }
            }
        })

        $answer6.click(function () {
            if (!clicked) {
                points += p6;
                clicked = true;
                $answer6.css("background-color", "#db9541");
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

    addQuestion5("Ви стали свідком несправедливості у колєктиві. Шо ви будете робить?", "Хм, я придумаю умний план шоб порєшать сітуацію", "Втучусь в сітуацію та спробую захистить потерпілого, я ж не сікло", "Буду переживать за це та думать як змінить сітуацію", "Мої дії будуть залежать від того, на чиєй сторонє буде більшість, нє буду ж я рісковать зазря(сікло)", "Главноє меня не трогать, бо мало не покажеться всєм!", 8, 10, 6, 4, 2);
    setTimeout(function () {
        addQuestion6("У вас появився шанс сваліть в іншу країну, але вам прєдлагають работку на Батьківщинє. Шо будетє робить?", "Мені і тут нєпогано", "А є можливість на одній із робіт работать удальонно?", "Конєшно, поїду, шо тут думать?!", "Залишусь, куди ж я без своїх мамуні і бабуні?", "Ой, нє знаю, мінять шило на мило...", "Якщо я не буду робить непосильний вклад у розвиток своєй Батьківщини, усі так і будуть мріять про заграніцу!", 6, 4, 1, 8, 5, 10);
    }, 100);
    setTimeout(function () {
        addQuestion6("Чи є у вас впливові знайомі?", "Я і сам із них", "Ой, багацько, і вони мене уважають", "Я працюю над цим", "Лучше б не було", "Надєюсь, їх скоро буде більше", "Іногда залицяються, але мені всьо равно", 9, 8, 6, 2, 4, 10);
    }, 200);
    setTimeout(function () {
        addQuestion6("Шо допомагає вам рєшать складні сітуації?", "Умєніє пристосовуваться", "Серденько", "Сильний характєр", "Воля", "Щпрість і позитив", "Хітрость", 4, 8, 10, 6, 9, 2);
    }, 300);
    setTimeout(function () {
        addQuestion5("Як ви ставитєсь до браку по расчьоту?", "Нє понімаю цього!", "Кожному своє...", "Шлюб - це союз двох людей, які люблять друг друга, а не шукають зиску!", "Не бачу в цьому нічо поганого", "Як можна одружуватись с тим, кого не любиш?!", 6, 4, 10, 1, 8);
    }, 400);
    setTimeout(function () {
        addQuestion6("Що з цього ви цінуєте найбільше?", "Посміжку фортуни.", "Вєрность принципам", "Статус" ,"Чесність перед собою та окружаючими", "Рідний край та мамуню з бабунєй", "Те, що мені принадлєжит", 4, 6, 1, 8, 10, 5);
    }, 500);
    setTimeout(function () {
        addQuestion4("Чого ви більше усього боїтесь?", "Остаться без грошей і связєй", "Одіночєства", "Зради близької людини", "Смерті", 1, 8, 10, 6);
    }, 600);
    setTimeout(function () {
        addQuestion4("Яка риса характеру найбільше вам притаманна?", "Лєнтяйство", "Хітрость", "Щедрість", "Чєсность", 1, 5, 8, 10);
    }, 700);
    setTimeout(function () {
        addQuestion5("Що з цього ви б обрали?", "Безсмертя", "Лєжать на дівані, а грошенятка самі залітають вам у вікно", "Вєчная любов", "Буть популярной лічностью", "Цікаве життя", 4, 2, 10, 6, 8);
    }, 800);
    setTimeout(function () {
        addQuestion4("Що б ви робили в сітуації, коли вас навмисно образили?", "Ууу, цїй людинці мало не покажеться!", "Постараюсь усе рішить мірно, я вважаю шо усі сітуації можно розрулить без кулаків", "Мене вообше ніхто ніколи не рішиться обідить.", "Та нічого навєрно(сікло)", 6, 10, 8, 2);
    }, 900);
});