describe("Функция pow, Результат < 10^9, % не учитывается", function() {
  it("n > 1, результат не больше 3*10^4", function() {
    expect(app.pow(2, 10)).toBe(1024);
	expect(app.pow(6, 3)).toBe(216);
  });
  it("n > 1, результат больше 3*10^4", function() {
	expect(app.pow(5, 8)).toBe(390625);	
    expect(app.pow(4, 9)).toBe(262144);
  });
  it("n = 1", function() {
	expect(app.pow(6, 1)).toBe(6);	
    expect(app.pow(12, 1)).toBe(12);
  });
});

describe("Функция pow, некорректный ввод данных", function() {
  it("При вводе дробных чисел", function() {
	expect(app.pow(3.2, 10, 1000)).toEqual(NaN);	
	expect(app.pow(2, 9.3, 100)).toEqual(NaN);
	expect(app.pow(2, 10, 100.2)).toEqual(NaN);
  });
  it("Один из вводимых параметров - строка", function() {
	expect(app.pow(5, 's' ,1000)).toEqual(NaN);
	expect(app.pow(9, 5, 'a')).toEqual(NaN);
	expect(app.pow('x', 5, 100)).toEqual(NaN);
  });
});

describe("Функция pow, % учитывается", function() {
  it("n > 1, промежуточный результат не больше 3*10^4", function() {
	expect(app.pow(2, 10, 100)).toBe(24);	
    expect(app.pow(6, 5, 1000)).toBe(776);
  });
  it("n > 1, результат больше 3*10^4", function() {
	expect(app.pow(5, 25, 100000)).toBe(53125);	
    expect(app.pow(3, 15, 1000000)).toBe(348907);
  });
  it("n = 1", function() {
	expect(app.pow(5, 1, 10)).toBe(5);	
    expect(app.pow(2, 1, 100)).toBe(2);
  });
});




