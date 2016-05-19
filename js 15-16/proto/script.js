'use strict'
function Human(name, age, sex, height, weight) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.height = height;
    this.weight = weight;
}

function Worker() {
    this.job = 'Best Company LLC';
    this.salary = 27000;
    this.work = function(){
        return 'working.';
    };
}

function Student() {
    this.study = 'KhNU';
    this.grants = 1250;
    this.watchTV = function() {
        return 'watch TV show.';
    };
}

var Andrey = new Human('Andrey', 27, 'male', 189, 89);
var Anya = new Human('Anya', 18, 'female', 183, 53);

Worker.prototype = Andrey;
var WorkerAndrey = new Worker();

Student.prototype = Anya;
var StudentAnya = new Student;

console.log('Worker name:',WorkerAndrey.name,
    "\n age:", WorkerAndrey.age,
    "\n sex:", WorkerAndrey.sex,
    "\n height:", WorkerAndrey.height,
    "\n weight:", WorkerAndrey.weight,
    "\n work at:", WorkerAndrey.job,
    "\n salary:", WorkerAndrey.salary
);
console.log(WorkerAndrey.name, WorkerAndrey.work());

console.log ("***************");

console.log('Student name:',StudentAnya.name,
    "\n age:", StudentAnya.age,
    "\n sex:", StudentAnya.sex,
    "\n height:", StudentAnya.height,
    "\n weight:", StudentAnya.weight,
    "\n study at:", StudentAnya.study,
    "\n grants:", StudentAnya.grants
);
console.log(StudentAnya.name, StudentAnya.watchTV());
