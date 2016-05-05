'use strict'

$(function() {

    var content = $('#output-test').html();
    var questions = [
        
        {
        questionTitle	: '1. HTML - это аббревиатура от? ',
        questionText	: [
							'Hyper Text Markup Language', 
							'Hyperlinks and Text Markup Language',
							'Home Tool Markup Language'
		],
        questionAnswer	: [
							'true',
							'false',
							'false'
		]
        },

        {
        questionTitle	: '2. Как расшифровывается абревиатура CSS?',
        questionText	: [
							'Cascading Site Style', 
							'Cascading Style Sheets', 
							'Cascad Shit Style'
		],
        questionAnswer	: [
							'false', 
							'true', 
							'false'
		]
        },

        {
        questionTitle	: '3. Кто задаёт Web стандарты?',
        questionText	: [
							'Google',
							'W3C',
							'World Wide Web Consortium'
		],
        questionAnswer	: [
							'false', 
							'true', 
							'true']
        }       
    ];

    var testInLocalStorage = JSON.stringify(questions);
    localStorage.setItem('keyTest', testInLocalStorage);

    var testOutFromLocalStorage = localStorage.getItem('keyTest');

    var variableTest = JSON.parse(testOutFromLocalStorage);

    var content = tmpl(content, {
        data: variableTest
    });

    var answerResult = [];
    var count = 0,  markPositive = 0, markNegative = 0;

    $('body').append(content);

    $('.output-wrapper').slideDown('slow');

    $('.button-refer').on('click', function() {

        for (var i =  0; i < variableTest.length; i++) {

            for (var j =  0; j < variableTest[i].questionText.length; j++) {

                if (($('#checkbox_' + i + '_' + j).prop('checked')) && (variableTest[i].questionAnswer[j] === 'true')) { 

                    answerResult[count] = '<p class="modal-window__output-result">' +'Ответ ' + (i + 1) + '.' + (j + 1) + ' верный' + '</p>';
                    count++;
                    markPositive++;

                } else if (($('#checkbox_' + i + '_' + j).prop('checked')) && (variableTest[i].questionAnswer[j] === 'false')) {

                        answerResult[count] = '<p class="modal-window__output-result">' + 'Ответ ' + (i + 1) + '.' + (j + 1) + ' не верный!'+ '</p>';
                        count++;
                        markNegative++;
                        }
            }           
        }

        for (var m = 0; m < answerResult.length; m++) {
            console.log(answerResult[m]);
            
        };
        console.log('--------------');
        console.log('Правильных ответов: ', markPositive);
        console.log('Не правильных ответов: ', markNegative);

        $('.modal-window').fadeIn('slowly');

        $('div.modal-window__result-here').append(answerResult);

        if (markPositive == 4) {
             $('div.modal-window__result-here').after('<p class="modal-window__output-result-all-correct">' + 'Поздравляю! Вы ответили правильно на все вопросы!' + '</p>');
        } else if ((markPositive >= 1) && (markPositive < 4)) {
            $('div.modal-window__result-here').after('<p class="modal-window__output-result-not-all-correct">' + 'Вы ответили правильно не на все вопросы!' + '</p>');
            $('p.modal-window__output-result-not-all-correct').after('<div class="button-refer-position"><input class="modal-window__button-retry" type="button" value="Попробовать еще раз"></div>');
        } else if ((markPositive == 0) && (markNegative ==0))  {
            $('div.modal-window__result-here').after('<p class="modal-window__output-result-not-choosed">' + 'Вы не выбрали ни одного ответа!' + '</p>');
            $('p.modal-window__output-result-not-choosed').after('<div class="button-refer-position"><input class="modal-window__button-retry" type="button" value="Попробовать еще раз"></div>');
        } else if ((markNegative > 0) && (markPositive == 0))  {
            $('div.modal-window__result-here').after('<p class="modal-window__output-result-not-choosed">' + 'Все ответы неверные!' + '</p>');
            $('p.modal-window__output-result-not-choosed').after('<div class="button-refer-position"><input class="modal-window__button-retry" type="button" value="Попробовать еще раз"></div>');
        };

        $('.modal-window__button-retry').on('click', function() {
            window.location.reload();
        });

    });

});