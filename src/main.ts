import './style.scss'
// console.log(4545)

// *********************************************************************************************************

// Модуль 1 ТЕМА: ВВЕДЕНИЕ В JAVASCRIPT
// Арифметические операторы

// DZ_Modul_1_Week_1 - Выполнено польностью.

// *********************************************************************************************************


// 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

// let userName = prompt('Введите своё имя.')
// console.log('Имя пользователя:', userName) 
// alert('Привет,' + userName + '!') 


/* 2. Запросите у пользователя год его рождения, посчитайте, 
      сколько ему лет и выведите результат. Текущий год укажите в коде как константу.*/

// const THIS_YEAR = 2024
// console.log('Текущий год:', THIS_YEAR)
// let userYearOfBirth = parseInt(prompt('Введите год своего рождения.', '1')  as string)
// console.log('Год рождения пользователя:', userYearOfBirth)
// let userAge = THIS_YEAR - userYearOfBirth
// console.log('Возраст пользователя:', userAge)
// alert('Вам ' + userAge)


// 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата. 

// let squareSideLength = prompt('Введите длину стороны квадрата.')
// console.log('Длина стороны квадрата:', squareSideLength)
// let perimeter = squareSideLength * 4
// console.log('Периметр квадрата равен', perimeter)
// alert('Периметр квадрата равен ' + perimeter)


// 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.

// const PI = 3.14
// let r = parseInt(prompt('Введите радиус окружности.', '1')  as string)
// console.log('Радиус окружности:', r)
// let S = PI * r**2
// console.log('Площадь окружности с радиусом', r, 'равна', S)


/*5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов 
  он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, 
  чтобы успеть вовремя.*/

// let S = parseInt(prompt('Введите расстояние в км между двумя городами.', '1') as string)
// console.log('Расстояние:', S, 'км')
// let t = parseInt(prompt('Введите за сколько часов Вы хотите добраться.', '1') as string)
// console.log('Время:', t, 'ч')
// let v = S / t
// console.log('Скорость, с которой необходимо двигаться, чтобы успеть вовремя:', v, 'км/ч')



/*6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. 
   Курс валюты храните в константе.*/

// const evroToDollarExchange = .93
// let amountInDollars = parseInt(prompt('Введите сумму в долларах', '1') as string)
// let amountInEuros = amountInDollars * evroToDollarExchange
// console.log('Сумма в евро:', amountInEuros)



/*7. Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов 
   размером в 820 Мб помещается на флешку.*/

//  const oneGigabyteToMegabytes = 1024
//  let fileSize = 820
//  let volumeInGigabytes = parseInt(prompt('Укажите объём флешки в Гб', '1') as string)
//  let numberOfFiles = parseInt((volumeInGigabytes * oneGigabyteToMegabytes) / fileSize)
//  console.log('Количество файлов размером по 820 Мб, которое помещается на флешку:', numberOfFiles, 'файлов')

// Вариант 2
//  const oneGigabyteToMegabytes2 = 1024
//  let fileSize2 = 820
//  let volumeInGigabytes2 = parseInt(prompt('Укажите объём флешки в Гб', '1') as string)
//  let numberOfFiles2 = parseInt(((volumeInGigabytes2 * oneGigabyteToMegabytes2) - ((volumeInGigabytes2 * oneGigabyteToMegabytes2) % fileSize2)) / fileSize2)
//  console.log('Количество файлов размером по 820 Мб, которое помещается на флешку:', numberOfFiles2, 'файлов')



/*8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. 
   Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.*/

// let sum = 160
// let price = 30

// let numberOfChocolates = parseInt(sum / price)
// console.log('Количество шоколдано, которое Вы можете купить', numberOfChocolates)

// let residualAmount = sum - (price * numberOfChocolates)
// console.log('Остаток денег:', residualAmount)


// // Вариант 2.

// let sum2 = 160
// let price2 = 30

// let numberOfChocolates2 = parseInt(sum2 / price2)
// console.log('Количество шоколдано, которое Вы можете купить', numberOfChocolates2)

// let residualAmount2 = parseInt(sum2 % price2)
// console.log('Остаток денег:', residualAmount2)



/*9. Запросите у пользователя трехзначное число и выведите его задом наперед. 
      Для решения задачи вам понадобится оператор % (остаток от деления).*/

// let num1 = 749

// let num2 = parseInt((num1 % 10) * 100) + parseInt(((num1/10) % 10)) * 10 + parseInt(((num1/100) % 10))

// console.log(num2)



/*10. Запросите у пользователя целое число и выведите в ответ, четное число или нет. 
        В задании используйте логические операторы. В задании не надо использовать if или switch.*/


//   let num = 11
//   let parity = num % 2 == 0 ? 'even' : 'odd'
//   console.log(parity)


//   let num = 11
//   let parity = (num % 2 == 0) ? 'even' : 'odd'
//   console.log(parity)


//   Вариант 2

// let num = 12

// if (num % 2 == 0) {
//   console.log('Число', num, 'чётное')
// } else console.log('Число', num, 'не чётное')

// Вариант 3

// let num = 13

// switch (num % 2) {
//   case 0:
//     console.log('Число', num, 'чётное')                  
//     break;

//   case 1:
//     console.log('Число', num, 'не чётное')                  
//     break;

//   default:
//     break;
// }


// ___________________________________________________________________________________________________________




// *********************************************************************************************************

// Модуль 1 ТЕМА: ВВЕДЕНИЕ В JAVASCRIPT
// Арифметические операторы

// PZ_Modul_1_Week_1 - Выполнено польностью.

// *********************************************************************************************************



/*1. Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.*/

// let num1 = 3
// let num2 = num1**2
// console.log('Число', num1, 'в степени 2 равно:', num2)


/* 2. Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.*/

// let num1 = 2
// let num2 = 3
// let average = (num1 + num2) / 2
// console.log('Среднее арифметическое двух чисел', num1, 'и', num2, 'равно:', average)



//  3. Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.

// let squareLength = 5
// let s = squareLength**2
// console.log('Площадь квадрата со стороной', squareLength, 'равна:', s)



/*4. Реализуйте конвертор из километров в мили (пользователь 
   вводит километры, программа выводит мили). 1 км = 0,621371 
   миль. Это значение укажите в коде как константу. kilometers in one mile*/

// const KILOMETERS_IN_ONE_MILE = 1.609344

// let distanceInKm = 2

// let mileage = distanceInKm / KILOMETERS_IN_ONE_MILE

// console.log(distanceInKm, 'км равно ', mileage, 'миль')




/*5. Реализуйте калькулятор. Пользователь вводит два числа, 
  а программа выводит результаты действий + - * / между 
  этими числами.*/

// let num1 = 9
// let num2 = 3

// let additionResult = num1 + num2
// console.log(num1, 'плюс', num2, 'равно:', additionResult)

// let subtractionResult = num1 - num2
// console.log(num1, 'минус', num2, 'равно:', subtractionResult)

// let multiplicationResult = num1 * num2
// console.log(num1, 'умножить на', num2, 'равно:', multiplicationResult)

// let divisionResult = num1 / num2
// console.log(num1, 'разделить на', num2, 'равно:', divisionResult)



/*6. Пользователь вводит значения a и b для формулы a * x + b = 0, 
     а программа считает и выводит значение x.
     ax = -b
     x = -b/a */

// let a = 2
// let b = 3
// let x = - b/a
// console.log(x)



/*7. Запросите у пользователя текущее время (часы и минуты) 
     и выведите, сколько часов и минут осталось до следующего дня.*/

//  let userHours = 14
//  let userMinutes = 14

//  let hoursLeftNextDay = (23 - userHours)
//  let minutesLefNextDay = (60 - userMinutes)

// console.log('До следующего дня осталось', hoursLeftNextDay, 'часов', minutesLefNextDay, 'минут')



/*8. Запросите у пользователя трехзначное число и выведите 
    вторую цифру этого числа. Для решения задачи используйте 
    оператор % (остаток от деления).*/

// let num = 486

// let result = parseInt(((num/10) % 10))
// console.log(result)



/*9. Запросите у пользователя пятизначное число и переместите последнюю цифру в начало 
     (из числа 12345 должно получиться число 51234). */

//  let num1 = 78908

//  let num2 = parseInt((num1 % 10)) * 10000 + parseInt(num1/10 % 10000)

//  console.log(num2)




/* 10. Зарплата работника составляет $250 + 10% от продаж. 
  Запросите общую сумму продаж за месяц и посчитайте 
  зарплату.*/

// const SALARY = 250
// const SALES_Fee = 0.1

// let totalSalesMonth = 5783

// let monthlyEarnings = SALARY + (totalSalesMonth * SALES_Fee)

// console.log(monthlyEarnings)



// ___________________________________________________________________________________________________________




// 22.02.2024 Какое-то практическое задание на уроке.

// let num = -5
// let result

// if (num > 0) {
//   console.log ('1')
//   result = 1
// } else if (num < 0) {
//   console.log ('-1')
//   result = -1
// } else {
//   console.log ('0')
//   result = 0
// }

// console.log(result)


// let result

// (a + b < 4) ? 



// ___________________________________________________________________________________________________________



// 27.02.2024 Практическая работа в классе

/* Напишите условие if для проверки, что переменная age находится в диапазоне между 
  14 и 90 включительно.
  «Включительно» означает, что значение переменной age может быть равно 14 или 90.*/

// {  
//    let age = 14

//     if (age >= 14 && age <= 90) {
//       console.log('Диапазон от 14 до 90')
//     } else console.log('Возраст вне диапазона')
// }



/*  Напишите условие if для проверки, что значение переменной age 
    НЕ находится в диапазоне 14 и 90 включительно.
    Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.*/

// {
//     let age = 91

//     if (age < 14 || age > 90) {
//       console.log('НЕ находится в диапазоне')
//     } else console.log('В диапазоне')
// }

// Вариант 2

// {
//     let age = 91

//     if (!(age >= 14) || !(age <= 90)) {
//       console.log('НЕ находится в диапазоне')
//     } else console.log('В диапазоне')
// }


/*Напишите код, который будет спрашивать логин с помощью prompt.
 Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – 
 показать «Отменено», в противном случае отобразить «Я вас не знаю».
 Пароль проверять так:
 Если введён пароль «Я главный», то выводить «Здравствуйте!»,
 Иначе – «Неверный пароль»,
 При отмене или в случае если ничего не введено – «Отменено».
 
 Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.
 Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. 
 Нажатие клавиши Esc во время запроса возвращает null.*/


// let userLogin = ''
// let userPassword = ''

// userLogin = prompt ('Ввведите логин') as string

// if (userLogin == '' || userLogin == null) {
//   console.log('Отменено')
// } else if (userLogin == 'Админ') {
//   userPassword = prompt ('Ввведите пароль') as string

//     if (userPassword == 'Я главный') {
//         console.log('Здравствуйте!')
//     } else if (userPassword == '' || userPassword == null) {
//         console.log('Отменено')
//     } else console.log('Неверный пароль')

// } else console.log('Я Вас не знаю!')




// ___________________________________________________________________________________________________________



// 1.
// let x=5
// if(x%2)
// console.log("odd")
// else
// console.log("even")


// 2.

// let x = +prompt ('Введите число от 1 до 5') as number
// let str = ''

// switch (x) {
//       case 1: str += '1'
//       console.log(str)
//       case 2: str += '2'
//       console.log(str)
//       case 3: str += '3'
//       console.log(str)
//       case 4: str += '4'      
//       console.log(str)    

//       default: str += '5'    
//       console.log(str)
// }
// alert(str)


// 3.

// пользователь вводит число «х». Считаем, что пользовательский ввод 
// ограничен значениями от 1 до 10. Программа выводит 
// числа от «х» до 5, если х≤5, иначе — числа от «х» до 10. 

// let x = +prompt ('Введите число от 1 до 10.') as number
// let str = ''

// if (x <= 5 && x > 0) {
//       switch (x) {
//             case 1: str += '1 '
//                   console.log(str)
//             case 2: str += '2 '
//                   console.log(str)
//             case 3: str += '3 '
//                   console.log(str)
//             case 4: str += '4 '      
//                   console.log(str) 
//             case 5: str += '5 '      
//                   console.log(str)
//       }
// } else if (x > 5 && x <= 10) {
//       switch (x) {
//             case 6: str += '6 '
//                   console.log(str)
//             case 7: str += '7 '
//                   console.log(str)
//             case 8: str += '8 '
//                   console.log(str)
//             case 9: str += '9 '      
//                   console.log(str) 
//             case 10: str += '10 '      
//                   console.log(str)
//       }
// } else { 
//       console.log('Введите число из диапазона от 1 до 10.')
//       alert('Введите число из диапазона от 1 до 10.')
// }
// alert(str)


// 4.

// let x = confirm('Хочешь мороженку?')

// if (x == true) alert('Ты - сладкоежка :-)')
// else if (x == false) alert('Передай мороженое в фонд сладкоежек.')


// 5.
// let x = '10px'
// let y = '3px'
// console.log(x > y)
// console.log(x < y)
// console.log(+x > +y)
// console.log(+x < +y)
// console.log(parseInt(x) > parseInt(y))
// console.log(parseInt(x) < parseInt(y))


// 6.
// console.log(typeof '1')
// console.log(typeof 1)
// console.log(typeof (1))
// console.log(typeof typeof 1)
// console.log(typeof typeof '1')
// console.log(typeof 1 == 'number')
// console.log(typeof 1 == 'string')
// console.log(typeof true)
// console.log(typeof null)
// console.log(typeof(1+'true'))
// console.log(typeof('1'+2))
// console.log(typeof('1'+false))

// let y
// console.log(typeof y == 'undefined')
// let x = null
// console.log(typeof x)
// console.log(x === null)

// 7. 
// let x = -1
// if(x < 0)
//  x = -x;
// console.log(x)

// let z
// if (typeof z == 'undefined') z = 0;
// console.log(z)

// 8.
// let x = confirm('Подтвердите своё согласие на отбор Вашего печенья.')
// let result = ''
// switch (x) {
//       case true:
//             result = 'Подтверждено'
//             console.log('Подтверждено')  
//             break;
//       case false:
//             result = 'Отменено'          
//             console.log('Отменено')  
//             break;

//       default:
//             break;
// }
// alert(result)
// console.log(result)

// 9.
// let x = Math.random()
// console.log(x)
// let z = Date()
// console.log(z)
// ___________________________________________________________________________________________________________




// *********************************************************************************************************

// ТЕМА: ВВЕДЕНИЕ В JAVASCRIPT
// Операторы отношений
// Логические операторы
// Условия и условные операторы


// DZ_Modul_1_Week_2  - В работе/ Выполнено 1, 2, 3, 4, 5, 6, 7, 9, 10

// *********************************************************************************************************



/* Вам необходимо самостоятельно решить, для какого задания какой оператор ветвления 
   лучше использовать: if, switch или тернарный.*/


/* 1. Запросить у пользователя его возраст и определить, кем он является: 
      ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).*/

// let userAge = 17

// if (userAge >= 0 && userAge <= 2) {
//    console.log('Пользователь - ребёнок от 0 до 2 лет')
// } else if (userAge > 2 && userAge < 12) {
//    console.log('Пользователь - ребёнок от 3 до 11 лет')
// } else if (userAge >= 12 && userAge < 18) {
//    console.log('Пользователь - подросток')
// }  else if (userAge >= 18 && userAge <= 60) {
//    console.log('Пользователь - взрослый')
// }  else if (userAge < 0) {
//    console.log('Введены некорректные данные')
// } else console.log('Пользователь - пенсионер')

// console.log(typeof userAge)
// console.log(typeof userAge == 'undefined')
// console.log(typeof userAge == 'number')
// console.log(typeof userAge == 'string')



/* 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, 
      который расположен на этой клавише (1–!, 2–@, 3–# и т. д).*/

// let userResult = '1'

// switch (userResult) {

//   case '1':
//     console.log('!')            
//     break;

//   case '2':
//     console.log('@')            
//     break;

//   case '3':
//     console.log('#')            
//     break;

//   case '4':
//     console.log('$')            
//     break;

//   case '5':
//     console.log('%')            
//     break;

//   case '6':
//     console.log('^')            
//     break;

//   case '7':
//     console.log('&')            
//     break;

//   case '8':
//     console.log('*')            
//     break;

//   case '9':
//     console.log('(')            
//     break;

//   case '0':
//     console.log(')')            
//     break;

//   default:
//     break;
// }


//  3. Запросить у пользователя трехзначное и число и проверить, 
//       есть ли в нем одинаковые цифры.

// let userNum = 345
// console.log(parseInt(userNum/100%10))
// if (parseInt(userNum/100%10) == parseInt(userNum/10%10) || 
// parseInt(userNum/100%10) == userNum%10 ||
// parseInt(userNum/10%10) == userNum%10)
// console.log('есть одинаковые цифры')




//    4. Запросить у пользователя год и проверить, високосный он или нет. 
//      Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

// let userYear = 2020
// let days_in_year = 0

// if ((userYear % 4 == 0 && userYear % 100 == 0 && userYear % 400 == 0) || 
//     (userYear % 4 == 0 && userYear % 100 != 0 && userYear % 400 != 0)) { 
//       days_in_year = 366
//       console.log('Год является високосным.')
// } else { 
//       days_in_year = 365
//       console.log('Год не является високосным.')
// }


/*Високосный год не только должен быть кратен 4 (делиться на 4), но и:
Если год при кратности четырём делится на 100 — он не високосный
Если год при кратности четырём делится на 400 без остатка — он всегда високосный
Год является високосным, если год делится на 4 без остатка
Год не является високосным, если он полностью делится и на 4, и на 100
Год является високосным, если он делится и на 4, и на 100, и на 400
Например:
2008 год является високосным, он делится на 4, но не на 100 или 400 без остатка
1900 год не был високосным, он  делится на 4, а также на 100, но не на 400
2000 год был високосным, он делится на 4, на  100 и  на 400 полностью

Проще всего считать високосными годами те, что делятся на 4 и не делятся на 128 без остатка. 
А те что делятся на 4 и на 128 это не високосные года.*/



//  5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

// let num1 = 121

// let num2 = parseInt((num1 % 10) * 100) + parseInt(((num1/10) % 10)) * 10 + parseInt(((num1/100) % 10))

// console.log(num2)

// num1 == num2 ? console.log('Число является палиндромом') : console.log('Число НЕ является палиндромом')




//  6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, 
//  UAN или AZN, и получает в ответ соответствующую сумму.

// const dollarsToEUR = 1.09
// const dollarsToUAN = 0.14
// const dollarsToAZN = 0.59

// let userUSD = 10
// let userSelection = 'AZN'
// let result = 0

// switch (userSelection) {
//    case 'EUR':
//       result = userUSD / dollarsToEUR
//       break;
//    case 'UAN':
//       result = userUSD / dollarsToUAN
//       break;
//    case 'AZN':
//       result = userUSD / dollarsToAZN
//       break;

//    default:
//       break;
// }

// console.log(result)



//  7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, 
//     от 300 до 500 – 5%, от 500 и выше – 7%. 

// Сумма покупки пользователя
// let userAmountOfCost = 400

// Сумма к оплате
// let amountToBePaid = 0

// if (userAmountOfCost >= 200 && userAmountOfCost < 300) {
//       amountToBePaid = userAmountOfCost - (userAmountOfCost * 0.03)
// } else if (userAmountOfCost >= 300 && userAmountOfCost < 500) {
//       amountToBePaid = userAmountOfCost - (userAmountOfCost * 0.05)
// } else if (userAmountOfCost >= 500) {
//       amountToBePaid = userAmountOfCost - (userAmountOfCost * 0.07)
// } else {
//       amountToBePaid = userAmountOfCost
// }

// console.log(amountToBePaid)





// 8. Запросить у пользователя длину окружности и периметр квадрата. 
//    Определить, может ли такая окружность поместиться в указанный квадрат. 


// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. 
//    За каждый правильный ответ начисляется 2 балла. 
//    После вопросов выведите пользователю количество набранных баллов.

// let question = ''
// let points = 0

// question = prompt('Вопрос 1. Сколько звёзд в Солнечной системе. \n a. Сотни миллиардов \n b. Одна \n c. Примерно один миллион') as string

// if(question == 'b') points += 1

// question = prompt('Вопрос 2. Как называется наша галактика. \n a. Млечный Путь \n b. Андромеда \n c. Сириус') as string

// if(question == 'a') points += 1

// question = prompt('Вопрос 3. Земля - какая по счёту от Солнца? \n a. Вторая \n b. Четвёртая \n c. Третья') as string

// if(question == 'c') points += 1

// alert('Сумма набранных баллов: ' + points)

// console.log('Сумма набранных баллов: ', points)



// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. 
//     Учтите возможность перехода на следующий месяц, год, а также високосный год. 

// Переменные для пользовательского ввода: день, месяц, год
// let userDay = +prompt('Введите день') as number
// let userMonth = +prompt('Введите месяц') as number
// let userYear = +prompt('Введите год') as number

// // Условие, если пользователь введёт существующий месяц
// if(userMonth >= 1 && userMonth <= 12) {
      
//       // Условие для месяцев с количеством дней: 30
//       if(userMonth == 4 || userMonth == 6 || userMonth == 9 || userMonth == 11) {

//             if(userDay >= 1 && userDay <= 29) {  
//                   userDay ++
//             } else if(userDay == 30) {
//                   userDay = 1
//                   userMonth++
//             } else {   // Условие, если пользователь введёт несуществующую дату
//                   console.log("Некорректная дата")
//                   alert("Некорректная дата")                  
//             }

//       // Условие для февраля
//       } else if(userMonth == 2) {
            
//             // Условие для февраля, если год является високосным
//             if((userYear % 4 == 0 && userYear % 100 == 0 && userYear % 400 == 0) || 
//             (userYear % 4 == 0 && userYear % 100 != 0 && userYear % 400 != 0)) {

//                   if(userDay >= 1 && userDay <= 28) {
//                         userDay++
//                   } else if(userDay == 29) {
//                         userDay = 1
//                         userMonth++
//                   } else { // Условие, если пользователь введёт несуществующую дату
//                         console.log("Некорректная дата")
//                         alert("Некорректная дата")                       
//                   }

//             // Условие для февраля, если год НЕ является високосным
//             } else {

//                   if(userDay >= 1 && userDay <= 27) {
//                         userDay++
//                   } else if(userDay == 28) {
//                         userDay = 1
//                         userMonth++
//                   } else { // Условие, если пользователь введёт несуществующую дату
//                         console.log("Некорректная дата")
//                         alert("Некорректная дата")                        
//                   }
//             }

//       // Условие для декабря, переход на следующий год
//       } else if(userMonth == 12) {

//                   if(userDay >= 1 && userDay <= 30) {  
//                         userDay ++
//                   } else if(userDay == 31) {
//                         userDay = 1
//                         userMonth = 1
//                         userYear++
//                   } else { // Условие, если пользователь введёт несуществующую дату
//                         console.log("Некорректная дата")
//                         alert("Некорректная дата")                       
//                   }

//       // Условие для месяцев с количеством дней: 31
//       } else {

//                   if(userDay >= 1 && userDay <= 30) {  
//                         userDay ++
//                   } else if(userDay == 31) {
//                         userDay = 1
//                         userMonth++
//                   } else { // Условие, если пользователь введёт несуществующую дату
//                         console.log("Некорректная дата")
//                         alert("Некорректная дата")
//                   }
//             }
      
// // Условие, если пользователь введёт НЕсуществующий месяц
// } else {
//       console.log("Некорректная дата")
//       alert("Некорректная дата")
// }

// console.log(userDay, userMonth, userYear)
// // Вывод результата
// alert(userDay + ' ' + userMonth + ' ' + userYear)



// ___________________________________________________________________________________________________________





// *********************************************************************************************************

// ТЕМА: ВВЕДЕНИЕ В JAVASCRIPT
// Операторы отношений
// Логические операторы
// Условия и условные операторы


// PZ_Modul_1_Week_2  - Выполнено полностью. Выполнено: IF полностью  SWITCH полностью  тернарный: полностью

// *********************************************************************************************************



/*  ■ Задания, в которых необходимо использовать IF.*/

/*  1. Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.*/

// let num = -85

// if (num > 0) {
//    console.log('Число', num, 'положительное')
// } else if (num < 0) {
//    console.log('Число', num, 'отрицательное')
// } else console.log('Введённое число: ', num)


/*  2. Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).*/

// let userAge = 100500

// if (userAge > 0 && userAge < 100) {
//    console.log('Ваш возраст в годах:', userAge)
// } else if (userAge >= 100 && userAge <= 120) {
//    console.log('Вы - долгожитель. Ваш возраст в годах:', userAge)
// } else if (userAge > 120) {
//    console.log('Вы - Горец. Ваш возраст в годах:', userAge)
// } else if (userAge == 0) {
//    console.log('Вы младенец')
// } else console.log('Вы ещё не родились')



//   3. Запросить у пользователя число и вывести его модуль (|7| = 7, |-7| = 7).

// let num = -5

// if (num < 0) {
//   num *= -1
// } 
// console.log(num)



// 4. Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных.

// let userHours = 28
// let userMinutes = -20
// let userSeconds = 330

// if (userHours > 24 || userHours < 0 
//    || userMinutes > 60 || userMinutes < 0 
//    || userSeconds > 60 || userSeconds < 0) {
//    console.log('Вы ввели некорректные данные')
// }

// if (userHours > 24 || userHours < 0)
// console.log('Количество часов должно быть в диапазоне от 0 до 24')
// if (userMinutes > 60 || userMinutes < 0)
// console.log('Количество минут должно быть в диапазоне от 0 до 60')
// if (userSeconds > 60 || userSeconds < 0)
// console.log('Количество секунд должно быть в диапазоне от 0 до 60')



/*   5. Запросить координаты точки (x, y) и определить номер четверти, в которую попала эта точка. 
        Необходимо учесть случаи попадания точки на оси X или Y или в начало координат.*/

//   let dotX = 8
//   let dotY = -1

//   if (dotX == 0 && dotY == 0) console.log('Точка - в начале координат')
//   if (dotX == 0 && dotY != 0) console.log('Точка - на оси Y')
//   if (dotX != 0 && dotY == 0) console.log('Точка - на оси X')
//   if (dotX > 0 && dotY > 0) console.log('Точка - в I четверти')
//   if (dotX < 0 && dotY > 0) console.log('Точка - в II четверти')
//   if (dotX < 0 && dotY < 0) console.log('Точка - в III четверти')
//   if (dotX > 0 && dotY < 0) console.log('Точка - в IV четверти')




// ■ Задания, в которых необходимо использовать SWITCH.

// 1. Запросить у пользователя номер месяца и вывести на экран его название.

//  let monthNumber = '1'

//   switch (monthNumber) {

//     case '1':
//       console.log('Январь')            
//       break;

//     case '2':
//       console.log('Февраль')            
//       break;

//     case '3':
//       console.log('Март')            
//       break;

//     case '4':
//       console.log('Апрель')            
//       break;

//     case '5':
//       console.log('Май')            
//       break;

//     case '6':
//       console.log('Июнь')            
//       break;

//     case '7':
//       console.log('Июль')            
//       break;

//     case '8':
//       console.log('Август')            
//       break;

//     case '9':
//       console.log('Сентябрь')            
//       break;

//     case '10':
//       console.log('Октябрь')            
//       break;

//     case '11':
//       console.log('Ноябрь')            
//       break;

//     case '12':
//       console.log('Декабрь')            
//       break;

//     default:
//       break;
//   }


// 2. Реализовать калькулятор. Пользователь вводит 2 числа и 
// знак (+ - * /). В зависимости от введенного знака решить 
// пример и вывести результат.

// let num1 = 9
// let num2 = 3
// let userOperator = '-'
// let result = 0

// switch (userOperator) {
//    case '+':
//       result = num1 + num2
//       break;

//    case '-':
//       result = num1 - num2
//       break;

//    case '*':
//       result = num1 * num2
//       break;

//    case '/':
//       result = num1 / num2
//       break;

//    default:
//       break;
// }

// console.log(num1, userOperator, num2, '=', result)




// ■ Задания, в которых необходимо использовать тернарный оператор.

// 1. Запросить 2 числа и вывести большее из них.

// let num1 = 19
// let num2 = 32

// num1 > num2 ? console.log(num1) : console.log(num2)



// 2. Запросить 1 число и проверить, оно кратно 5 или нет.

// let num = 150

// num % 5 == 0 ? console.log('Число', num, 'кратно 5') : console.log('Число', num, 'не кратно 5')


/*3. Запросить у пользователя название планеты. Если пользователь ввел «Земля» или «земля», 
то вывести «Привет, землянин!», в остальных случаях вывести «Привет, инопланетянин!». */


//  let userPlanet = 'Юпитер'

//  userPlanet == 'Земля' || userPlanet == 'земля' ? console.log('Привет, землянин!') : console.log('Привет, инопланетянин!')



// ___________________________________________________________________________________________________________






// *********************************************************************************************************

// Циклы

// DZ_Modul_1_Week_3  - В работе.   Выполнено: 1, 2, 3, 

// *********************************************************************************************************



//  Вам необходимо самостоятельно решить, для какого задания какой цикл лучше использовать: WHILE, DO WHILE или FOR.


//     1. Подсчитать сумму всех чисел в заданном пользователем диапазоне. 

// let num1 = 2
// let num2 = 5
// let sum = 0

// for (let i = num1; i <= num2; i++) {
//       sum += i
// }

// console.log(sum)


//     2. Запросить 2 числа и найти только наибольший общий делитель.

// let num1 = 28
// let num2 = 35
// let buf = 0
// if (num1 > num2) { buf = num1; num1 = num2; num2 = buf; } 
// let i = num1
// let greatestCommonDivisor = 0

// do {

//       if (num1%i == 0 && num2%i == 0) {
//             greatestCommonDivisor = i
//             break
//       }

//       i--

// } while (i > 0);

// console.log(greatestCommonDivisor)


// Вариант 2.

// let num1 = 50
// let num2 = 35
// let buf = 0
// if (num1 > num2) { buf = num1; num1 = num2; num2 = buf; } 
// let i = 1
// let greatestCommonDivisor = 0

// do {

//       if (num1 % i == 0 && num2 % i == 0) {
//             greatestCommonDivisor = i
//       }

//       i++

// } while (i <= num1);

// console.log(greatestCommonDivisor)


//     3. Запросить у пользователя число и вывести все делители этого числа.

// let num = 50

// for (let i = 1; i <= num; i++) {
//       if (num % i == 0) console.log(i)
// }


//     4. Определить количество цифр в введенном числе.



//     5. Запросить у пользователя 10 чисел и подсчитать, сколько 
//     он ввел положительных, отрицательных и нулей. При этом 
//     также посчитать, сколько четных и нечетных. Вывести 
//     статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

//     6. Зациклить калькулятор. Запросить у пользователя 2 числа 
//     и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока 
//     пользователь не откажется.

//     7. Запросить у пользователя число и на сколько цифр его 
//     сдвинуть. Сдвинуть цифры числа и вывести результат (если 
//     число 123456 сдвинуть на 2 цифры, то получится 345612).


//       8. Зациклить вывод дней недели таким образом: «День недели. 
//       Хотите увидеть следующий день?» и так до тех пор, пока 
//       пользователь нажимает OK. 

// 9. Вывести таблицу умножения для всех чисел от 2 до 9. 
// Каждое число необходимо умножить на числа от 1 до 10.

// 10. Игра «Угадай число». Предложить пользователю загадать 
// число от 0 до 100 и отгадать его следующим способом: 
// каждую итерацию цикла делите диапазон чисел пополам, 
// записываете результат в N и спрашиваете у пользователя 
// «Ваше число > N, < N или == N?». В зависимости от того 
// что указал пользователь, уменьшаете диапазон. Начальный 
// диапазон от 0 до 100, поделили пополам и получили 50. 
// Если пользователь указал, что его число > 50, то изменили 
// диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.




// ___________________________________________________________________________________________________________





// *********************************************************************************************************

// Циклы

// PZ_Modul_1_Week_3   - Сделано: 1, 4, 5

// *********************************************************************************************************



// Для вывода данных используйте alert() или document. write(). Для ввода данных используйте prompt() и confirm().


// ■ Задания, в которых необходимо использовать WHILE.


/* 1. Вывести # столько раз, сколько указал пользователь.*/

// let num = 5
// let i = 0

// while (i < num) {
//   console.log('# ')
//   i++
// }

// Вариант 2

// let num = 8

// while (num) {
//   console.log('# ')
//   num--
// }




/* 2. Пользователь ввел число, а на экран вывелись все числа от введенного до 0.*/









/*3. Запросить число и степень. Возвести число в указанную 
степень и вывести результат.*/


// 4. Запросить 2 числа и найти все общие делители.


// let num1 = 25
// let num2 = 10
// let text = ''
// let min = num1 < num2 ? num1 : num2
// while (min) {
//   if (num1 % min == 0 && num2 % min == 0) {
//       text += min + '_'
//   }

//   min--      
// }

// console.log(text)




// 5. Посчитать факториал введенного пользователем числа.

// { let num = 7
//   let result = 1

//   while (num > 0) {

//     result *= num
//     num--  
//   }
//   console.log(result)
// } 

// {
//   let i = 1
//   let num = 7
//   let result = 1

//   while (i <= num) {
//     result *= i
//     i++
//   }
//   console.log(result)
// }



/*■ Задания, в которых необходимо использовать DO WHILE.

      1. Предлагать пользователю решить пример 2 + 2 * 2 до тех 
      пор, пока он не решит его правильно.

      2. Делить число 1000 на 2 до тех пор, пока не получится число 
      меньше 50. Вывести это число и сколько делений произвели.


■ Задания, в которых необходимо использовать FOR.

      3. Вывести все числа от 1 до 100, которые кратные указанному 
      пользователем числу.

      4. Вывести каждый 4-й элемент из указанного пользователем 
      диапазона. Пользователь указывает минимальное и максимальное значения диапазона. 

      5. Запросить число и проверить, простое ли оно. Простое 
      число делится без остатка только на себя и на единицу.
 

*/



// ___________________________________________________________________________________________________________




// *********************************************************************************************************

// Функции

// PZ_Modul_1_Week_4   В работе.

// *********************************************************************************************************




//  1. Написать функцию, которая принимает 2 числа и возвращает меньшее из них


// function getMin (a:number, b:number) {

//   return a < b ? a : b

// }

// let num1 = 48
// let num2 = 434

// console.log(getMin(num1, num2))


// 2. Написать функцию, которая возводит переданное число в указанную степень.


//   function pow (x:number, n:number) {

//         return x**n

//   }

//   let num1 = 2
//   let num2 = 4

// console.log(pow(num1, num2))



// 3. Написать функцию, которая принимает 2 числа и знак (+ - * /), считает пример и возвращает результат. 


// function calcNumbers (a:number, b:number, c:string) {

//       let sum = 0

//       switch (c) {
//         case '+':
//           sum = a + b
//           break;

//         case '-':
//           sum = a - b
//           break;

//         case '*':
//           sum = a * b
//           break;

//         case '/':
//           sum = a / b
//           break;

//           default:
//             break;
//           }

//       return sum
// }

// let num1 = 2
// let num2 = 4

// console.log(calcNumbers(num1, num2, '+'))


// 4. Написать функцию, которая проверяет, является ли переданное ей число простым   

// ??? ПРОВЕРИТЬ!!!


// function getNum(a:number){
//   for (let i = 2; i <= a !/ 2; i++) {
//   if (a % i !==0)
//   return a
// }
// }

// let num = 5
// console.log(getNum(num))



//  5. Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. 
//     Вызовите функцию для всех чисел от 2 до 9.


// function showMultiplTable(a: number) {
//   let result = ''
//   for (let i = 1; i < 10; i++) {

//     result += i + ' * ' + a + '=' + i * a + '\n'

//   }
//   return result
// }



// console.log(showMultiplTable(2))
// console.log(showMultiplTable(3))
// console.log(showMultiplTable(4))
// console.log(showMultiplTable(5))
// console.log(showMultiplTable(6))
// console.log(showMultiplTable(7))
// console.log(showMultiplTable(8))
// console.log(showMultiplTable(9))



// 6. Написать функцию, которая реализует работу оператора %. 
//    Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй. 
//    В функции использовать только + - * /, оператор % не использовать.


// function remainderDivision(a:number, b:number) {

// }


// 7. Написать функцию, которая принимает от 1 до 5 чисел и 
// возвращает их сумму.

// 8. Написать функцию, которая принимает от 1 до 5 чисел и 
// возвращает большее из них.

// 9. Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. Какие 
// числа выводить, определяется третьим параметром типа 
// bool (true – четные, false – нечетные).


// 10. Написать функцию, которая принимает дату (день, месяц, 
// год) и возвращает дату следующего дня в виде строки 
// «дд.мм.гггг». Проверку на високосный год желательно 
// написать отдельной функцией.


// ___________________________________________________________________________________________________________




// *********************************************************************************************************

// Рекурсия

// DZ_Modul_1_Week_5  В работе.


// *********************************************************************************************************


// * Во всех заданиях обязательно использовать рекурсию.

// 1. Написать функцию возведения числа в степень.

// 2. Написать функцию поиска наибольшего общего делителя.

// 3. Написать функцию для поиска максимальной цифры в числе.

// 4. Написать функцию, которая определяет простое ли переданное число.

// 5. Написать функцию для вывода всех множителей переданного числа в возрастающем порядке. 
// Например: число 18 – множители 2 * 3 * 3.

// 6. Написать функцию, которая возвращает число Фибоначчи 
// по переданному порядковому номеру. 
// Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на 
// том, что каждое число равно сумме двух предыдущих чисел. 
// Например: порядковый номер 3 – число 2, порядковый 
// номер 6 – число 8

// ___________________________________________________________________________________________________________






// *********************************************************************************************************

// Рекурсия

// PZ_Modul_1_Week_5 Рекурсия В работе. Выполнено: 1, 

// *********************************************************************************************************


// 1. Написать функцию, которая вычисляет факториал заданного числа.

// function fact(n:number):number {
//    if(n < 0) return 0
//    else if (n == 1) return 1
//    else return n*fact(n-1)
// }

// let num = 6
// console.log(fact(num))


// 2. Написать функцию, которая выводит все числа из заданного 
// пользователем диапазона в прямом порядке. И еще одну 
// функцию – для вывода в обратном порядке.
// if (num1 > num2) { buf = num1; num1 = num2; num2 = buf; } 

// function showNumbers(n1:number, n2:number):void {

//    // let buff = 0
//    // if (n1 > n2) { 
//    //    buff = n1 
//    //    n1 = n2
//    //    n2 = buff
//    // }

//    if (n1 > n2) {
//       return 
//    } 
//    console.log(n1)
//       showNumbers(n1 + 1, n2)
// }

// console.log(showNumbers(2, 5))

// function showNumbers2(n1:number, n2:number):void {

//    // let buff = 0
//    // if (n1 > n2) { 
//    //    buff = n1 
//    //    n1 = n2
//    //    n2 = buff
//    // }

//    if (n1 > n2) {
//       return 
//    } 
//    console.log(n1)
//       showNumbers2(n1, n2-1)
// }

// console.log(showNumbers2(2, 5))

// 3. Написать функцию, которая выводит переданное ей число 
// задом наперед. 
// Например: число 1234 вывести как 4321.


// function gerReverseNumber (n:number):number {
//       if(n < 10) {
//          return n
//       } else {
//          return +(n%10 + '' + gerReverseNumber(Math.floor(n/10)))
//       }
// }

// console.log(gerReverseNumber(1234))

// 4. Написать функцию, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.

// function getSumOfDigits (n:number):number {
//    if(n < 10) {
//       return n
//    } else {
//       return n%10 + getSumOfDigits(Math.floor(n/10))
//    }
// }

// console.log(getSumOfDigits(1234))



// 5. Написать функцию, которая принимает число и выводит 
// соответствующее количество вложенных пар круглых скобок. 
// Например: число 4 – (((())))

// function getBracketsPairsByNum (n:number) {
//    if (!n) {
//       return ''
//    } else {
//    return '(' + getBracketsPairsByNum(n-1) + ')'
// }
// }

// console.log(getBracketsPairsByNum(4))


// ___________________________________________________________________________________________________________





// *********************************************************************************************************

// Объект

// DZ_Modul_2_Week_1   В работе.

// *********************************************************************************************************




// Задание 1
// Создать объект, описывающий автомобиль (производитель, 
// модель, год выпуска, средняя скорость), и следующие функции 
// для работы с этим объектом.

// type Car = {
//    manufacturer: string,
//    model: string,
//    year: number,
//    averSpeed: number,
// }

// const automobile = {
//    manufacturer: 'Japan',
//    model: 'f2x',
//    year: 1996,
//    averSpeed: 98,
// }


// 1. Функция для вывода на экран информации об автомобиле.

// function showAutomobile (auto: Car) {

// }


// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.


// Задание 2
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.


// Задание 3


// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.

// 2. Функция изменения времени на переданное количество 
// секунд.

// 3. Функция изменения времени на переданное количество 
// минут.

// 4. Функция изменения времени на переданное количество 
// часов.


// Учтите, что в последних 3-х функциях, при изменении одной 
// части времени, может измениться и другая. Например: если ко 
// времени «20:30:45» добавить 30 секунд, то должно получиться 
// «20:31:15», а не «20:30:75».


// ___________________________________________________________________________________________________________





// *********************************************************************************************************

// Объект

// PZ_Modul_2_Week_1    В работе.


// *********************************************************************************************************



// Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.

// A - левая верхнаяя точка
// B - правая верхняя точка = Cx, Ay
// C - нижняя правая точка
// D - левая нижняя точка = Ax. Cy

// type Fraction = {
//       x: number,
//       y: number,
// }

// Объект - прямоугольник, известны только две точки
// const rectangle = {
//       A: {
//             x: 2,
//             y: 4,
//       },
//       B: {
//             x: undefined,
//             y: undefined,
//       },
//       C: {
//             x: 6,
//             y: 1,
//       },
//       D: {
//             x: undefined,
//             y: undefined,
//       },
// } as Record<string, any>

// Находим остальные точки
// rectangle.B.x = rectangle.C.x
// rectangle.B.y = rectangle.A.y
// rectangle.D.x = rectangle.A.x
// rectangle.D.y = rectangle.C.y


// 1. Функция принимает объект-прямоугольник и выводит 
// информацию о нем (где какая точка расположена).

// function printRectangle(rec) {
//       for (let key in rec) {

//             console.log(key)
//             console.log(rec[key])
//       }
// }

// printRectangle(rectangle)



// 2. Функция принимает объект-прямоугольник и возвращает
// его ширину.

// function widthRectangle (pr:Fraction) {



// }



// 3. Функция принимает объект-прямоугольник и возвращает
// его высоту.
// 4. Функция принимает объект-прямоугольник и возвращает
// его площадь.
// 5. Функция принимает объект-прямоугольник и возвращает
// его периметр.
// 6. Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить
// ширину.
// 7. Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить
// высоту.


// 8. Функция изменения ширины и высоты прямоугольника.
// Она принимает объект-прямоугольник и два значения –
// для изменения ширины и высоты.
// 9. Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его
// сдвинуть.
// 10. Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник и на сколько единиц его
// сдвинуть.
// 11. Функция смещения прямоугольника и по оси X и по
// оси Y. Она принимает объект-прямоугольник и два значения: сдвиг по оси X и сдвиг по оси Y.
// 12. Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и
// координаты точки.


// ___________________________________________________________________________________________________________









// *********************************************************************************************************


// Массивы

// DZ_Modul_2_Week_2   В работе.


// *********************************************************************************************************


// ТЕМА: ОБЪЕКТ. МАССИВЫ. ОБЪЕКТ ARRAY. СТРОКИ. 
// ОБЪЕКТ STRING. ОБЪЕКТ DATE. ОБЪЕКТ MATH. 
// ВВЕДЕНИЕ В ООП

// Задание 1

// Создать массив «Список покупок». Каждый элемент массива 
// является объектом, который содержит название продукта, необходимое количество и куплен или нет. 
// Написать несколько функций для работы с таким массивом.



// 1. Вывод всего списка на экран таким образом, чтобы сначала 
// шли некупленные продукты, а потом – купленные.
// 2. Добавление покупки в список. Учтите, что при добавлении 
// покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, 
// а не добавлять новую. 
// 3. Покупка продукта. Функция принимает название продукта 
// и отмечает его как купленный.
// Задание 2
// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за 
// единицу товара. Написать следующие функции.
// 1. Распечатка чека на экран.
// 2. Подсчет общей суммы покупки.

// 3. Получение самой дорогой покупки в чеке.
// 4. Подсчет средней стоимости одного товара в чеке. 
// Задание 3
// Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
// Написать функцию, которая принимает массив стилей и 
// текст, и выводит этот текст с помощью document.write() в тегах 
// <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве. 
// Задание 4
// Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и 
// названия факультета, для которого она предназначена. 
// Написать несколько функций для работы с ним.
// 1. Вывод на экран всех аудиторий. 
// 2. Вывод на экран аудиторий для указанного факультета.
// 3. Вывод на экран только тех аудиторий, которые подходят для 
// переданной группы. Объект-группа состоит из названия, 
// количества студентов и названия факультета. 
// 4. Функция сортировки аудиторий по количеству мест.
// 5. Функция сортировки аудиторий по названию (по алфавиту).



// ___________________________________________________________________________________________________________






// *********************************************************************************************************


// Массивы


// PZ_Modul_2_Week_2   В работе.



// *********************************************************************************************************



// ТЕМА: ОБЪЕКТ. МАССИВЫ. ОБЪЕКТ ARRAY. СТРОКИ. 
// ОБЪЕКТ STRING. ОБЪЕКТ DATE. ОБЪЕКТ MATH. 
// ВВЕДЕНИЕ В ООП
// Задание 1
// Создать массив из 10 случайных чисел и написать несколько 
// функций для работы с ним.
// 1. Функция принимает массив и выводит его на экран.
// 2. Функция принимает массив и выводит только четные 
// элементы.
// 3. Функция принимает массив и возвращает сумму всех 
// элементов массива.
// 4. Функция принимает массив и возвращает его максимальный элемент.
// 5. Функция добавления нового элемента в массив по указанному индексу.
// 6. Функция удаления элемента из массива по указанному 
// индексу.
// Задание 2
// Создать еще один массив из 5 случайных чисел и написать 
// следующие функции.
// 1. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов 
// без повторений.

// 2. Функция принимает 2 массива и возвращает новый массив, 
// в котором собраны общие элементы (то есть элементы, 
// которые встречаются и в первом и во втором массивах) 
// без повторений.
// 3. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, 
// которых нет во втором массиве. 
// Задание 3
// Создать массив фруктов и отсортировать его по алфавиту. 
// Написать следующие функции.
// 1. Вывод на экран с помощью document.write() в виде списка 
// (с помощью тегов ul и li). 
// 2. Поиск фрукта в массиве. Функция принимает название 
// фрукта и возвращает индекс найденного элемента или -1, 
// если не найден. Поиск должен быть нерегистрозависимым. 




// ___________________________________________________________________________________________________________



//  02/04/2024

// Массивы и функции

// Практика на уроке

// 1.1.  Написать функцию возвращающую массив целых чисел от 0 до 10


// Функция возвращает массив от одного числа до второго, заданных пользователем

// function getArrayOfIintegers(num1: number, num2: number) {
//       let arr = []

//       for (let i = 0; num1 <= num2; i++) {
//             arr[i] = num1
//             num1++
//       }

//       return arr
// }

// console.log(getArrayOfIintegers(0, 10))


// Функция возвращает массив случайных целых чисел от 0 до 10, размер массива задан пользователем

// function getArrayOfIintegers2(num:number) {
//       let arr = []

//       for (let i = 0; i < num; i++) {
//              arr[i] = parseInt(Math.random() * 11)
//       }

//       return arr
// }

// console.log(getArrayOfIintegers2(7))


// 1.2.  Добавить в функцию опциональные параметры начального и конечного значения массива
//     (если конечный элемент массива не передан, то он больше начального на 10) . Вызвать функцию несколько раз

// Заполняет числами от start до end 
// function getArrayOfIintegers3(start=0, end=start+10) {
//       let arr = []

//       for (let i = 0; start <= end; i++) {
//             arr[i] = start
//             start++
//       }

//       return arr
// }

// console.log(getArrayOfIintegers3(2))


// Заполняет случайными числами
// function getArrayOfIintegers4(start=0, end=start+10) {
//       let arr = []

//       for (let i = 0; i < end; i++) {
//             arr[i] = parseInt(Math.random() * 11)
//       }

//       return arr
// }

// console.log(getArrayOfIintegers4(2))




// 1.3*. Написать функцию возвращающюю массив случайных целых чисел. 
      // Функция принимает 1 параметр, количество элементов в будущем массиве

// Функция возвращает массив случайных целых чисел от 0 до 10, размер массива задан пользователем

// function getArrayOfIintegers2(num:number) {
//       let arr = []

//       for (let i = 0; i < num; i++) {
//             //  arr[i] = parseInt(Math.random() * 11)
//             arr.push(Math.floor(Math.random() * 11))
//       }

//       return arr
// }

// console.log(getArrayOfIintegers2(5))



// function funcName (start=0, end=start+10) {
//       return console.log(start, end)
// }

// funcName()


// function generateArray(start=0, end=start+10) {
//       return [0,1,2,3,4,5,6,7,8,9]
//     }
//     console.log(generateArray())
//     console.log(generateArray(20))
//     console.log(generateArray(20))
//     console.log(generateArray(20,50))



// 2.1. В файле html создать пустой div с произвольным id
// 2.2. Получить объект div'а в js при помощи метода document.getElementById(ваш id) as HTMLDivElement

// document.getElementById('Primer')


// 2.3. Вывесли в полученный div текст, "Привет, пользователь"
// 2.4. Написать функцию, которая возвращает текст "Привет, пользователь" или "Привет, <имяПользователя>" в зависимости от переданных параметров и использовать её в задании 2.3.

// Есть массив объектов
// const employees = [
//       { name: 'Федотова Арина Глебовна', department: 'ads', salary: 2100 },
//       { name: 'Голикова Мария Филипповна', department: 'prog', salary: 3500 },
//       { name: 'Панин Александр Германович', department: 'ads', salary: 2100 },
//       { name: 'Романов Эмиль Макарович', department: 'prog', salary: 3100 },
//       { name: 'Смирнов Никита Александрович', department: 'prog', salary: 3800 },
//       { name: 'Александрова Майя Вячеславовна', department: 'prog', salary: 4500 },
//       { name: 'Крылов Богдан Максимович', department: 'disign', salary: 2100 },
//       { name: 'Мухина Айша Константиновна', department: 'disign', salary: 2100 },
//     ]
    
    
    
    
    // Все функции вызывать несколько раз с разными параметрами
    // 3.1. Создать функцию, принимающую массив работников, и возвращающую массив уникальных отделов (department)
    // deps.includes
    // [ads, prog, disign]
    // 3.2. Написать функцию, принимающую массив работников и ключ объекта, по которому сделать сортировку массива
    // Учесть, что строковые параметры сортируются при помощи метода localeCompare, а числовые,- вычитанием
    // function sortEmpl(arr, key: 'name' | 'department' |'salary') {
    // }
    // 3.3. Написать функцию, аналогичную описанной в задании 3.2., но сортирующую в обратном порядке
    // 3.4. Написать функцию, принимающую массив работников и имя, и возвращающую объект сотрудника или undefined
    // 3.5. Написать функцию, принимающую массив работников и название отдела, и возвращающую новый массив, содержащий только сотрудников переданного отдела
    // 3.6. Написать функцию, принимающую массив работников и возвращающую сумму зарплат. Вызвать функцию по каждому отделу и по общему массиву
    
    // 3.7. В HTML создать div для кнопок, задать ему id и получить объект div'a в js, аналогично заданию 2.2.
    // 3.8. Так же как в 3.7 создать ul (as HTMLUListElement) для вывода списка и div для вывода суммы зарплат
    
    // 3.9. Используя массив, полученный в 3.1. Вывести кнопки с названиями отделов + кнопку "Все отделы"
    //      использовать data-атрибут (data-dep), в который поместить название отдела. Для кнопки "Все отделы" data-dep="all"
    // 3.10. Используя div, полученный в задании 3.7
    // div37.addEventListener('click', function (e) {
    //   const target = e.target as HTMLElement
    //   if (target.tagName == 'BUTTON' && target.dataset.dep) {
    //      в зависимости от значения dep выводить в список (ul 3.8) тех сотрудников, которые работают в данном отделе, либо всех, если target.dataset.dep=='all'. Используем логическое ветвление и уже написанные функции
    //      в div (3.8) выводить сумму зарплат
    //   }
    // })






//     11.04.2024  Практика на уроке

// 1. Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

let str = 'федот'

console.log('федот'[0].toUpperCase())