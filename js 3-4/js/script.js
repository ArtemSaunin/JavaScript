'use strict'

var qForm = {

    father:document.body,
    wrapper:'',
    header:'',
    questionBlock:'',
    question:[],
    answerBlock:[],
    answerWrap:[],
    answer:[],
    check:'',
    div:[],
    result:'',
    resultWrap:'',

    createForm:function() {
        this.wrapper = document.createElement('form');
        this.wrapper.classList.add('col-xs-6');
        this.father.appendChild(this.wrapper);
    },

    createHeader:function() {
        this.header = document.createElement('h1');
        this.header.classList.add('header', 'text-center');
        this.header.innerHTML = 'Тест по программированию';
        this.wrapper.appendChild(this.header);
    },

    createQuestionBlock:function() {
        this.questionBlock = document.createElement('ol');
        this.questionBlock.classList.add('list-group');
        this.wrapper.appendChild(this.questionBlock);
    },

    createQuestion:function(i) {
        this.question[i] = document.createElement('li');
        this.question[i].classList.add('list-group-item');
        this.question[i].innerHTML = QBase[i].q;
        this.questionBlock.appendChild(this.question[i]);
    },

    createAnswerBlock:function(i) {
        this.answerBlock[i] = document.createElement('div');
        this.answerBlock[i].classList.add('form-group');
        this.question[i].appendChild(this.answerBlock[i]);
    },

    createAnswer:function(i, j) {
        this.answer[i] = document.createElement('label');
        this.answer[i].classList.add('box');
        this.answer[i].innerHTML = QBase[i].a[j];
        this.div[i] = document.createElement('div');
        this.div[i].classList.add('checkbox', 'checkbox-info');
        this.answerBlock[i].appendChild(this.div[i]);
        this.check = document.createElement('input');
        this.check.setAttribute('type', 'checkbox');
        this.div[i].appendChild(this.answer[i]);
        this.answer[i].insertBefore(this.check, this.answer[i].firstChild);
    },

    createButton:function() {
        this.result = document.createElement('button');
        this.resultWrap = document.createElement('div');
        this.resultWrap.classList.add('resultWrap', 'text-center');
        this.wrapper.appendChild(this.resultWrap);
        this.resultWrap.appendChild(this.result);
        this.result.setAttribute('type', 'submit');
        this.result.classList.add('btn', 'btn-info');
        this.result.innerHTML = 'Проверить мои результаты';
    },

    createTest:function() {
        this.createForm();
        this.createHeader();
        this.createQuestionBlock();
        for (var i = 0; i < QBase.length; i++) {
            this.createQuestion(i);
        };
        for (var i = 0; i < QBase.length; i++) {
            this.createAnswerBlock(i);
        };
        for (var i = 0; i < QBase.length; i++) {
            for (var j = 0; j < QBase[i].a.length; j++) {
            this.createAnswer(i,j);
            }
        };
        this.createButton();

    }

}
qForm.createTest();
