

// Task 1

let celsius = prompt("Введите температуру в градусах Цельсия:");
let choice = prompt("Преобразовать в (F)ahrenheit или (K)elvin? (Введите F или K):");

celsius = Number(celsius);

let result;
let message;

if (choice === 'F') {
    result = (celsius * 9/5) + 32;
    message = "Температура в градусах Фаренгейта: " + result.toFixed(2) + "°F";
} else if (choice === 'K') {
    result = celsius + 273.15;
    message = "Температура в Кельвинах: " + result.toFixed(2) + "K";
} else {
    message = "Неверный выбор. Пожалуйста, введите 'F' для Фаренгейта или 'K' для Кельвина.";
}

alert(message);


//Task 2

var deposit = 25000;
var rate = 0.05;

var OneYear = deposit * (1 + rate);
var TwoYears = deposit * Math.pow(1 + rate, 2);
var ThreeYears = deposit * Math.pow(1 + rate, 3);

// Вывод результатов в виде всплывающих окон
alert('Сумма вклада через год: ' + OneYear.toFixed(2));
alert('Сумма вклада через два года: ' + TwoYears.toFixed(2));
alert('Сумма вклада через три года: ' + ThreeYears.toFixed(2));

