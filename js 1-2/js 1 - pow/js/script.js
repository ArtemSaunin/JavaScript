
//var a = prompt('Введите число:');
//var n = prompt('Введите степень:');

function pow() {
  var 
  a = parseInt(document.form.a.value), //ввод данных через инпут
  n = parseInt(document.form.n.value), //ввод данных через инпут
  res = a;
  
    if (n==0) {
        res = 1;
    } else {
    for (var i = 1; i < n; i++) {
        res *= a;
    console.log('Результат: ', res);
    document.getElementById("answer").innerHTML = (res);
    }
  }
  return res;
}
