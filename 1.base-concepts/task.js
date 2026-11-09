"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  const d = b * b - 4 * a * c; 
  if (d > 0) { // Два различных вещественных корня 
    const sqrtD = Math.sqrt(d); 
    const x1 = (-b + sqrtD) / (2 * a); 
    const x2 = (-b - sqrtD) / (2 * a); 
    arr.push(x1, x2);
  } 
  else if (d === 0) { // Один вещественный корень
    const x = -b / (2 * a); 
    arr.push(x);
  } 
  // Если d < 0 массив остаётся пустым

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const P = percent / 1200; // преобразование процентов в месячный
  const S = amount - contribution; // Тело кредита
  const Summ = (S * (P + (P / (((1 + P)**countMonths) - 1)))) * countMonths; // Ежемесячная оплата * кол-во месяцев
  let A = Number(Summ.toFixed(2)); // Округление до двух знаков и преобразование обратно в число
  return A;
}