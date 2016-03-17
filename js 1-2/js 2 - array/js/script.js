alert('Введите пять любых имен');
var count = 1;
var arr=[];

while (count <= 5) {
	var name = prompt('Введите ' + count + '-ое имя:');
    if (name == '') {
        alert('Вы забыли ввести имя!');
        continue;
    } else if (name == 'null') {
        alert('Ввод ' + count + '-го имени отменён!');
    }
    arr.push(name);
	count++;  
}

var user = prompt('Введите имя пользователя:');
var searchVar = arr.indexOf(user);

    if (searchVar >-1 ) {
 	alert(user +','+' вы успешно вошли!');
    } else {
 	alert('Пользователя с таким именем не существует!');
}