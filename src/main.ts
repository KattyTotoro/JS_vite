import './style.scss'
import axios from 'axios'


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
{
  let sum = 160
  let price = 30

  // @ts-ignore
  let numberOfChocolates = parseInt(sum / price)
  console.log('Количество шоколдано, которое Вы можете купить', numberOfChocolates)

  let residualAmount = sum - (price * numberOfChocolates)
  console.log('Остаток денег:', residualAmount)
}

// // Вариант 2.
{
  let sum2 = 160
  let price2 = 30

  // @ts-expect-error
  let numberOfChocolates2 = parseInt(sum2 / price2)
  console.log('Количество шоколдано, которое Вы можете купить', numberOfChocolates2)

  // @ts-expect-error
  let residualAmount2 = parseInt(sum2 % price2)
  console.log('Остаток денег:', residualAmount2)
}


/*9. Запросите у пользователя трехзначное число и выведите его задом наперед. 
      Для решения задачи вам понадобится оператор % (остаток от деления).*/
{
  let num1 = 749

  // @ts-expect-error
  let num2 = parseInt((num1 % 10) * 100) + parseInt(((num1 / 10) % 10)) * 10 + parseInt(((num1 / 100) % 10))

  console.log(num2)
}

/*10. Запросите у пользователя целое число и выведите в ответ, четное число или нет. 
        В задании используйте логические операторы. В задании не надо использовать if или switch.*/

{
  let num = 11
  let parity = num % 2 == 0 ? 'even' : 'odd'
  console.log(parity)
}
{
  let num = 11
  let parity = (num % 2 == 0) ? 'even' : 'odd'
  console.log(parity)
}

//   Вариант 2
{
  let num = 12

  if (num % 2 == 0) {
    console.log('Число', num, 'чётное')
  } else console.log('Число', num, 'не чётное')
}
// Вариант 3
{
  let num = 13

  switch (num % 2) {
    case 0:
      console.log('Число', num, 'чётное')
      break;

    case 1:
      console.log('Число', num, 'не чётное')
      break;

    default:
      break;
  }
}

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
{
  let x = '10px'
  let y = '3px'
  console.log(x > y)
  console.log(x < y)
  console.log(+x > +y)
  console.log(+x < +y)
  console.log(parseInt(x) > parseInt(y))
  console.log(parseInt(x) < parseInt(y))
  console.log(+false)
  console.log(+true)
  // @ts-expect-error
  console.log(true == 1)
  // @ts-expect-error
  console.log(false == 0)
  console.log(+'')

  // Все значения, которы станут false при преобразовании в булев тип
  console.log(Boolean(''))
  console.log(Boolean(0))
  console.log(Boolean(undefined))
  console.log(Boolean(null))
  console.log(Boolean(NaN))
  console.log(Boolean(false))

  console.log(Boolean(5))
  console.log(Boolean(-5))

  console.log(isNaN(NaN))
  console.log(isNaN(1))


  let rezult = x > y
  console.log(rezult)
  rezult = x < y
  console.log(rezult)
  rezult = 5 < 7
  console.log(rezult)
  rezult = 15 < 7
  console.log(rezult)
  console.log('Я' > 'А')
  console.log('я' > 'Я')
  console.log('z' > 'Z')

  console.log(null === undefined)
  console.log(null == undefined)
  console.log(null == null)
  console.log(undefined == undefined)
}

// 6.
{
  console.log(typeof '1')
  console.log(typeof 1)
  console.log(typeof (1))
  console.log(typeof typeof 1)
  console.log(typeof typeof '1')
  console.log(typeof 1 == 'number')
  console.log(typeof 1 == 'string')
  console.log(typeof true)
  console.log(typeof null)
  console.log(typeof (1 + 'true'))
  console.log(typeof ('1' + 2))
  console.log(typeof ('1' + false))

  let y
  console.log(typeof y == 'undefined')
  let x = null
  console.log(typeof x)
  console.log(x === null)

}

// 7. 
{
  let x = -1
  if (x < 0)
    x = -x;
  console.log(x)

  let z
  if (typeof z == 'undefined') z = 0;
  console.log(z)
}
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
{
  let x = Math.random()
  console.log(x)
  let z = Date()
  console.log(z)
}
// 10.
{
  let aStr = ''
  let bStr = 'Default'

  aStr ||= bStr
  console.log(aStr)
  aStr = aStr ? aStr : bStr
  console.log(aStr)

  aStr = 'Hello'

  aStr &&= aStr + ' user'
  aStr = aStr ? aStr + '!' : aStr
  console.log(aStr)

  console.log(true || true)
  console.log(false || true)
  console.log(true || false)
  console.log(false || false)

  console.log(true && true)
  console.log(false && true)
  console.log(true && false)
  console.log(false && false)

  console.log(!false)
  console.log(!true)
  console.log(!0)
  console.log(!1)
  console.log(!!0)
  console.log(!!1)

}


// ___________________________________________________________________________________________________________




// *********************************************************************************************************

// ТЕМА: ВВЕДЕНИЕ В JAVASCRIPT
// Операторы отношений
// Логические операторы
// Условия и условные операторы


// DZ_Modul_1_Week_2 - Выполнено полностью.

// *********************************************************************************************************



/* Вам необходимо самостоятельно решить, для какого задания какой оператор ветвления 
   лучше использовать: if, switch или тернарный.*/


/* 1. Запросить у пользователя его возраст и определить, кем он является: 
      ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).*/
{
  let userAge = 17

  if (userAge >= 0 && userAge <= 2) {
    console.log('Пользователь - ребёнок от 0 до 2 лет')
  } else if (userAge > 2 && userAge < 12) {
    console.log('Пользователь - ребёнок от 3 до 11 лет')
  } else if (userAge >= 12 && userAge < 18) {
    console.log('Пользователь - подросток')
  } else if (userAge >= 18 && userAge <= 60) {
    console.log('Пользователь - взрослый')
  } else if (userAge < 0) {
    console.log('Введены некорректные данные')
  } else console.log('Пользователь - пенсионер')

  console.log(typeof userAge)
  console.log(typeof userAge == 'undefined')
  console.log(typeof userAge == 'number')
  console.log(typeof userAge == 'string')
}


/* 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, 
      который расположен на этой клавише (1–!, 2–@, 3–# и т. д).*/
{


  let userResult = '1'

  switch (userResult) {

    case '1':
      console.log('!')
      break;

    case '2':
      console.log('@')
      break;

    case '3':
      console.log('#')
      break;

    case '4':
      console.log('$')
      break;

    case '5':
      console.log('%')
      break;

    case '6':
      console.log('^')
      break;

    case '7':
      console.log('&')
      break;

    case '8':
      console.log('*')
      break;

    case '9':
      console.log('(')
      break;

    case '0':
      console.log(')')
      break;

    default:
      break;
  }


}



//  3. Запросить у пользователя трехзначное и число и проверить, 
//       есть ли в нем одинаковые цифры.

{

  let userNum = 343
  // @ts-expect-error
  console.log(parseInt(userNum / 100 % 10))
  // @ts-expect-error
  if (parseInt(userNum / 100 % 10) == parseInt(userNum / 10 % 10) ||
    // @ts-expect-error
    parseInt(userNum / 100 % 10) == userNum % 10 ||
    // @ts-expect-error
    parseInt(userNum / 10 % 10) == userNum % 10)
    console.log('есть одинаковые цифры')
  else console.log('нет одинаковых цифр')

}


//    4. Запросить у пользователя год и проверить, високосный он или нет. 
//      Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

{

  let userYear = 2020
  let days_in_year = 0

  if ((userYear % 4 == 0 && userYear % 100 == 0 && userYear % 400 == 0) ||
    (userYear % 4 == 0 && userYear % 100 != 0 && userYear % 400 != 0)) {
    days_in_year = 366
    console.log('Год является високосным.')
  } else {
    days_in_year = 365
    console.log('Год не является високосным.')
  }

  console.log(days_in_year)
}


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

{

  let num1 = 12321
  // @ts-expect-error
  let num2 = parseInt((num1 % 10) * 10000) + parseInt(((num1 / 10) % 10)) * 1000 + parseInt(((num1 / 100) % 10)) * 100 + parseInt(((num1 / 1000) % 10)) * 10 + parseInt(((num1 / 10000) % 10))

  console.log(num2)

  num1 == num2 ? console.log('Число является палиндромом') : console.log('Число НЕ является палиндромом')

}


//  6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, 
//  UAN или AZN, и получает в ответ соответствующую сумму.

{

  const dollarsToEUR = 1.09
  const dollarsToUAN = 0.14
  const dollarsToAZN = 0.59

  let userUSD = 10
  let userSelection = 'AZN'
  let result = 0

  switch (userSelection) {
    case 'EUR':
      result = userUSD / dollarsToEUR
      break;
    case 'UAN':
      result = userUSD / dollarsToUAN
      break;
    case 'AZN':
      result = userUSD / dollarsToAZN
      break;

    default:
      break;
  }

  console.log(result)

}


//  7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, 
//     от 300 до 500 – 5%, от 500 и выше – 7%. 

{

  // Сумма покупки пользователя
  let userAmountOfCost = 400

  // Сумма к оплате
  let amountToBePaid = 0

  if (userAmountOfCost >= 200 && userAmountOfCost < 300) {
    amountToBePaid = userAmountOfCost - (userAmountOfCost * 0.03)
  } else if (userAmountOfCost >= 300 && userAmountOfCost < 500) {
    amountToBePaid = userAmountOfCost - (userAmountOfCost * 0.05)
  } else if (userAmountOfCost >= 500) {
    amountToBePaid = userAmountOfCost - (userAmountOfCost * 0.07)
  } else {
    amountToBePaid = userAmountOfCost
  }

  console.log(amountToBePaid)

}



// 8. Запросить у пользователя длину окружности и периметр квадрата. 
//    Определить, может ли такая окружность поместиться в указанный квадрат. 
// Если диаметр окружности равен или меньше стороны квадрата, тогда поместится


const PI = 3.14

// let C = +prompt('Введите длину окружности', 12)
// let P = +prompt('Введите периметр квадрата', 12)
let C = 20
let P = 12

// // Если пользоавтель ввёл отрицательное  число
if (C < 0) C *= -1
if (P < 0) P *= -1

// //Вычисление диаметра
let D = C / PI
// //Вычисление стороны квадрата
let a = P / 4 as any

(D <= a) ? console.log('Окружность поместилась в квадрат') : console.log('Окружность НЕ поместилась в квадрат')




// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. 
//    За каждый правильный ответ начисляется 2 балла. 
//    После вопросов выведите пользователю количество набранных баллов.

// let question = ''
// let points = 0

// question = prompt('Вопрос 1. Сколько звёзд в Солнечной системе. \n a. Сотни миллиардов \n b. Одна \n c. Примерно один миллион') as string

// if(question == 'b') points += 2

// question = prompt('Вопрос 2. Как называется наша галактика. \n a. Млечный Путь \n b. Андромеда \n c. Сириус') as string

// if(question == 'a') points += 2

// question = prompt('Вопрос 3. Земля - какая по счёту от Солнца? \n a. Вторая \n b. Четвёртая \n c. Третья') as string

// if(question == 'c') points += 2

// alert('Сумма набранных баллов: ' + points)

// console.log('Сумма набранных баллов: ', points)



// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. 
//     Учтите возможность перехода на следующий месяц, год, а также високосный год. 

{

  // Переменные для пользовательского ввода: день, месяц, год
  // let userDay = +prompt('Введите день')
  let userDay = 28

  // // Если пользователь не введёт дату, присвоится текущая дата.
  // @ts-expect-error
  if (userDay == null || userDay == '') { userDay = new Date().getDate() }

  // let userMonth = +prompt('Введите месяц')
  let userMonth = 2
  // @ts-expect-error
  if (userMonth == null || userMonth == '') { userMonth = new Date().getMonth() + 1 }

  // let userYear = +prompt('Введите год')
  let userYear = 2020
  // @ts-expect-error
  if (userYear == null || userYear == '') { userYear = new Date().getFullYear() }


  // Условие, если пользователь введёт существующий месяц
  if (userMonth >= 1 && userMonth <= 12) {

    // Условие для месяцев с количеством дней: 30
    if (userMonth == 4 || userMonth == 6 || userMonth == 9 || userMonth == 11) {

      if (userDay >= 1 && userDay <= 29) {
        userDay++
      } else if (userDay == 30) {
        userDay = 1
        userMonth++
      } else {   // Условие, если пользователь введёт несуществующую дату
        console.log("Некорректная дата")
        alert("Некорректная дата")
      }

      // Условие для февраля
    } else if (userMonth == 2) {

      // Условие для февраля, если год является високосным
      if ((userYear % 4 == 0 && userYear % 100 == 0 && userYear % 400 == 0) ||
        (userYear % 4 == 0 && userYear % 100 != 0 && userYear % 400 != 0)) {

        if (userDay >= 1 && userDay <= 28) {
          userDay++
        } else if (userDay == 29) {
          userDay = 1
          userMonth++
        } else { // Условие, если пользователь введёт несуществующую дату
          console.log("Некорректная дата")
          alert("Некорректная дата")
        }

        // Условие для февраля, если год НЕ является високосным
      } else {

        if (userDay >= 1 && userDay <= 27) {
          userDay++
        } else if (userDay == 28) {
          userDay = 1
          userMonth++
        } else { // Условие, если пользователь введёт несуществующую дату
          console.log("Некорректная дата")
          alert("Некорректная дата")
        }
      }

      // Условие для декабря, переход на следующий год
    } else if (userMonth == 12) {

      if (userDay >= 1 && userDay <= 30) {
        userDay++
      } else if (userDay == 31) {
        userDay = 1
        userMonth = 1
        userYear++
      } else { // Условие, если пользователь введёт несуществующую дату
        console.log("Некорректная дата")
        alert("Некорректная дата")
      }

      // Условие для месяцев с количеством дней: 31
    } else {

      if (userDay >= 1 && userDay <= 30) {
        userDay++
      } else if (userDay == 31) {
        userDay = 1
        userMonth++
      } else { // Условие, если пользователь введёт несуществующую дату
        console.log("Некорректная дата")
        alert("Некорректная дата")
      }
    }

    // Условие, если пользователь введёт НЕсуществующий месяц
  } else {
    console.log("Некорректная дата")
    alert("Некорректная дата")
  }

  console.log(userDay, userMonth, userYear)
  // Вывод результата
  // alert(`${userDay >= 10 ? userDay : '0' + userDay}.${userMonth >= 10 ? userMonth : '0' + userMonth}.${userYear}`)
  console.log(`${userDay >= 10 ? userDay : '0' + userDay}.${userMonth >= 10 ? userMonth : '0' + userMonth}.${userYear}`)

}

// ___________________________________________________________________________________________________________

// Решение Жени
// let DD = 30
// let MM = 10
// let YY = 2023
// console.log('Введите дату в формате', DD, MM, YY)
// if (MM == 2 && YY % 100 == 0 || YY % 400 == 0 || YY % 4 == 0) {
//   if (DD < 29) {
//     console.log((DD + 1) + '.' + MM + '.' + YY)
//   } else {
//     console.log('1.' + (MM + 1) + '.' + YY)
//   }
// } else {
//   if (MM == 4 || MM == 6 || MM == 9 || MM == 11) {
//     if (DD < 30) {
//       console.log((DD + 1) + '.' + MM + '.' + YY)
//     } else {
//       console.log('1.' + (MM + 1) + '.' + YY)
//     }
//   } else if (MM == 2) {
//     if (DD < 28) {
//       console.log((DD + 1) + '.' + MM + '.' + YY)
//     } else {
//       console.log('1.' + (MM + 1) + '.' + YY)
//     }
//   } else {
//     if (MM == 12 && DD == 31) {
//       console.log('1.' + '1.' + (YY + 1))
//     } else if (DD < 31) {
//       console.log((DD + 1) + '.' + MM + '.' + YY)
//     } else {
//       console.log('1.' + (MM + 1) + '.' + YY)
//     }
//   }
// }


// *********************************************************************************************************

// ТЕМА: ВВЕДЕНИЕ В JAVASCRIPT
// Операторы отношений
// Логические операторы
// Условия и условные операторы


// PZ_Modul_1_Week_2  - Выполнено полностью. Выполнено: IF полностью  SWITCH полностью  тернарный: полностью

// *********************************************************************************************************



/*  ■ Задания, в которых необходимо использовать IF.*/

/*  1. Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.*/
{
  let num = -85

  if (num > 0) {
    console.log('Число', num, 'положительное')
  } else if (num < 0) {
    console.log('Число', num, 'отрицательное')
  } else console.log('Введённое число: ', num)
}

/*  2. Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).*/
{
  let userAge = 100500

  if (userAge > 0 && userAge < 100) {
    console.log('Ваш возраст в годах:', userAge)
  } else if (userAge >= 100 && userAge <= 120) {
    console.log('Вы - долгожитель. Ваш возраст в годах:', userAge)
  } else if (userAge > 120) {
    console.log('Вы - Горец. Ваш возраст в годах:', userAge)
  } else if (userAge == 0) {
    console.log('Вы младенец')
  } else console.log('Вы ещё не родились')
}


//   3. Запросить у пользователя число и вывести его модуль (|7| = 7, |-7| = 7).
{
  let num = -5

  if (num < 0) {
    num *= -1
  }
  console.log(num)
}


// 4. Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных.
{
  let userHours = 28
  let userMinutes = -20
  let userSeconds = 330

  if (userHours > 24 || userHours < 0
    || userMinutes > 60 || userMinutes < 0
    || userSeconds > 60 || userSeconds < 0) {
    console.log('Вы ввели некорректные данные')
  }

  if (userHours > 24 || userHours < 0)
    console.log('Количество часов должно быть в диапазоне от 0 до 24')
  if (userMinutes > 60 || userMinutes < 0)
    console.log('Количество минут должно быть в диапазоне от 0 до 60')
  if (userSeconds > 60 || userSeconds < 0)
    console.log('Количество секунд должно быть в диапазоне от 0 до 60')
}


/*   5. Запросить координаты точки (x, y) и определить номер четверти, в которую попала эта точка. 
        Необходимо учесть случаи попадания точки на оси X или Y или в начало координат.*/
{
  let dotX = 8
  let dotY = -1

  if (dotX == 0 && dotY == 0) console.log('Точка - в начале координат')
  if (dotX == 0 && dotY != 0) console.log('Точка - на оси Y')
  if (dotX != 0 && dotY == 0) console.log('Точка - на оси X')
  if (dotX > 0 && dotY > 0) console.log('Точка - в I четверти')
  if (dotX < 0 && dotY > 0) console.log('Точка - в II четверти')
  if (dotX < 0 && dotY < 0) console.log('Точка - в III четверти')
  if (dotX > 0 && dotY < 0) console.log('Точка - в IV четверти')
}



// ■ Задания, в которых необходимо использовать SWITCH.

// 1. Запросить у пользователя номер месяца и вывести на экран его название.

{

  let monthNumber = '1'

  switch (monthNumber) {

    case '1':
      console.log('Январь')
      break;

    case '2':
      console.log('Февраль')
      break;

    case '3':
      console.log('Март')
      break;

    case '4':
      console.log('Апрель')
      break;

    case '5':
      console.log('Май')
      break;

    case '6':
      console.log('Июнь')
      break;

    case '7':
      console.log('Июль')
      break;

    case '8':
      console.log('Август')
      break;

    case '9':
      console.log('Сентябрь')
      break;

    case '10':
      console.log('Октябрь')
      break;

    case '11':
      console.log('Ноябрь')
      break;

    case '12':
      console.log('Декабрь')
      break;

    default:
      break;
  }

}


// 2. Реализовать калькулятор. Пользователь вводит 2 числа и 
// знак (+ - * /). В зависимости от введенного знака решить 
// пример и вывести результат.

{

  let num1 = 9
  let num2 = 3
  let userOperator = '-'
  let result = 0

  switch (userOperator) {
    case '+':
      result = num1 + num2
      break;

    case '-':
      result = num1 - num2
      break;

    case '*':
      result = num1 * num2
      break;

    case '/':
      result = num1 / num2
      break;

    default:
      break;
  }

  console.log(num1, userOperator, num2, '=', result)

}


// ■ Задания, в которых необходимо использовать тернарный оператор.

// 1. Запросить 2 числа и вывести большее из них.
{
  let num1 = 19
  let num2 = 32

  num1 > num2 ? console.log(num1) : console.log(num2)
}


// 2. Запросить 1 число и проверить, оно кратно 5 или нет.
{
  let num = 150

  num % 5 == 0 ? console.log('Число', num, 'кратно 5') : console.log('Число', num, 'не кратно 5')
}

/*3. Запросить у пользователя название планеты. Если пользователь ввел «Земля» или «земля», 
то вывести «Привет, землянин!», в остальных случаях вывести «Привет, инопланетянин!». */

{
  let userPlanet = 'Юпитер'

  userPlanet == 'Земля' || userPlanet == 'земля' ? console.log('Привет, землянин!') : console.log('Привет, инопланетянин!')
}


// ___________________________________________________________________________________________________________

// Домашняя практика



// let i = 1
// while (i <= 10) { 
//       console.log(i)
//       i++
// }

// let i = 1
// do { 
//       console.log(i)
//       i++
// } while (i <= 10)

// let i = 3
// while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
//       console.log( i )
//       i--
// }



//  1. Кредитный калькулятор. Сколько месяцев понадобится, чтобы выплатить.

{

  let monthlyPayment = 5000
  let creditAmount = 15000
  let creditRate = .02
  let month = 0;

  while (creditAmount > 0) {

    creditAmount += creditAmount * creditRate
    creditAmount -= monthlyPayment
    month++

  }

  console.log(month)
}


// 2. Через сколько лет вклад увеличится до 1 млн

{

  let fund = 1e5
  let rate = .10
  let years = 0

  while (fund <= 1e6) {

    fund += fund * rate
    years++
  }
  console.log(years)

}

// 3.

// let i = 0
// let limit = 3
// let num = 0

// while (i < limit) {
//       num = +prompt('Введите число')
//       console.log(num)
//       i++
// }

// 4. Получить два случайных числа, но не равных между собой.

// let num1 = parseInt(Math.random() * 10 + 1)
// let num2 = 0

// do {
//       num2 = parseInt(Math.random() * 10 + 1)
// } while(num1 == num2)

// console.log(num1)
// console.log(num2)

// 5. У пользователя нужно получить подтверждение некоторого действия.

// let userAnswer = ''
// do {
//       userAnswer = prompt('Confirm: yes or no') as string
// } while(userAnswer != 'yes' && userAnswer != 'no')

// console.log(userAnswer)      

// 6.

// for(let i = 0; i < 5; i++)
//       console.log(i)

// let i = 0
// for( ; i < 5; i++)
//       console.log(i)

// let i = 0
// for( ; i < 5; ) {
//       console.log(i)
//       i++
// }

// let i = 0
// for( ; ; ) {
//       console.log(i)
//       i++
//       if(i>4)
//             break           
// }

// for(let i = 0, j = 10; i != j; i++, j--)
//       console.log(i, j)


// 7. Пример. Кредитный калькулятор. Выводит график ежемесячных платежей. 
// Задаётся сумма кредита, срок погашения в месяцах, годовая ставка.

// let creditAmount = 15000
// let month = 6
// let creditRate = .02
// let creditBody = creditAmount + ((creditAmount * creditRate) * (month / 12))
// console.log(creditBody)
// let monthlyPayment = creditBody / month
// console.log(monthlyPayment)

// for(let i = 1; i <= month; i++)
//       console.log(`month: ${i} payment: ${monthlyPayment}`)

// 8. 

// let arr = [-7, 5, 3, -1, 110, 1, 8]

// for(let i in arr) console.log(i)

// for(let i of arr) console.log(i)


// 9. Задача: нужно сгенерировать не больше десяти случайных чисел из диапазона 1–7. 
// В случае если выпадает четверка, генерация прекращается.

// let num1 = parseInt(Math.random() * 7 + 1)
// console.log(num1)

// for(let i = 0; i < 10; i++) {
//       num1 = parseInt(Math.random() * 7 + 1)
//       console.log(num1)
//       if(num1 == 4) break
//       console.log(num1)      
// }


// 10. Нужно сгенерировать ровно 10 случайных чисел, но без четверок.

// let num1 = parseInt(Math.random() * 7 + 1)
// console.log(num1)

// for(let i = 0; i < 10; ) {
//       num1 = parseInt(Math.random() * 7 + 1)
//       if(num1 == 4) continue
//       console.log(num1)  
//       i++          
// }

// let j = 0

// while (j < 10) {
//       num1 = parseInt(Math.random() * 7 + 1)
//       if(num1 == 4) continue
//       console.log(num1)  
//       j++    
// }

// 11. Использование метки. После оператора «break» указывается метка цикла, 
//     который нужно прервать.

// loopI: for(let i = 0; i < 5; i++)
//       loopJ: for(let j = 0; j < 5; j++) {
//       console.log(i, j);
//       if(j == 3) break loopI;
//       }

// 12. Выводит все четные числа от 2 до N или N-1, если N нечетное. 
// Например: ввод 10, вывод 2 4 6 8 10; ввод 7, вывод 2 4 6

// let num = 13

// for(let i = 2; i <= num; i++) {
//       if(i % 2 == 0) console.log(i)
// }

// 13. Выводит все нечетные числа от N (или N-1, если N четное) до 1 в порядке убывания. 
// Например, ввод 7, вывод 7 5 3 1; ввод 10, вывод 9 7 5 3 1.

// let num = 12

// for(let i = num; i > 0; i--) {
//       if(i % 2 != 0) console.log(i)
// }


// let num2 = 12

// for(let i = num2; i > 0; i--) {
//       if(i % 2) console.log(i)
// }


// 14. выводит все числа, на которые делится N, включая число 1 
// (примеры: ввод N=10, вывод 1, 2, 5; ввод 11, вывод 1).

// let num = 10

// for(let i = 1; i < num; i++) {
//       if(num % i == 0) console.log(i)
// }

// 15. Принимает от пользователя величину годовой депозитной ставки (в процентах) 
// и выводит количество лет, по прошествии которых вклад увеличится вдвое.

// let fund1 = 10000
// let fund2 = fund1 * 2
// let rate = .20
// let years = 0

// while (fund1 <= fund2) {

//       fund1 += fund1 * rate
//       years++
// }
// console.log(years)

// 16. Выводит ровно 10 случайных чисел из диапазона 1–20, кроме тех, 
//     которые делятся на 4.

// for(let i = 0; i < 10; ) {
//       let num1 = parseInt(Math.random() * 20 + 1)
//       if(num1 % 4 == 0) continue
//       console.log(num1)  
//       i++          
// }

// let j = 0

// while (j < 10) {
//       let num1 = parseInt(Math.random() * 20 + 1)
//       if(num1 % 4 == 0) continue
//       console.log(num1)  
//       j++    
// }


// let num1 = 0
// let num2 = 0

// for(let i = 0; i < 10; ) {

//       num2 = num1

//       num1 = parseInt(Math.random() * 10 + 1)

//       // чтобы не генерировались подряд одинаковые числа
//       if(num1 == num2) {
//             continue
//       } else {
//             console.log(num1) 
//             i++
//       }
// }


// 17. Из-за утечки из бака охлаждения ежедневно вытекает 
// 10% налитой воды. При объеме воды менее 10 литров 
// возникает аварийная ситуация. Составьте программу, 
// которая запрашивает у пользователя первоначальный 
// объем воды и рассчитывает, на сколько дней работы 
// этого хватит.

// let water = 100
// let x = .10
// let danger = 10
// let days = 0

// // При условии, что выливается 10% от остатка воды
// do {
//       water = water - (water * x)
//       if(water >= danger) days++

// } while(water >= danger)

// console.log(days)



// При условии, что выливается 10% от первоначально налитой воды

// let water = 100
// let x = 10
// let danger = 10
// let days = 0

// do {
//       water -= x
//       if(water >= danger) days++

// } while(water >= danger)

// console.log(days)


// Подсчитывает сумму вводимых чисел до тех пор, пока посетитель их вводит.

// let sum = 0

// while (true) {
//   let value = +prompt("Введите число", '')
//   if (!value) break; 
//   sum += value
// }
// console.log('Сумма: ' + sum)


// цикл принимает от 1 до 5 чисел и возвращает их сумму
// let num = 0
// let sum = 0
// let i = 0

// do {
//       num = +prompt('Введите число', 0)
//       sum += num
// i++
// } while ((i < 5) && (num !== '' && num !== undefined));

// console.log(sum)



// Цикл принимает от 1 до 5 чисел и возвращает большее из них.
// let num = 1
// let max = 1

// // Так сложно, потому что иначе не получалось, если вводить отрицательные числа

// for(let i = 0; (i < 1 && (num !== '' && num !== undefined)); i++) {
//       num = +prompt('Введите число')
//       max = num

//       for(let j = 0; (j < 4 && (num !== '' && num !== undefined)); j++) {
//             num = +prompt('Введите число')
//             if(max < num && (num !== '' && num !== undefined)) {max = num}
//       }
// }

// console.log(max)


// let max = 0
// let sum = 0

// while (true) {

//   let value = +prompt("Введите число", '')

//   if (!value) break; 

//   if(max < value) {max = value}

//   sum += value

// }
// console.log('Сумма: ' + sum)

// console.log(max)


// Цикл принимает от 1 до 5 чисел и возвращает большее из них.
// let num = 1
// let max = 1

// // Так сложно, потому что иначе не получалось, если вводить отрицательные числа

// for(let i = 0; (i < 1 && (num !== '' && num !== undefined)); i++) {
//       num = +prompt('Введите число')
//       max = num

//       for(let j = 0; (j < 4 && (num !== '' && num !== undefined)); j++) {
//             num = +prompt('Введите число')
//             if(max < num && (num !== '' && num !== undefined)) {max = num}
//       }
// }

// console.log(max)


// let max = 0
// let sum = 0

// while (true) {

//   let value = +prompt("Введите число", '')

//   if (!value) break; 

//   if(max < value) {max = value}

//   sum += value

// }
// console.log('Сумма: ' + sum)

// console.log(max)

// ___________________________________________________________________________________________________________





// *********************************************************************************************************

// Циклы

// DZ_Modul_1_Week_3  - В работе.   Выполнено: 1, 2, 3, 4, 5, 6, 7, 8, 9, ...

// *********************************************************************************************************



//  Вам необходимо самостоятельно решить, для какого задания какой цикл лучше использовать: WHILE, DO WHILE или FOR.


//     1. Подсчитать сумму всех чисел в заданном пользователем диапазоне. 
{
  let num1 = 5
  let num2 = 2
  let sum = 0
  let buf = 0
  if (num1 > num2) { buf = num1; num1 = num2; num2 = buf; }

  for (let i = num1; i <= num2; i++) {
    sum += i
  }

  console.log(sum)
}

//     2. Запросить 2 числа и найти только наибольший общий делитель.
{
  let num1 = 28
  let num2 = 35
  let buf = 0
  if (num1 > num2) { buf = num1; num1 = num2; num2 = buf; }
  let i = num1
  let greatestCommonDivisor = 0

  do {

    if (num1 % i == 0 && num2 % i == 0) {
      greatestCommonDivisor = i
      break
    }

    i--

  } while (i > 0);

  console.log(greatestCommonDivisor)
}

// Вариант 2.
{
  let num1 = 50
  let num2 = 35
  let buf = 0
  if (num1 > num2) { buf = num1; num1 = num2; num2 = buf; }
  let i = 1
  let greatestCommonDivisor = 0

  do {

    if (num1 % i == 0 && num2 % i == 0) {
      greatestCommonDivisor = i
    }

    i++

  } while (i <= num1);

  console.log(greatestCommonDivisor)
}

//     3. Запросить у пользователя число и вывести все делители этого числа.
{
  let num = 50

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) console.log(i)
  }
}

// 4. Определить количество цифр в введенном числе.
{
  let num = 3642
  let quantity = 0

  while (num > 0) {
    // @ts-expect-error
    num = parseInt(num / 10)
    quantity++
  }

  console.log(quantity)
}

//     5. Запросить у пользователя 10 чисел и подсчитать, сколько 
//     он ввел положительных, отрицательных и нулей. При этом 
//     также посчитать, сколько четных и нечетных. Вывести 
//     статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
{
  let num = 0
  let even = 0
  let odd = 0
  let negativeNumber = 0
  let positiveNumber = 0
  let zero = 0

  for (let i = 0; i < 10; i++) {

    // num = parseInt(+prompt('Введите число'))

    if (num >= 0) positiveNumber++
    if (num < 0) negativeNumber++
    if (num == 0) zero++
    if (num % 2 == 0) even++
    if (num % 2 != 0) odd++
  }

  console.log(`Количество положительных чисел: ${positiveNumber}`)
  console.log(`Количество отрицательных чисел: ${negativeNumber}`)
  console.log(`Количество четных чисел: ${even}`)
  console.log(`Количество нечетных чисел: ${odd}`)
  console.log(`Количество нулей: ${zero}`)

}

//     6. Зациклить калькулятор. Запросить у пользователя 2 числа 
//     и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока 
//     пользователь не откажется.
// { 
// let num1 = 9
// let num2 = 3
// let userOperator = '-'
// let result = 0
// let userAnswer = true

// do {
//       num1 = +prompt('Введите первое число')
//       num2 = +prompt('Введите второе число')
//       userOperator = prompt('Введите знак') as string

//       switch (userOperator) {
//             case '+':
//                result = num1 + num2
//                break;

//             case '-':
//                result = num1 - num2
//                break;

//             case '*':
//                result = num1 * num2
//                break;

//             case '/':
//                result = num1 / num2
//                break;

//             default:
//                break;
//          }

//          console.log(num1, userOperator, num2, '=', result)
//          alert(`${num1} ${userOperator} ${num2} = ${result}`)

//          userAnswer = confirm('Хотите решить еще один пример?')

// } while (userAnswer != false);

// }


//     7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат 
//        (если число 123456 сдвинуть на 2 цифры, то получится 345612).

{

  //Переменная для исходного числа
  let num1 = 12345678

  // Переменная для числа на сколько сдвинуть цифры
  let num2 = 3

  //Вспомогательные переменные для подсчёта разряда числа
  let i = num1
  let quantity = 0
  let quantity2 = 1

  // Узнаём разрядность всего числа
  while (i > 0) {
    // @ts-expect-error
    i = parseInt(i / 10)
    quantity++
  }

  console.log(quantity)

  //Узнаём разрядность второй части числа
  i = quantity - num2
  console.log(i)

  //Переменные для хранения первой и второй частей числа
  let part1 = num1
  let part2 = num1


  for (; i > 0; i--) {
    //Выковыриваем те цифры, на которые надо сдвинуть число
    // @ts-expect-error
    part1 = parseInt(part1 / 10)

    //Подсчёт для остатка от деления для выковыривания второй части числа
    quantity2 *= 10
  }

  console.log(quantity2)

  //Выковыриваем вторую часть числа
  // @ts-expect-error
  part2 = parseInt(part2 % quantity2)

  console.log(part1)
  console.log(part2)

  //Возврат к исходной разраядности
  for (; num2 > 0; num2--) {
    part2 *= 10
  }

  console.log(part2)

  let result = part2 + part1

  console.log(result)

}


//   8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» 
//      и так до тех пор, пока пользователь нажимает OK. 

// { 

// const day1 = 'Понедельник'
// const day2 = 'Вторник'
// const day3 = 'Среда'
// const day4 = 'Четверг'
// const day5 = 'Пятница'
// const day6 = 'Суббота'
// const day7 = 'Воскресенье'
// let userAnswer = true
// let i = 0
// let x = '0'

// while (userAnswer != false) {
//       i++
//       console.log('day' + i)
//       if(i == 1) {
//             x = day1
//       } else if (i == 2) {
//             x = day2
//       } else if (i == 3) {
//             x = day3
//       } else if (i == 4) {
//             x = day4
//       } else if (i == 5) {
//             x = day5
//       } else if (i == 6) {
//             x = day6
//       } else if (i == 7) {
//             x = day7
//       } else if (i == 8) {
//             i = 1
//             x = day1
//       }
//       userAnswer = confirm(`${x}. Хотите увидеть следующий день?`)
// }

// }


// 9. Вывести таблицу умножения для всех чисел от 2 до 9. 
// Каждое число необходимо умножить на числа от 1 до 10.

{

  let num1 = 2
  let num2 = 9
  let result = ''

  for (let i = num1; i <= num2; i++) {

    for (let j = 1; j <= 10; j++) {

      result += i + ' * ' + j + ' = ' + i * j + '\n'

    }
  }

  console.log(result)

}

// 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 
// и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, 
// записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». 
// В зависимости от того что указал пользователь, уменьшаете диапазон. 
// Начальный диапазон от 0 до 100, поделили пополам и получили 50. 
// Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. 
// И так до тех пор, пока пользователь не выберет == N.

// { 

// // let userNum = 77
// let gameStart = 0
// let gameEnd = 100
// let userAnswer = '<'

// let result = (gameEnd - gameStart) / 2

// console.log(result) 

// do {

//       userAnswer = prompt('>, <, =' + result) as string

//       if(userAnswer == '<') {
//             gameEnd = result
//             result =  parseInt((gameEnd - gameStart) / 2)
//             console.log(gameStart) 
//             console.log( gameEnd) 
//             console.log(result) 
//       } else if(userAnswer == '>') {
//             gameStart = result             
//             result = parseInt(gameStart + ((gameEnd - gameStart) / 2))
//             console.log(gameStart) 
//             console.log( gameEnd) 
//             console.log(result) 
//       } else if(userAnswer == '=') {
//            console.log(result) 
//       }

// } while(userAnswer != '=')


// console.log(result) 


// let gameStart = 0
// let gameEnd = 100
// let userAnswer = '<'

// let result = (gameEnd - gameStart) / 2

// console.log(result) 

// do {

//       userAnswer = prompt('>, <, =' + result) as string

//       if(userAnswer == '<') {
//             gameEnd = result - 1
//             result =  parseInt((gameEnd - gameStart) / 2)
//             console.log(gameStart) 
//             console.log( gameEnd) 
//             console.log(result) 
//       } else if(userAnswer == '>') {
//             gameStart = result + 1             
//             result = parseInt(gameStart + ((gameEnd - gameStart) / 2))
//             console.log(gameStart) 
//             console.log( gameEnd) 
//             console.log(result) 
//       }

// } while(userAnswer != '=')


// console.log(result) 


// }


// ___________________________________________________________________________________________________________





// *********************************************************************************************************

// Циклы

// PZ_Modul_1_Week_3 - Выполнено полностью.

// *********************************************************************************************************



// Для вывода данных используйте alert() или document. write(). Для ввода данных используйте prompt() и confirm().


// ■ Задания, в которых необходимо использовать WHILE.


/* 1. Вывести # столько раз, сколько указал пользователь.*/

{

  let num = 5
  let i = 0

  while (i < num) {
    console.log('# ')
    i++
  }

}

// Вариант 2

{

  let num = 8

  while (num) {
    console.log('# ')
    num--
  }

}


/* 2. Пользователь ввел число, а на экран вывелись все числа от введенного до 0.*/

{

  let num = -4

  if (num > 0) {
    while (num >= 0) {
      console.log(num)
      num--
    }
  } else {
    while (num <= 0) {
      console.log(num)
      num++
    }
  }

}


/*3. Запросить число и степень. Возвести число в указанную 
степень и вывести результат.*/
{
  let num = 3
  let degree = 4
  let result = 1

  while (degree > 0) {
    result *= num
    degree--
  }
  console.log(result)
}


// 4. Запросить 2 числа и найти все общие делители.

{

  let num1 = 25
  let num2 = 10
  let text = ''
  let min = num1 < num2 ? num1 : num2
  while (min) {
    if (num1 % min == 0 && num2 % min == 0) {
      text += min + '_'
    }

    min--
  }

  console.log(text)

}


// 5. Посчитать факториал введенного пользователем числа.

{

  {
    let num = 7
    let result = 1

    while (num > 0) {

      result *= num
      num--
    }
    console.log(result)
  }

  {
    let i = 1
    let num = 7
    let result = 1

    while (i <= num) {
      result *= i
      i++
    }
    console.log(result)
  }

}


// ■ Задания, в которых необходимо использовать DO WHILE.


//       1. Предлагать пользователю решить пример 2 + 2 * 2 до тех 
//       пор, пока он не решит его правильно.

// let example = 'решить пример 2 + 2 * 2'
// let answer = 0

// do {
//       answer = +prompt(example)      
// } while (answer != 6);

// alert('Верный ответ: 6')


//       2. Делить число 1000 на 2 до тех пор, пока не получится число 
//       меньше 50. Вывести это число и сколько делений произвели.

{

  let num1 = 1000
  let num2 = 2
  let i = 0

  do {

    num1 /= num2
    i++

  } while (num1 > 50);

  console.log(num1)
  console.log(i)

}

// ■ Задания, в которых необходимо использовать FOR.


//       3. Вывести все числа от 1 до 100, которые кратные указанному 
//       пользователем числу.

{

  let num1 = 1
  let num2 = 100
  let userNum = 7

  for (; num1 <= num2; num1++) {
    if (num1 % userNum == 0) console.log(num1)
  }

}


//       4. Вывести каждый 4-й элемент из указанного пользователем 
//       диапазона. Пользователь указывает минимальное и максимальное значения диапазона. 

{

  let num1 = 1
  let num2 = 10
  let userNum = 4

  for (; num1 <= num2; num1++) {
    num1 += userNum - 1
    console.log(num1)
  }

}


//       5. Запросить число и проверить, простое ли оно. Простое 
//       число делится без остатка только на себя и на единицу.

{

  let num = 31
  let result = true

  for (let i = 2; i < num; i++) {

    if (num % num == 0 && num % 1 == 0 && num % i == 0) {
      result = false
    }

  }

  console.log(result)

  if (result == true) {
    console.log('Число является простым')
  } else {
    console.log('Число НЕ является простым')
  }

}


// ___________________________________________________________________________________________________________

// Домашняя практика. Функции.

// let i

// let arr = [
//       {i:1, name: '1asdasasd'},
//       {i:2, name: '2asdasasd'},
//       {i:3, name: '3asdasasd'},
//       {i:4, name: '4asdasasd'},
//       {i:5, name: '5asdasasd'},
//     ]

//     for (let i=0; i<arr.length; i++) {
//       document.body.insertAdjacentHTML('beforeend', `<p>${arr[i].i} <b>${arr[i].name}</b></p>`)
//     }

//     let res = 1000
//     i=0
//     while(true) {
//       res/=2
//       i++
//       if (res<50) break
//     }
//     console.log(res, `за ${i} итераций`)

//     res = 1000
//     i = 0
//     while (res>50) {
//       res /= 2
//       i++
//     }
//     console.log(res, `за ${i} итераций`)

//     res = 1000
//     i = 0
//     do {
//       res /= 2
//       i++
//     } while (res > 50)
//     console.log(res, `за ${i} итераций`)

//     res = 1000
//     i = 0
//     for (i = 0; res>50; i++) {
//       res /= 2
//     }
//     console.log(res, `за ${i} итераций`)

// x+=1  |  x = x + 1
// x-=1  |  x = x - 1
// x*=1  |  x = x * 1
// x**=1 |  x = x ** 1
// x/=1  |  x = x / 1
// x%=1  |  x = x % 1



//  1. Функция, которая будет увеличивать значение аргумента на 1 
//     и выводить полученный результат на страницу.
{
  function incPlusOne(digit: number) {
    digit = digit + 1
    return digit
  }

  let num = 1
  num = incPlusOne(num)
  console.log(num)
}

// 2. Создать функцию, вычисляющую куб переданного аргумента.
{
  function cubedNumber(n: number) {
    return n * n * n
  }
  let num1 = 2
  let num2 = 3
  num1 = cubedNumber(num1)
  console.log(num1)
  num2 = num1 * cubedNumber(num2)
  console.log(num2)
  console.log(cubedNumber(num1))
}

// 3. Банковское округление.
{
  function bankerRound(x: number) {
    if (Math.round(x) % 2 == 0)
      return Math.round(x)
    else {
      if (x < Math.round(x))
        return Math.round(x) - 1
      else
        return Math.round(x) + 1
    }
  }

  let num1 = 3.2
  console.log(bankerRound(num1))
}

// 4.  сообщение с текстом
{
  function sayError() {
    console.log('Some error occurred!')
  }
  sayError()
}

// 5. Вывод текста
{
  function showError(x: string) {
    console.log('Error ' + x + ' occurred!')
  }
  showError('Out of memory')
}

// 6. Проверка пароля
{
  function checkPassword(x: string) {
    if (x == 'Step' || x == 'Web' || x == 'JavaScript')
      return true
    else
      return false
  }
  console.log(checkPassword('JavaScript'))
}
// 7. Знак
{
  function sign(x: number) {
    if (x < 0) return -1
    else if (x > 0) return 1
    else return 0
  }

  let num = 5
  console.log(sign(num))
}
// 8. возвращает названия дней недели по их номеру
{
  function getDayOfTheWeek(n: string) {
    if (n == '0') return 'Sunday'
    if (n == '1') return 'Monday'
    if (n == '2') return 'Tuesday'
    if (n == '3') return 'Wednesday'
    if (n == '4') return 'Thursday'
    if (n == '5') return 'Friday'
    if (n == '6') return 'Saturday'
  }
  let userDay = '5' as string

  console.log(getDayOfTheWeek(userDay))
}
// 9. Функция принимает неопределённое количество аргументов. Длина
{
  // @ts-expect-error
  function logArguments(x) {
    console.log('x = ' + x)
    for (let i = 0; i < arguments.length; i++)
      console.log('argument' + (i + 1) + ' = ' + arguments[i])
  }
  // @ts-expect-error
  logArguments(1, 2, 3)
  logArguments('text')

}

// 10. Функция, определяющая максимальное значение из неопределённого 
//     количества переданных аргументов

{

  function getMax() {
    if (arguments.length == 0) return undefined
    let result = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
      if (result < arguments[i])
        result = arguments[i]
    }
    return result
  }
  // @ts-expect-error
  console.log(getMax(-1, -4, -10))

}

// 11. Функция определяет среднее арифметическое от переданных аргументов.
{
  function getArithmeticalMean() {
    if (arguments.length == 0) return undefined
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum / arguments.length
  }
  // @ts-expect-error
  console.log(getArithmeticalMean(1, 4, 10))
}

// // 12. 
// {
// function showX() {
//       console.log(x)
// }
// showX()
// let x = 1
// showX()
// }
// // 13.
// {
// let userName = 'Вася'
// function showMessage() {
//   let message = 'Привет, ' + userName
//   console.log(message)
// }
// showMessage() // Привет, Вася
// }
// // 14.
// {
// function max(a:number, b=100) {
//       return a > b ? a : b
//     }    
// console.log(max(101))
// }
// // 15.
// {
// function getSum(a:number | string, b:number | string) {
//       return a + b
// }
// console.log(getSum(2, 5))
// console.log(getSum('Hello, ', 'people!'))
// }


// 16.

{
  function showMessage(text: string) {
    return text = text || 'Goodbye'
  }
  console.log(showMessage('Hello, people!'))
}

// 17.

{

  function getSumRest(...rest: number[]) {
    let sum = 0
    console.log(rest)
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }

  console.log(getSumRest(12, 43, 13, 24, 50, 100, -7))

}

{

  function getSumRest(a: number, ...rest: number[]) {
    let sum = 0
    console.log(a)
    console.log(rest)
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }

  console.log(getSumRest(12, 43, 13, 24, 50, 100, -7))

  const string = 'ABC'
  for (let i = 0; i < string.length; i++) {
    console.log(string[i])
  }

  for (let char of string) {
    console.log(char)
  }

  let userDate = '15.12.2020'
  for (let i = 0; i < userDate.length; i++) {
    console.log(userDate[i])
  }

  const array = [1, 2, 3]
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
  for (let el of array) {
    console.log(el)
  }

}

{
  const obj = {
    a: 1,
    b: 2,
    c: 3
  } as Record<string, number>

  for (let i = 0; i < Object.keys(obj).length; i++) {
    const key = Object.keys(obj)[i]
    console.log(key, obj[key])
  }

  for (let key in obj) {
    console.log(key, obj[key])
  }
}




// ___________________________________________________________________________________________________________








// *********************************************************************************************************

// Функции

// PZ_Modul_1_Week_4  Выполнено полностью.


// *********************************************************************************************************




//  1. Написать функцию, которая принимает 2 числа и возвращает меньшее из них

{

  function getMin(a: number, b: number) {

    return a < b ? a : b

  }

  let num1 = 48
  let num2 = 434

  console.log(getMin(num1, num2))

}

// 2. Написать функцию, которая возводит переданное число в указанную степень.

{

  function pow(x: number, n: number) {

    return x ** n

  }

  let num1 = 2
  let num2 = 4

  console.log(pow(num1, num2))

}


// 3. Написать функцию, которая принимает 2 числа и знак (+ - * /), считает пример и возвращает результат. 

{

  function calcNumbers(a: number, b: number, c: string) {

    let sum = 0

    switch (c) {
      case '+':
        sum = a + b
        break;

      case '-':
        sum = a - b
        break;

      case '*':
        sum = a * b
        break;

      case '/':
        sum = a / b
        break;

      default:
        break;
    }

    return sum
  }

  let num1 = 2
  let num2 = 4

  console.log(calcNumbers(num1, num2, '+'))

}


// 4. Написать функцию, которая проверяет, является ли переданное ей число простым.
//    Простое число делится без остатка только на себя и на единицу.   

{

  function checkNum(num: number) {

    let result = true
    let message = ''

    for (let i = 2; i < num; i++) {

      if (num % num == 0 && num % 1 == 0 && num % i == 0) {
        result = false
      }
    }

    if (result == true) {
      message = 'Число является простым'
    } else {
      message = 'Число НЕ является простым'
    }

    return message

  }

  let userNum = 17

  console.log(checkNum(userNum))



  //  ПРОВЕРИТЬ!!!
  function getNum(a: number) {
    for (let i = 2; i <= a! / 2; i++) {
      if (a % i !== 0)
        return a
    }
  }

  let num = 10
  console.log(getNum(num))

}


//  5. Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. 
//     Вызовите функцию для всех чисел от 2 до 9.

{

  function showMultiplTable(a: number) {
    let result = ''
    for (let i = 1; i < 10; i++) {

      result += i + ' * ' + a + ' = ' + i * a + '\n'

    }
    return result
  }

  console.log(showMultiplTable(2))
  console.log(showMultiplTable(3))
  console.log(showMultiplTable(4))
  console.log(showMultiplTable(5))
  console.log(showMultiplTable(6))
  console.log(showMultiplTable(7))
  console.log(showMultiplTable(8))
  console.log(showMultiplTable(9))

}



// 6. Написать функцию, которая реализует работу оператора %. 
//    Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй. 
//    В функции использовать только + - * /, оператор % не использовать.

{

  function remainderDivision(a: number, b: number) {
    let i = 0
    // @ts-ignore
    let remainderOfDivision = 0

    for (let j = a; j >= b; j -= b) {
      i++
    }

    return remainderOfDivision = a - (b * i)
  }

  let num1 = 157
  let num2 = 3

  console.log(remainderDivision(num1, num2))
  console.log(157 % 3)

}

// 7. Написать функцию, которая принимает от 1 до 5 чисел и возвращает их сумму.

{

  function getSum() {
    let sum = 0
    for (let i = 0; i < 5; i++) {
      sum += arguments[i]
    }
    return sum
  }
  // @ts-ignore
  console.log(getSum(1, 2, 10, 1, 1, 1))

}


// 8. Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.

{

  function getMax() {
    if (arguments.length == 0) return undefined
    let result = arguments[0]
    for (let i = 1; i < 5; i++) {
      if (result < arguments[i])
        result = arguments[i]
    }
    return result
  }
  // @ts-ignore
  console.log(getMax(-1, -4, -10, -11, -2, 1))

}



// 9. Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. Какие 
// числа выводить, определяется третьим параметром типа bool (true – четные, false – нечетные).

{

  let num1 = 15
  let num2 = 5
  let num3 = false

  function showNumbers(n1: number, n2: number, x: boolean) {
    let buf = 0
    if (n1 > n2) { buf = n1; n1 = n2; n2 = buf }

    for (; n1 <= n2; n1++) {
      if (n1 % 2 == 0 && x == true) {
        console.log(n1)
      } else if (n1 % 2 != 0 && x == false) {
        console.log(n1)
      }
    }
  }
  showNumbers(num1, num2, num3)

}



// 10. Написать функцию, которая принимает дату (день, месяц, год) и возвращает дату следующего дня в виде строки 
// «дд.мм.гггг». Проверку на високосный год желательно написать отдельной функцией.

{

  function checkForLeapYear(check_y: number) {
    if ((check_y % 4 == 0 && check_y % 100 == 0 && check_y % 400 == 0) || (check_y % 4 == 0 && check_y % 100 != 0 && check_y % 400 != 0))
      return true
    else return false
  }

  function getNextDay(d = new Date().getDate(), m = new Date().getMonth() + 1, y = new Date().getFullYear()) {
    // @ts-expect-error
    if (d == null || d == '') { d = new Date().getDate() }
    // @ts-expect-error
    if (m == null || m == '') { m = new Date().getMonth() + 1 }
    if (y === null || y === undefined) { y = new Date().getFullYear() }
    let result = ''
    console.log(checkForLeapYear(y))
    if (m >= 1 && m <= 12) {

      // Условие для месяцев с количеством дней: 30
      if (m == 4 || m == 6 || m == 9 || m == 11) {

        if (d >= 1 && d <= 29) {
          d++
        } else if (d == 30) {
          d = 1
          m++
        } else {   // Условие, если пользователь введёт несуществующую дату
          result = 'Некорректная дата'
        }

        // Условие для февраля
      } else if (m == 2) {

        // Условие для февраля, если год является високосным
        if (checkForLeapYear(y)) {
          if (d >= 1 && d <= 28) {
            d++
          } else if (d == 29) {
            d = 1
            m++
          } else { // Условие, если пользователь введёт несуществующую дату
            result = 'Некорректная дата'
          }

          // Условие для февраля, если год НЕ является високосным
        } else {
          if (d >= 1 && d <= 27) {
            d++
          } else if (d == 28) {
            d = 1
            m++
          } else { // Условие, если пользователь введёт несуществующую дату
            result = 'Некорректная дата'
          }
        }

        // Условие для декабря, переход на следующий год
      } else if (m == 12) {
        if (d >= 1 && d <= 30) {
          d++
        } else if (d == 31) {
          d = 1
          m = 1
          y++
        } else { // Условие, если пользователь введёт несуществующую дату
          result = 'Некорректная дата'
        }

        // Условие для месяцев с количеством дней: 31
      } else {
        if (d >= 1 && d <= 30) {
          d++
        } else if (d == 31) {
          d = 1
          m++
        } else { // Условие, если пользователь введёт несуществующую дату
          result = 'Некорректная дата'
        }
      }

      // Условие, если пользователь введёт НЕсуществующий месяц
    } else {
      result = 'Некорректная дата'
    }
    console.log(`${d >= 10 ? d : '0' + d}.${m >= 10 ? m : '0' + m}.${y}`)
    if (result == 'Некорректная дата')
      result = 'Некорректная дата'
    else result = `${d >= 10 ? d : '0' + d}.${m >= 10 ? m : '0' + m}.${y}`
    return result
  }

  let userDay = 28
  let userMonth = 2
  let userYear = 2023

  // if (userDay == null || userDay == '') {userDay = new Date().getDate()}
  // if (userMonth == null || userMonth == '') {userMonth = new Date().getMonth() + 1}
  // if (userYear == null || userYear == '') {userYear = new Date().getFullYear()}

  console.log(`${userDay >= 10 ? userDay : '0' + userDay}.${userMonth >= 10 ? userMonth : '0' + userMonth}.${userYear}`)

  console.log(getNextDay(userDay, userMonth, userYear))

}

// ___________________________________________________________________________________________________________


// Домашняя практика. Рекурсия.

// 1. Факториал

// let n = 4
// let factorial = 1
// for(let i = 2; i <= n; i++)
//  factorial *= i

// console.log(factorial)

// let num = 4

// function getFactorial(n:number):any {
//       if(n == 1) return 1
//       return n * getFactorial(n - 1)
//      }

// console.log(getFactorial(num))

// 2. Вывести ряд чисел от единицы до введенного пользователем числа.

// function showNumbers(n:number) {
//       if(n == 0) return
//       console.log(n)
//       showNumbers(n - 1)
// }

// let num1 = 12
// showNumbers(num1)

// Ваниант 2

// function showNumbers(n:number) {
//       if(n == 1) return 1
//       return showNumbers(n - 1) + ', ' + n
// }

// let num1 = 12
// console.log(showNumbers(num1))


// В обратном порядке

// {
// function showNumbers(n1:number, n2:number) {
//       if(n1 == n2) return n2
//       return showNumbers(n1 + 1, n2) + ', ' + n1
// }

// let num1 = 1
// let num2 = 12
// console.log(showNumbers(num1, num2))
// }


// 3. Генератор чисел Фибоначчи.

// function Fibonacci(n:number) {

//       if(n<3) return 1
//       return Fibonacci(n-1) + Fibonacci(n-2)
// }

// console.log(Fibonacci(7))


// Вывод чисел Фибоначчи.

// .........


// 1. Создайте функцию stringFrom(…), возвращающую 
// строку, состоящую из значений всех переданных 
// аргументов. Например, вызов stringFrom('I have', 5, 
// 'apples') вернет строку «I have 5 apples»; вызов stringFrom('Х value is', true) 
// вернет строку «Х value is true».

// function stringFrom() {
//       let message = ''
//       for(let i = 0; i < arguments.length; i++)
//             message += arguments[i] + ' '

//       return message
// }

// stringFrom('I have', 5, 'apples')
// console.log(stringFrom('I have', 5, 'apples'))

// console.log(stringFrom('Х value is', true)
// Не получилось


// 2. Создайте функцию, возвращающую значение минимального из всех переданных аргументов.

// function findMinNumber() {

//       let min = arguments[0]

//       for(let i = 1; i < arguments.length; i++)
//             if(min > arguments[i]) min = arguments[i]      

//       return min
// }

// console.log(findMinNumber(-11, -12, 2, 5, 9, 1, 3, -123, -10, -1, 12))


// 3. Создайте функцию numbers(), которая будет подсчитывать количество переданных числовых аргументов. 
// Например, numbers(1, 2, “a”) вернет значение 2, numbers(true, 2, false) — 1, numbers() — 0.

// 4. Создайте функцию mean(), которая рассчитает среднее значение от всех числовых аргументов, игнорируя 
// аргументы нечислового типа. Например, mean (1, 2, 
// “a”) вернет значение 1.5 (среднее 1 и 2), mean(true, 2, 
// false) — 2, mean() — 0.

// 5. Напишите рекурсивную функцию, которая проверяет, является ли переданный аргумент степенью двойки 
// (например, числа 8=23, 32=25 — это степени двойки, 
// а числа 7 или 12 — нет). Подсказка: если число «х» делится на два, то нужно проверить, является ли число 
// «х/2» степенью двойки.

// 6. Напишите рекурсивную функцию, которая выводит число N «справа налево», то есть последняя цифра 
// числа становится первой, предпоследняя — второй и т.д. (например, ввод N=123, вывод 321; ввод N= 12, 
// вывод 21). Обеспечьте ввод пользователем числа N и вывод его «справа налево» вызовом функции. 
// Подсказка: последняя цифра числа «х» это остаток от деления на 10 (х%10), а остальные цифры можно 
// отделить, поделив «х» на 10 нацело (parseInt(х/10)).



// Рекурсия. Возведение числа в степень.

//   { 

//   function powRecursive(x: number, n: number): number {
//     // return n == 1 ? x : x * powRecursive(x, n - 1)
//     if (n == 1) {
//       console.log('Условие выхода стработало')
//       return x
//     } else {
//       console.log(n)
//       let result
//       console.log(result = x * powRecursive(x, n - 1))
//       return result
//     }
//   }

//   console.log(powRecursive(2, 4))


//   function maxDethPowRecursive(x: number, n: number): number {
//     console.log(n)
//     return n == 1 ? x : x * maxDethPowRecursive(x, n - 1)
//   }

//   maxDethPowRecursive(1, 100000)


// function powFor(x: bigint, n: number) {
//   let result = 1n;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// console.log(powFor(2n, 100))

//   }

// ___________________________________________________________________________________________________________




// *********************************************************************************************************

// Рекурсия.

// Домашние задания по рекурсии

// DZ_Modul_1_Week_5  В работе. Выполнено: 1, 2, 3, .......... , 6


// *********************************************************************************************************


// * Во всех заданиях обязательно использовать рекурсию.


// 1. Написать функцию возведения числа в степень.

{

  function calcPow(n: number, d: number): any {
    if (d == 1) return n
    return n * calcPow(n, d - 1)
  }

  let num = 3
  let degree = 3
  let result = 0

  result = calcPow(num, degree)

  console.log(result)

}


// 2. Написать функцию поиска наибольшего общего делителя.

{

  let num1 = 28
  let num2 = 35
  let buf = 0
  if (num1 > num2) { buf = num1; num1 = num2; num2 = buf; }
  let greatestCommonDivisor = 0

  function findGreatestCommonDivisor(n1: number, n2: number): any {
    let x = num1
    return (x % n1 == 0 && n2 % n1 == 0) ? n1 : findGreatestCommonDivisor(n1 - 1, n2)

  }
  greatestCommonDivisor = findGreatestCommonDivisor(num1, num2)
  console.log(greatestCommonDivisor)

}



// 3. Написать функцию для поиска максимальной цифры в числе.

function findMaxNumber(n: number) {
  let max = n % 10
  if (n < 1) return
  else {
    // @ts-expect-error
    if (max < parseInt(findMaxNumber(n / 10) % 10))
      // @ts-expect-error
      max = parseInt(findMaxNumber(n / 10) % 10)
    return max
  }

}

console.log(findMaxNumber(19245031609182))



// 4. Написать функцию, которая определяет простое ли переданное число.
//    Простое число делится без остатка только на себя и на единицу. 

{

  function checkPrimeNumber(n: number): any {

    let result = true

    for (let i = 2; i < n; i++) {

      if (n % n == 0 && n % i == 0) {
        result = false
      }
    }
    console.log(result)

    if (result == true) {
      return 'Число является простым'
    } else {
      return 'Число НЕ является простым'
    }

  }
  let num = 15
  console.log(checkPrimeNumber(num))

}


// 5. Написать функцию для вывода всех множителей переданного числа в возрастающем порядке. 
//    Например: число 18 – множители 2 * 3 * 3.

{

  function showAllFactors(n: number) {

    let result = ''

    for (let i = 2; i < n; i++)
      if (n % i == 0) {
        result += i + ', '
      }

    return result
  }

  console.log(showAllFactors(21))

}

// 6. Написать функцию, которая возвращает число Фибоначчи по переданному порядковому номеру. 
//    Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на том,
//    что каждое число равно сумме двух предыдущих чисел. 
//    Например: порядковый номер 3 – число 2, порядковый номер 6 – число 8

{

  function Fibonacci(n: number): any {

    if (n < 3) return 1
    return Fibonacci(n - 1) + Fibonacci(n - 2)
  }

  console.log(Fibonacci(3))

}


// ___________________________________________________________________________________________________________






// *********************************************************************************************************

// Рекурсия

// Практические задания по рекурсии

// PZ_Modul_1_Week_5 Рекурсия Выполнено полностью.

// *********************************************************************************************************


// 1. Написать функцию, которая вычисляет факториал заданного числа.

{

  function fact(n: number): number {
    if (n < 0) return 0
    else if (n == 1) return 1
    else return n * fact(n - 1)
  }

  let num = 6
  console.log(fact(num))

}

// 2. Написать функцию, которая выводит все числа из заданного пользователем диапазона в прямом порядке.
//  И еще одну функцию – для вывода в обратном порядке.

{

  function showNumbers(n1: number, n2: number): any {

    if (n1 == n2) return n1
    return showNumbers(n1, n2 - 1) + ', ' + n2
  }

  console.log(showNumbers(2, 5))

}

{
  function showNumbers2(n1: number, n2: number): any {

    if (n2 == n1) return n2

    return showNumbers2(n1 + 1, n2) + ', ' + n1
  }

  console.log(showNumbers2(2, 5))

}


// 3. Написать функцию, которая выводит переданное ей число задом наперед. 
//    Например: число 1234 вывести как 4321.

{

  function gerReverseNumber(n: number): number {
    if (n < 10) {
      return n
    } else {
      return +(n % 10 + '' + gerReverseNumber(Math.floor(n / 10)))
    }
  }

  console.log(gerReverseNumber(1234))

}

// 4. Написать функцию, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.

{

  function getSumOfDigits(n: number): number {
    if (n < 10) {
      return n
    } else {
      return n % 10 + getSumOfDigits(Math.floor(n / 10))
    }
  }

  console.log(getSumOfDigits(1357))

}


// 5. Написать функцию, которая принимает число и выводит 
// соответствующее количество вложенных пар круглых скобок. 
// Например: число 4 – (((())))

{

  function getBracketsPairsByNum(n: number): any {
    if (!n) {
      return ''
    } else {
      return '(' + getBracketsPairsByNum(n - 1) + ')'
    }
  }

  console.log(getBracketsPairsByNum(4))

}
// getBracketsPairsByNum(4) = '(' + getBracketsPairsByNum(3)== '((()))' + ')'     = (((())))
// getBracketsPairsByNum(3) = '(' + getBracketsPairsByNum(2)== '(())' + ')'       = ((()))
// getBracketsPairsByNum(2) = '(' + getBracketsPairsByNum(1)== '()' + ')'         = (())
// getBracketsPairsByNum(1) = '(' + getBracketsPairsByNum(0)== '' + ')'           = ()






// ___________________________________________________________________________________________________________


// Домашняя практика. Объект.

{
  // Два варианта создания объекта. Создаём пустой объект.

  let obj1 = new Object()
  console.log(obj1)

  let obj2 = {}
  console.log(obj2)

  // 1.
  let student = new Object() as any
  student['Name'] = 'Иннокентий'
  student['Age'] = 20
  console.log(student)
  console.log(student['Name'])
  console.log(student['Age'])
}
{
  // 2.
  let firm = {} as any
  firm.Name = 'Star Inc'
  firm.Adress = 'Grape street 8'
  console.log(firm)
  console.log(firm.Name)
  console.log(firm.Adress)
}
{
  // 3.
  let dog = {} as any
  dog['Name of dog'] = 'Belyash'
  console.log(dog)
  console.log(dog['Name of dog'])
  dog.Age_of_dog = 5
  console.log(dog)
  console.log(dog['Age_of_dog'])
}
{
  // 4.

  let cat = {} as any
  cat.Name = 'Konus'
  cat.Age = 2
  cat['Color'] = 'red'
  console.log(cat)

  // Удаление свойства

  delete cat.Name
  console.log(cat)
  delete cat['Age']
  console.log(cat)
  console.log(cat['Name'])
  console.log(cat.Age)

  // // Проверка существования свойства внутри объекта:

  if ('Name' in cat)
    console.log('Имя: ' + cat.Name)
  else
    console.log('Имя: Неивестно')

  cat.Name = 'Vasiliy'

  if ('Name' in cat)
    console.log('Имя: ' + cat.Name)
  else
    console.log('Имя: Неивестно')
}
{
  // 5. 

  // const student = {
  //       firstName: 'Eva',
  //       lastName: 'Robotova',
  //       age: 20,
  //       address: {
  //             strreet: 'Apricot 2',
  //             city: 'Sochi',
  //             country: 'Russia',
  //       }
  // } as Record<string, any>
  // console.log(student)
  // console.log(student.lastName)
  // console.log(student.address.city)
  // console.log(student.address)

  // for(let i in student) {
  //       // отображаем название свойства
  //       console.log(i)
  //       // значение свойства
  //       console.log(student[i])
  // }

  // for(let key in student) {
  //       // отображаем название свойства (ключа)
  //       console.log(key)
  //       // значение свойства
  //       console.log(student[key])
  // }


  // let studentInfo = prompt('Что Вы хотите увидеть?', 'firstName') as string
  // alert(student[studentInfo])
  // console.log(student[studentInfo])

  // function getInfo() {

  // }

  // const jsonObj = JSON.stringify(object)
  // console.log(jsonObj)
  // console.log(JSON.parse(jsonObj))
}
{
  let a = 3
  let b = 'year'
  let c = 38
  let d = 'sum'

  // Поместили глобальные переменные (в коллекцию) в объект
  type MyObj = {
    a: number,
    b: string,
    c: number,
    d: string,
    // необязательный параметр
    e?: string,
  }

  const obj: MyObj = {
    a,
    b,
    c,
    d,
  }
  console.log(obj)
  obj.d = '12'
  obj.e = '62'
  console.log(obj)

  const obj2: MyObj = {
    'a': 4,
    b: 'ru',
    c: 42,
    d: 'pic',
  }
  console.log(obj2)

  console.log(a)
  console.log(obj2.a)

  function getSum(obj: MyObj) {
    return obj.e ? obj.a + obj.e : obj.a
  }

  console.log(getSum(obj))
  console.log(getSum(obj2))

}


// ___________________________________________________________________________________________________________





// *********************************************************************************************************

// Объект

// Домашние задания

// DZ_Modul_2_Week_1   Выполнено полностью.

// *********************************************************************************************************


// Задание 1
// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), 
// и следующие функции для работы с этим объектом.

{

  type Car = {
    manufacturer: string,
    model: string,
    year: number,
    averSpeed: number,
  }

  const automobile = {
    manufacturer: 'Japan',
    model: 'f2x',
    year: 1996,
    averSpeed: 98,
  } as Record<string, any>

  console.log(automobile)


  // 1. Функция для вывода на экран информации об автомобиле.

  function showAutomobile(auto: Car) {

    for (let key in automobile) {

      console.log(key)
      console.log(automobile[key])
    }
  }
  // @ts-expect-error
  showAutomobile()


  function showAutomobile2(obj: object) {
    let result = ''
    for (let key in obj) {
      console.log(key)
      console.log(obj[key])
      result += key + ': ' + obj[key] + ', \n '
    }
    return result
  }
  showAutomobile2(automobile)
  console.log(showAutomobile2(automobile))



  // 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
  // Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
  // t = S / v

  let userS = 100

  function toFindTime(obj: object) {
    let t = userS / automobile.averSpeed
    let t2 = t

    while (t2 > 4) {
      t += 1
      t2 -= 4
    }
    return t
  }

  let travelTime = toFindTime(automobile)


  //  время в часах
  console.log(travelTime)

  travelTime = travelTime * 60


  //  время в минутах
  console.log(travelTime)

}



// Задание 2

// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.

{

  type Fraction = {
    numerator: number,
    denominator: number
  }

  const fraction1: Fraction = {
    numerator: 1,
    denominator: 2
  }

  const fraction2 = {
    numerator: 3,
    denominator: 10
  } as Fraction



  function transformToCommonDenominator(fr1: Fraction, fr2: Fraction) {
    return {
      fr1: {
        numerator: fr1.numerator * fr2.denominator,
        denominator: fr1.denominator * fr2.denominator
      },
      fr2: {
        numerator: fr2.numerator * fr1.denominator,
        denominator: fr1.denominator * fr2.denominator
      }
    }
  }

  // 1. Функция сложения 2-х объектов-дробей.

  function getSumOfFraction(fr1: Fraction, fr2: Fraction) {
    const commonFractions = transformToCommonDenominator(fr1, fr2)
    console.log(commonFractions)
    return {
      numerator: commonFractions.fr1.numerator + commonFractions.fr2.numerator,
      denominator: commonFractions.fr1.denominator
    }
  }

  console.log(getSumOfFraction(fraction1, fraction2))

  function getRedusedSumOfFraction(fr1: Fraction, fr2: Fraction) {
    const result = getSumOfFraction(fr1, fr2)
    return getReductedFraction(result)
  }

  console.log(getRedusedSumOfFraction(fraction1, fraction2))


  // 2. Функция вычитания 2-х объектов-дробей.

  function getSubtrOfFraction(fr1: Fraction, fr2: Fraction) {
    const commonFractions = transformToCommonDenominator(fr1, fr2)
    console.log(commonFractions)
    const result = {
      numerator: commonFractions.fr1.numerator - commonFractions.fr2.numerator,
      denominator: commonFractions.fr1.denominator
    }
    return getReductedFraction(result)
  }

  console.log(getSubtrOfFraction(fraction1, fraction2))



  // 3. Функция умножения 2-х объектов-дробей.

  function getMulOfFraction(fr1: Fraction, fr2: Fraction) {

    const result = {
      numerator: fr1.numerator * fr2.numerator,
      denominator: fr1.denominator * fr2.denominator
    }
    return getReductedFraction(result)
  }

  console.log(getMulOfFraction(fraction1, fraction2))


  // 4. Функция деления 2-х объектов-дробей.

  function getDivOfFraction(fr1: Fraction, fr2: Fraction) {

    const result = {
      numerator: fr1.numerator * fr2.denominator,
      denominator: fr1.denominator * fr2.numerator
    }
    return getReductedFraction(result)
  }

  console.log(getDivOfFraction(fraction1, fraction2))


  // 5. Функция сокращения объекта-дроби.

  function getReductedFraction(fr: Fraction) {
    const min = fr.numerator < fr.denominator ? fr.numerator : fr.denominator
    for (let i = min; i > 1; i--) {
      if (fr.numerator % i == 0 && fr.denominator % i == 0) {
        fr.numerator /= i
        fr.denominator /= i
        return getReductedFraction(fr)
      }
    }
    return fr
  }


}



// Задание 3

// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.

{

  type Time = {
    hours: number,
    minutes: number,
    seconds: number,
  }

  const hwTime = {
    hours: 10,
    minutes: 4,
    seconds: 3,
  }

  console.log(hwTime)

  // 1. Функция вывода времени на экран.

  function showTime(obj: Time) {
    let result = (obj.hours >= 10 ? obj.hours : '0' + obj.hours) + ':' +
      (obj.minutes >= 10 ? obj.minutes : '0' + obj.minutes) + ':' +
      (obj.seconds >= 10 ? obj.seconds : '0' + obj.seconds)
    return result
  }

  console.log(showTime(hwTime))

  console.log(100 / 60)
  console.log(100 % 60)

  // 2. Функция изменения времени на переданное количество секунд.

  function changingSeconds(obj: Time, sec: number) {
    if (sec <= 60)
      obj.seconds = sec
    else {
      obj.seconds = sec % 60
      // @ts-expect-error
      obj.minutes += parseInt(sec / 60)
      if (obj.minutes > 60) {
        // @ts-expect-error
        obj.hours += parseInt(obj.minutes / 60)
        obj.minutes = obj.minutes % 60
      }
    }
    return showTime(obj)
  }

  let new_seconds = 3600

  console.log(changingSeconds(hwTime, new_seconds))

  console.log(showTime(hwTime))



  // 3. Функция изменения времени на переданное количество минут.

  function changingMinutes(obj: Time, min: number) {
    if (min <= 60)
      obj.minutes = min
    else {
      obj.minutes = min % 60
      // @ts-expect-error
      obj.hours += parseInt(min / 60)
    }
    return showTime(obj)
  }

  let new_minutes = 10000

  console.log(changingMinutes(hwTime, new_minutes))

  console.log(showTime(hwTime))


  // 4. Функция изменения времени на переданное количество часов.

  function changingHours(obj: Time, hour: number) {

    obj.hours = hour

    return showTime(obj)
  }

  let new_hours = 100

  console.log(changingHours(hwTime, new_hours))

  console.log(showTime(hwTime))



  // Учтите, что в последних 3-х функциях, при изменении одной 
  // части времени, может измениться и другая. Например: если ко 
  // времени «20:30:45» добавить 30 секунд, то должно получиться 
  // «20:31:15», а не «20:30:75».

}


// ___________________________________________________________________________________________________________





// *********************************************************************************************************

// Объект

// Практические задания

// PZ_Modul_2_Week_1    В работе.


// *********************************************************************************************************



// Создать объект, описывающий прямоугольник (хранит координаты левой верхней и 
// правой нижней точек), и написать следующие функции для работы с таким объектом.

// A - левая верхнаяя точка
// B - правая верхняя точка = Cx, Ay
// C - нижняя правая точка
// D - левая нижняя точка = Ax, Cy

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

// function widthRectangle(pr:Fraction) {


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



interface Rectangle {
  topLeft: { x: number, y: number };
  bottomRight: { x: number, y: number };
}
function getRectangleInfo(rect: Rectangle): void {
  console.log(`Верхний левый угол: (${rect.topLeft.x}, ${rect.topLeft.y})`);
  console.log(`Нижний правый угол: (${rect.bottomRight.x}, ${rect.bottomRight.y})`);
}
function getWidth(rect: Rectangle): number {
  return Math.abs(rect.bottomRight.x - rect.topLeft.x);
}
function getHeight(rect: Rectangle): number {
  return Math.abs(rect.bottomRight.y - rect.topLeft.y);
}
function getArea(rect: Rectangle): number {
  return getWidth(rect) * getHeight(rect);
}
function getPerimeter(rect: Rectangle): number {
  return 2 * (getWidth(rect) + getHeight(rect));
}
function changeWidth(rect: Rectangle, change: number): void {
  rect.bottomRight.x += change;
}
function changeHeight(rect: Rectangle, change: number): void {
  rect.bottomRight.y += change;
}
function changeWidthAndHeight(rect: Rectangle, widthChange: number, heightChange: number): void {
  changeWidth(rect, widthChange);
  changeHeight(rect, heightChange);
}
function moveX(rect: Rectangle, shiftX: number): void {
  rect.topLeft.x += shiftX;
  rect.bottomRight.x += shiftX;
}
function moveY(rect: Rectangle, shiftY: number): void {
  rect.topLeft.y += shiftY;
  rect.bottomRight.y += shiftY;
}
function moveXY(rect: Rectangle, shiftX: number, shiftY: number): void {
  moveX(rect, shiftX);
  moveY(rect, shiftY);
}
function isPointInside(rect: Rectangle, point: { x: number, y: number }): boolean {
  return point.x >= rect.topLeft.x && point.x <= rect.bottomRight.x && point.y >= rect.topLeft.y && point.y <= rect.bottomRight.y;
}
let rectangle: Rectangle = {
  topLeft: { x: 0, y: 0 },
  bottomRight: { x: 5, y: 5 }
}
getRectangleInfo(rectangle);
console.log("Ширина:", getWidth(rectangle));
console.log("Высота:", getHeight(rectangle));
console.log("Площадь:", getArea(rectangle));
console.log("Периметр:", getPerimeter(rectangle));
changeWidth(rectangle, 3);
console.log("Новая ширина:", getWidth(rectangle));
changeHeight(rectangle, 2);
console.log("Новая высота:", getHeight(rectangle));
changeWidthAndHeight(rectangle, 2, 1);
console.log("Новая ширина:", getWidth(rectangle));
console.log("Новая высота:", getHeight(rectangle));
moveXY(rectangle, 1, -1);
getRectangleInfo(rectangle);
console.log("Точка (3, 3) находится внутри прямоугольника?", isPointInside(rectangle, { x: 3, y: 3 }));

const rectElement = document.getElementById('rect') as HTMLDivElement
function initRect(rect: Rectangle, rectEl: HTMLDivElement) {
  rectEl.style.width = getWidth(rect) * 10 + 'px'
  rectEl.style.height = getHeight(rect) * 10 + 'px'
  rectEl.style.top = rect.topLeft.y + 'px'
  rectEl.style.left = rect.topLeft.x + 'px'
}
initRect(rectangle, rectElement)

const topLeftButton = document.getElementById('topLeft') as HTMLDivElement
const topButton = document.getElementById('top') as HTMLDivElement
const topRightButton = document.getElementById('topRight') as HTMLDivElement
const leftButton = document.getElementById('left') as HTMLDivElement
const rightButton = document.getElementById('right') as HTMLDivElement
const bottomLeftButton = document.getElementById('bottomLeft') as HTMLDivElement
const bottomButton = document.getElementById('bottom') as HTMLDivElement
const bottomRightButton = document.getElementById('bottomRight') as HTMLDivElement

const addHeightButton = document.getElementById('addHeight') as HTMLDivElement
const addWidthButton = document.getElementById('addWidth') as HTMLDivElement
const reduceHeightButton = document.getElementById('reduceHeight') as HTMLDivElement
const reduceWidthButton = document.getElementById('reduceWidth') as HTMLDivElement

addHeightButton.addEventListener('click', () => {
  changeHeight(rectangle, 1)
  initRect(rectangle, rectElement)
})
reduceHeightButton.addEventListener('click', () => {
  changeHeight(rectangle, -1)
  initRect(rectangle, rectElement)
})
addWidthButton.addEventListener('click', () => {
  changeWidth(rectangle, 1)
  initRect(rectangle, rectElement)
})
reduceWidthButton.addEventListener('click', () => {
  changeWidth(rectangle, -1)
  initRect(rectangle, rectElement)
})

topLeftButton.addEventListener('click', () => {
  moveXY(rectangle, -10, -10)
  initRect(rectangle, rectElement)
})
topButton.addEventListener('click', () => {
  moveY(rectangle, -10)
  initRect(rectangle, rectElement)
})
topRightButton.addEventListener('click', () => {
  moveXY(rectangle, 10, -10)
  initRect(rectangle, rectElement)
})
leftButton.addEventListener('click', () => {
  moveX(rectangle, -10)
  initRect(rectangle, rectElement)
})
rightButton.addEventListener('click', () => {
  moveX(rectangle, 10)
  initRect(rectangle, rectElement)
})
bottomLeftButton.addEventListener('click', () => {
  moveXY(rectangle, -10, 10)
  initRect(rectangle, rectElement)
})
bottomButton.addEventListener('click', () => {
  moveY(rectangle, 10)
  initRect(rectangle, rectElement)
})
bottomRightButton.addEventListener('click', () => {
  moveXY(rectangle, 10, 10)
  initRect(rectangle, rectElement)
})





{




  interface Rectangle {
    topLeft: { x: number, y: number };
    bottomRight: { x: number, y: number };
  }
  function getRectangleInfo(rect: Rectangle): void {
    console.log(`Верхний левый угол: (${rect.topLeft.x}, ${rect.topLeft.y})`);
    console.log(`Нижний правый угол: (${rect.bottomRight.x}, ${rect.bottomRight.y})`);
  }
  function getWidth(rect: Rectangle): number {
    return Math.abs(rect.bottomRight.x - rect.topLeft.x);
  }
  function getHeight(rect: Rectangle): number {
    return Math.abs(rect.bottomRight.y - rect.topLeft.y);
  }
  // @ts-ignore
  function getArea(rect: Rectangle): number {
    return getWidth(rect) * getHeight(rect);
  }
  // @ts-ignore
  function getPerimeter(rect: Rectangle): number {
    return 2 * (getWidth(rect) + getHeight(rect));
  }
  function changeWidth(rect: Rectangle, change: number): void {
    rect.bottomRight.x += change;
  }
  function changeHeight(rect: Rectangle, change: number): void {
    rect.bottomRight.y += change;
  }
  // @ts-ignore
  function changeWidthAndHeight(rect: Rectangle, widthChange: number, heightChange: number): void {
    changeWidth(rect, widthChange);
    changeHeight(rect, heightChange);
  }
  function moveX(rect: Rectangle, shiftX: number): void {
    rect.topLeft.x += shiftX;
    rect.bottomRight.x += shiftX;
  }
  function moveY(rect: Rectangle, shiftY: number): void {
    rect.topLeft.y += shiftY;
    rect.bottomRight.y += shiftY;
  }
  function moveXY(rect: Rectangle, shiftX: number, shiftY: number): void {
    moveX(rect, shiftX);
    moveY(rect, shiftY);
  }
  // @ts-ignore
  function isPointInside(rect: Rectangle, point: { x: number, y: number }): boolean {
    return point.x >= rect.topLeft.x && point.x <= rect.bottomRight.x && point.y >= rect.topLeft.y && point.y <= rect.bottomRight.y;
  }
  let rectangle: Rectangle = {
    topLeft: { x: 0, y: 0 },
    bottomRight: { x: 5, y: 5 }
  }
  getRectangleInfo(rectangle);
  // console.log("Ширина:", getWidth(rectangle));
  // console.log("Высота:", getHeight(rectangle));
  // console.log("Площадь:", getArea(rectangle));
  // console.log("Периметр:", getPerimeter(rectangle));
  // changeWidth(rectangle, 3);
  // console.log("Новая ширина:", getWidth(rectangle));
  // changeHeight(rectangle, 2);
  // console.log("Новая высота:", getHeight(rectangle));
  // changeWidthAndHeight(rectangle, 2, 1);
  // console.log("Новая ширина:", getWidth(rectangle));
  // console.log("Новая высота:", getHeight(rectangle));
  // moveXY(rectangle, 1, -1);
  // getRectangleInfo(rectangle);
  // console.log("Точка (3, 3) находится внутри прямоугольника?", isPointInside(rectangle, { x: 3, y: 3 }));

  const rectElement = document.getElementById('rect') as HTMLDivElement
  function initRect(rect: Rectangle, rectEl: HTMLDivElement) {
    rectEl.style.width = getWidth(rect) * 10 + 'px'
    rectEl.style.height = getHeight(rect) * 10 + 'px'
    rectEl.style.top = rect.topLeft.y + 'px'
    rectEl.style.left = rect.topLeft.x + 'px'
  }
  initRect(rectangle, rectElement)

  const numdapDiv = document.querySelector('.numpad') as HTMLDivElement

  // const topLeftButton = document.getElementById('topLeft') as HTMLDivElement
  // const topButton = document.getElementById('top') as HTMLDivElement
  // const topRightButton = document.getElementById('topRight') as HTMLDivElement
  // const leftButton = document.getElementById('left') as HTMLDivElement
  // const rightButton = document.getElementById('right') as HTMLDivElement
  // const bottomLeftButton = document.getElementById('bottomLeft') as HTMLDivElement
  // const bottomButton = document.getElementById('bottom') as HTMLDivElement
  // const bottomRightButton = document.getElementById('bottomRight') as HTMLDivElement

  // const addHeightButton = document.getElementById('addHeight') as HTMLDivElement
  // const addWidthButton = document.getElementById('addWidth') as HTMLDivElement
  // const reduceHeightButton = document.getElementById('reduceHeight') as HTMLDivElement
  // const reduceWidthButton = document.getElementById('reduceWidth') as HTMLDivElement

  numdapDiv.addEventListener('click', (e) => {
    const eTarget = e.target as HTMLElement
    const target = eTarget.closest('.button')
    if (!target?.id) return
    switch (target.id) {
      case 'topLeft':
        moveXY(rectangle, -10, -10)
        initRect(rectangle, rectElement)
        return
      case 'top':
        moveY(rectangle, -10)
        initRect(rectangle, rectElement)
        return
      case 'topRight':
        moveXY(rectangle, 10, -10)
        initRect(rectangle, rectElement)
        return
      case 'left':
        moveX(rectangle, -10)
        initRect(rectangle, rectElement)
        return
      case 'right':
        moveX(rectangle, 10)
        initRect(rectangle, rectElement)
        return
      case 'bottomLeft':
        moveXY(rectangle, -10, 10)
        initRect(rectangle, rectElement)
        return
      case 'bottom':
        moveY(rectangle, 10)
        initRect(rectangle, rectElement)
        return
      case 'bottomRight':
        moveXY(rectangle, 10, 10)
        initRect(rectangle, rectElement)
        return
      case 'addHeight':
        changeHeight(rectangle, 1)
        initRect(rectangle, rectElement)
        return
      case 'addWidth':
        changeWidth(rectangle, 1)
        initRect(rectangle, rectElement)
        return
      case 'reduceHeight':
        changeHeight(rectangle, -1)
        initRect(rectangle, rectElement)
        return
      case 'reduceWidth':
        changeWidth(rectangle, -1)
        initRect(rectangle, rectElement)
        return
    }
  })

  // addHeightButton.addEventListener('click', ()=>{
  //   changeHeight(rectangle, 1)
  //   initRect(rectangle, rectElement)
  // })
  // reduceHeightButton.addEventListener('click', ()=>{
  //   changeHeight(rectangle, -1)
  //   initRect(rectangle, rectElement)
  // })
  // addWidthButton.addEventListener('click', ()=>{
  //   changeWidth(rectangle, 1)
  //   initRect(rectangle, rectElement)
  // })
  // reduceWidthButton.addEventListener('click', ()=>{
  //   changeWidth(rectangle, -1)
  //   initRect(rectangle, rectElement)
  // })

  // topLeftButton.addEventListener('click', ()=>{
  //   moveXY(rectangle, -10, -10)
  //   initRect(rectangle, rectElement)
  // })
  // topButton.addEventListener('click', ()=>{
  //   moveY(rectangle, -10)
  //   initRect(rectangle, rectElement)
  // })
  // topRightButton.addEventListener('click', ()=>{
  //   moveXY(rectangle, 10, -10)
  //   initRect(rectangle, rectElement)
  // })
  // leftButton.addEventListener('click', ()=>{
  //   moveX(rectangle, -10)
  //   initRect(rectangle, rectElement)
  // })
  // rightButton.addEventListener('click', ()=>{
  //   moveX(rectangle, 10)
  //   initRect(rectangle, rectElement)
  // })
  // bottomLeftButton.addEventListener('click', () => {
  //   moveXY(rectangle, -10, 10)
  //   initRect(rectangle, rectElement)
  // })
  // bottomButton.addEventListener('click', () => {
  //   moveY(rectangle, 10)
  //   initRect(rectangle, rectElement)
  // })
  // bottomRightButton.addEventListener('click', () => {
  //   moveXY(rectangle, 10, 10)
  //   initRect(rectangle, rectElement)
  // })







}





// ___________________________________________________________________________________________________________


// Задачи из учебника по теме Объекты

// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// const user = {

// } as Record<string, any> 

// user.name = 'John'
// user['surname'] = 'Smith'
// console.log(user)
// user['name'] = 'Pete'
// console.log(user)
// delete user.name
// console.log(user)


// Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// let schedule = {};

// function isEmpty(obj:object) {
//       for(let key in obj) {           
//             return false // если тело цикла начнет выполняться - значит в объекте есть свойства
//       }
//       return true
// }

// console.log(isEmpty(schedule))

// schedule["8:30"] = "get up"

// console.log(isEmpty(schedule))



// // У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//       John: 100,
//       Ann: 160,
//       Pete: 130
//     } as any

// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

//     let sum = 0

//     for(let key in salaries) {
//       sum += salaries[key]
//     }

//     console.log(sum)



// Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// } as Record<string, any>

// console.log(menu)

// function multiplyNumeric(obj: object) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2
//     }
//   }
// }

// multiplyNumeric(menu)

// console.log(menu)






// ___________________________________________________________________________________________________________

// Домашняя практика. Массивы.

{
  let arr = new Array()

  console.log(arr)

  arr[0] = 4
  arr[1] = 16
  arr[2] = 23

  console.log(arr)
}

{
  let arr = new Array(3)

  console.log(arr)

  arr[0] = 233
  arr[1] = 163
  arr[2] = 232

  console.log(arr)

  arr[3] = 56
  arr[4] = 3
  arr[5] = 98

  console.log(arr)
}

{
  let arr = new Array('books', 'magazines', 'newspapers')

  console.log(arr)

  arr[3] = 'maps'

  console.log(arr)
  console.log(arr[0])

  arr.length = 3
  console.log(arr)
}

{
  let arr = []
  arr[0] = 3
  console.log(arr)
}

{
  let arr = ['books', 'magazines', 'newspapers']
  console.log(arr)
  console.log(arr.length)
  arr[3] = 'maps'
  console.log(arr)
  console.log(arr.length)

  let arr2 = [43, -10, 5]
  console.log(arr2)
  console.log(arr2.length)
}

{
  let arr = [32, 17, 58, 100]
  let sum = 0
  // считаем в цикле сумму элементов массива
  for (let i = 0; i < arr.length; i++)
    sum += arr[i]

  console.log(sum)
}

{
  let arr = [1, 'Mercury', 2, 'Venus', 3, 'Earth']
  // Отображение содержимого массива с элементами разного типа.
  console.log(arr)

  for (let i = 0; i < arr.length; i++)
    console.log(arr[i])
}

{
  // Двумерный массив
  let arr = [
    [87, 12, 52],
    [97, 65, -43]
  ]

  console.log(arr)
  console.log(arr[0])
  console.log(arr[0][0])
  console.log(arr[1][2])
}

{
  let arr = [32, 17, 58, 100]
  console.log(arr)

  // функция записывает новое значение по указанному индексу
  function setValue(array: any, index: number, newValue: number) {
    array[index] = newValue
  }

  console.log(arr)

  setValue(arr, 1, 71)

  console.log(arr)
}

{

  let arr = [32, 17, 58, 100]

  // ищем значение 58
  let i = arr.indexOf(58)

  // значение 58 - под индексом 2
  console.log(i)

  // ищем значение 58, начиная с индекса 3 слева направо
  i = arr.indexOf(58, 3)

  // -1 т.к. значения 58, начиная с индекса 3 нет в массиве
  console.log(i)

  // ищем значение, которого нет в массиве
  let j = arr.indexOf(126)

  // -1 т.к. значения 126 нет в массиве
  console.log(j)

}

{
  // Сколько раз повторяется цифора 8 в массиве
  let arr = [8, 456, 8, 878, -8, 8, 13, 52, 8, 1]

  let index = arr.indexOf(8)
  let count = 0

  while (index != -1) {
    count++
    index = arr.indexOf(8, index + 1)
  }

  console.log(count)

}

{

  let arr = [32, 17, 58, 100]

  // ищем значение 58
  let i = arr.lastIndexOf(58)

  // значение 58 - под индексом 2
  console.log(i)

  // ищем значение 58, начиная с индекса 1 справа налево
  i = arr.lastIndexOf(58, 1)

  // -1 т.к. значения 58, начиная с индекса 1 и налево нет в массиве
  console.log(i)

  // ищем значение, которого нет в массиве
  let j = arr.lastIndexOf(126)

  // -1 т.к. значения 126 нет в массиве
  console.log(j)

}

{

  let arr = [8, 456, 8, 878, -8, 8, 13, 52, 8, 1]

  let index = arr.lastIndexOf(8)
  let count = 0

  while (index != -1) {
    count++

    if (index == 0) break

    index = arr.lastIndexOf(8, index - 1)
  }

  console.log(count)

}

{

  let arr = [10, 8, 456, 2, 8, -8, 13, 52, 1]

  console.log(arr)

  arr.sort()

  console.log(arr)


}

{

  let arr = [10, 8, 456, 2, 8, -8, 13, 52, 1]

  // сортировки данных по возрастанию
  function sortFunction(a: number, b: number) {
    if (a > b) return 1
    else if (b > a) return -1
    else return 0
  }

  arr.sort()
  console.log(arr)
  arr.sort(sortFunction)
  console.log(arr)



  //  сортировка по убыванию
  function sortFunction2(a: number, b: number) {
    if (a > b) return -1
    else if (b > a) return 1
    else return 0
  }

  let arr2 = [10, 8, 456, 2, 8, -8, 13, 52, 1]

  console.log(arr2)

  arr2.sort()
  console.log(arr2)
  arr2.sort(sortFunction2)
  console.log(arr2)

}

{

  let str = 'apple,onion,strawberry'

  // разбиваем строку на основании , (запятой)  
  let arr = str.split(',')

  // в массиве будет три элемента apple onion strawberry
  console.log(arr)
  console.log(arr[0])
  console.log(str)


  let arr2 = ['bmw', 'audi', 'opel']

  // создаем строку
  // в качестве разделительного символа между элементами  массива указываем *
  let str2 = arr2.join("*")

  console.log(str2)

  // если не указать разделитель, то будет использована запятая
  let str3 = arr2.join()

  console.log(str3)

  console.log(arr2)

}

{
  let arr = ['books', 'magazines', 'newspapers']
  console.log(arr)
  console.log(arr.length)
  // Добавление элемента в конец массива
  arr.push('maps')
  console.log(arr)
  console.log(arr.length)

  let pushInArr = arr.push('guidebooks')
  console.log(arr)
  console.log(pushInArr)
  console.log(arr.length)

  arr.push('')
  console.log(arr)

  // Удаление последнего элемента массива
  arr.pop()
  console.log(arr)

  let popArr = arr.pop()
  console.log(arr)
  console.log(popArr)

  // Удаление первого элемента массива
  let shiftArr = arr.shift()
  console.log(arr)
  console.log(shiftArr)

  // Добавление элемента в начало массива
  arr.unshift('books')
  console.log(arr)

  // Удаление нескольких элементов splice() 
  arr.splice(1, 2)
  console.log(arr)

  // Создание копии массива 
  const arrCopy = arr.slice()
  console.log(arrCopy)

  arr.push('magazines', 'newspapers', 'guidebooks')
  console.log(arr)

  // Удаление элемента с определённым индексом
  // Удаляет 1 элемент по индексу 2
  arr.splice(2, 1)
  console.log(arr)

  // Удаляет все элементы после индекса 2 (включительно)
  arr.splice(2)
  console.log(arr)

  arr.push('magazines', 'newspapers', 'guidebooks')
  console.log(arr)

  // Удаление нескольких элементов, начиная с определённого индекса
  arr.splice(1, 2)
  console.log(arr)

  // Удаляет 0 элементов по индексу 1 и вставляет 'maps'
  arr.splice(1, 0, 'maps')
  console.log(arr)

  // Удаляет 1 элемент по индексу -2 (отсчёт с конца)
  arr.splice(-2, 1)
  console.log(arr)

  // Соединение массивов и/или значений в новый массив 
  const array1 = ['a', 'b', 'c']
  const array2 = ['d', 'e', 'f']
  const array3 = array1.concat(array2)
  console.log(array3)

  // Соединение трёх массивов и двух значений
  const arr4 = arr.concat(array1, array2, ['magazines', 'newspapers'])
  console.log(arr4)

  // Перебор: forEach
  arr.forEach(function (item) {
    console.log(item)
  })

  arr.forEach((item) => {
    console.log(item)
  })

  array1.forEach(function (item) {
    console.log(item)
  })

  arr.forEach(function (item, index, array) {
    console.log(index + ' ' + item + ' ' + array)
    console.log(index)
    console.log(array)
  })

  // Поиск в массиве
  console.log(arr.includes('books'))
  console.log(arr.includes('newspapers'))
  console.log(arr.indexOf('books'))
  console.log(arr.indexOf('newspapers'))
  console.log(arr.lastIndexOf('books'))
  console.log(arr.lastIndexOf('newspapers'))

  // Метод arr.reverse меняет порядок элементов в arr на обратный.
  console.log(arr)
  arr.reverse()
  console.log(arr)

  // преобразуем каждый элемент в его длину
  let lengths = arr.map(item => item.length)
  console.log(arr)
  console.log(lengths)

  // Функция преобразует строки вида «my-short-string» в «myShortString».
  function change(str: string) {
    return str
      .split('-')
      .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
      .join('')
  }

  console.log(change('background-color'))


  let arr2 = [10, 8, 456, 2, 8, -8, 13, 52, 1]

  console.log(arr2)

  arr2.splice(3, 0, 5, 6)

  console.log(arr2)

  // Фильтрация по диапазону
  function filter(array: any, a: any, b: any) {
    return array.filter(item => (a <= item && item <= b))
  }

  let filtered = filter(arr2, -10, 5)

  console.log(filtered)
  console.log(arr2)

  // Фильтрация по диапазону "на месте"
  function filterRangeInPlace(arr: any, a: any, b: any) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i]

      // удалить, если за пределами интервала
      if (val < a || val > b) {
        arr.splice(i, 1)
        i--
      }
    }

  }

  // удалены числа вне диапазона 
  filterRangeInPlace(arr2, -10, 5)

  console.log(arr2)


  let arr3 = ["HTML", "JavaScript", "CSS"]

  // Скопировать и отсортировать массив
  function copySorted(array: any) {
    return array.slice().sort()
  }

  let sorted = copySorted(arr3)
  console.log(sorted)

  // Трансформировать в массив имён
  let vasya = { name: "Вася", age: 25 }
  let petya = { name: "Петя", age: 30 }
  let masha = { name: "Маша", age: 28 }

  let users = [vasya, petya, masha]

  let names = users.map(item => item.name)

  console.log(names)


  console.log(arr2)
  console.log(arr2.slice(1, 2))
  console.log(arr2)
  console.log(arr2.splice(1, 2))
  console.log(arr2)

  for (let el of arr)
    console.log(el)

  for (let key in arr)
    console.log(key)

  for (let key in arr)
    console.log(arr[key])

  console.log(String(arr))
  console.log(String(arr2))

  if (arr)
    console.log('Массив существует')

  if (arr.length)
    console.log('В массиве есть данные в количестве ' + arr.length)


}

{
  // стрелочная функция
  let userSum = (x1: any, x2: any) => x1 + x2
  console.log(userSum(2, 5))
  console.log(userSum('Good ', 'day'))

  // @ts-ignore
  let sq = n => n * n
  console.log(sq(2))
  console.log(sq(3))

  let show = () => console.log('Good day!')
  show()
}

{
  const arr = [() => console.log('Привет!'), () => console.log('Здравствуйте!'), () => console.log('Добрый день!')]

  arr[0]()
}

// ___________________________________________________________________________________________________________








// *********************************************************************************************************


// Массивы


// Домашние задания. Массивы

// DZ_Modul_2_Week_2  Выполнено полностью.


// *********************************************************************************************************


// ТЕМА: ОБЪЕКТ. МАССИВЫ. ОБЪЕКТ ARRAY. СТРОКИ. 
// ОБЪЕКТ STRING. ОБЪЕКТ DATE. ОБЪЕКТ MATH. 
// ВВЕДЕНИЕ В ООП

// Задание 1

// Создать массив «Список покупок». Каждый элемент массива является объектом, 
// который содержит название продукта, необходимое количество и куплен или нет. 
// Написать несколько функций для работы с таким массивом.

{
  type product = {
    name: string,
    unitOfMeas: string,
    quantity: number,
    bought: boolean,
  }

  const shoppingList: product[] = [
    { name: 'Хлеб', unitOfMeas: 'шт', quantity: 1, bought: false },
    { name: 'Сыр', unitOfMeas: 'гр', quantity: 300, bought: true },
    { name: 'Молоко', unitOfMeas: 'мл', quantity: 1000, bought: false },
    { name: 'Яблоки', unitOfMeas: 'гр', quantity: 300, bought: false },
    { name: 'Мука', unitOfMeas: 'гр', quantity: 1000, bought: true },
    { name: 'Картошка', unitOfMeas: 'гр', quantity: 1000, bought: true },
    { name: 'Конфеты', unitOfMeas: 'гр', quantity: 200, bought: false },
  ]

  // console.log(shoppingList)

  console.log('-----------------------------------------')



  // 1. Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.


  function DisplayingList(array: any) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].bought == false) {
        console.log(array[i].name + ' ' + array[i].quantity + ' ' + array[i].unitOfMeas + ' ' + (array[i].bought == false ? 'не куплено' : 'куплено'))
      }
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i].bought == true) {
        console.log(array[i].name + ' ' + array[i].quantity + ' ' + array[i].unitOfMeas + ' ' + (array[i].bought == false ? 'не куплено' : 'куплено'))
      }
    }
  }


  DisplayingList(shoppingList)


  console.log('-----------------------------------------')
  console.log('ФИЛЬТР')

  let someList = shoppingList.filter(item => item.bought == false)
  console.log(someList.length)

  console.log('ФИЛЬТР')

  function DisplayingList2(array: any) {
    array.filter(function (item: any) {
      item.bought == false ? console.log(item.name + ' ' + item.bought) : ''
    })
    array.filter(function (item: any) {
      item.bought == false ? '' : console.log(item.name + ' ' + item.bought)
    })
  }
  DisplayingList2(shoppingList)


  console.log('-----------------------------------------')

  console.log('Как в практике')

  // Вывод списка покупок на страницу

  // В переменную toBuyListOL попадает список с id toBuyList
  const toBuyListOL = document.getElementById('toBuyList') as HTMLOListElement

  function renderBuyList(arr: product[]) {
    let html = ''

    for (let el of arr) {
      if (!el.bought) {
        html += `<li style = "color: red;"> ${el.name} ${el.quantity} ${el.unitOfMeas} <button data-name = "${el.name}">Отметить купленным</button></li>`
      }
    }
    for (let el of arr) {
      if (el.bought) {
        html += `<li style = "color: green;"><s>${el.name} ${el.quantity} ${el.unitOfMeas}</s></li>`
      }
    }

    toBuyListOL.innerHTML = html
  }

  renderBuyList(shoppingList)

  console.log('-----------------------------------------')


  // 2. Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
  // необходимо увеличивать количество в существующей покупке, а не добавлять новую. 


  function addPurchases(array: any, n: string, un: string, q: number, b: boolean) {
    let j = false
    for (let i = 0; i < array.length; i++) {
      if (array[i].name == n) {
        array[i].quantity += q
        return
      }
      else {
        j = true
      }
    }

    if (j == true) {
      array[array.length] = { name: n, unitOfMeas: un, quantity: q, bought: b, }
    }

  }

  addPurchases(shoppingList, 'Хлеб', 'шт', 1, false)
  console.log(shoppingList.length)


  addPurchases(shoppingList, 'Мыло', 'шт', 1, false)

  console.log(shoppingList.length)

  DisplayingList(shoppingList)



  console.log('-----------------------------------------')

  // Второй способ добаления с помощью push

  function addPurchases2(array: any, n: string, un: string, q: number, b: boolean) {
    let j = false
    for (let i = 0; i < array.length; i++) {
      if (array[i].name == n) {
        array[i].quantity += q
        return
      }
      else {
        j = true
      }
    }

    if (j == true) {
      array.push({ name: n, unitOfMeas: un, quantity: q, bought: b, })
    }

  }

  addPurchases2(shoppingList, 'Хлеб', 'шт', 1, false)
  console.log(shoppingList.length)


  addPurchases2(shoppingList, 'Велосипед', 'шт', 1, false)

  console.log(shoppingList.length)

  DisplayingList(shoppingList)



  console.log('-----------------------------------------')



  console.log('Как в практике')

  const productNameInput = document.getElementById('productName') as HTMLInputElement
  const productUnitInput = document.getElementById('productUnit') as HTMLInputElement
  const productCountInput = document.getElementById('productCount') as HTMLInputElement
  const addProductButton = document.getElementById('addProduct') as HTMLButtonElement

  function addToBuyList(array: product[], name: string, unitOfMeas: string, quantity: number) {
    let inList = false

    for (let el of array) {
      if (el.name == name && !el.bought) {
        el.quantity += quantity
        inList = true
      }
    }

    if (!inList) {
      array.push({ name, unitOfMeas, quantity, bought: false })
    }
    renderBuyList(array)
  }

  addProductButton.addEventListener('click', function () {
    const count = parseFloat(productCountInput.value.replace(',', '.'))
    addToBuyList(shoppingList, productNameInput.value, productUnitInput.value, count)
    productNameInput.value = ''
    productUnitInput.value = ''
    productCountInput.value = ''
  })
  // addProductButton.onclick = function() {
  //   addToBuyList(shoppingList, productNameInput.value, productUnitInput.value, +productCountInput.value)
  // }


  console.log('-----------------------------------------')

  // 3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный.


  function PurchasingProduct(array: any, n: string) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].name == n) {
        array[i].bought = true
        return
      }
    }
  }

  PurchasingProduct(shoppingList, 'bread')

  DisplayingList(shoppingList)





  console.log('-----------------------------------------')

  console.log('Как в практике')

  // Отметить купленным
  const setBoughtButton = document.getElementById('setBought') as HTMLButtonElement

  function markTheProduct(array: product[], name: string) {
    for (let el of array) {
      if (el.name == name) {
        el.bought = true
      }
    }
    renderBuyList(array)
  }

  setBoughtButton.addEventListener('click', function () {
    markTheProduct(shoppingList, productNameInput.value)
    productNameInput.value = ''
  })

  toBuyListOL.addEventListener('click', function (e) {
    const target = e.target as HTMLElement
    if (target.tagName == 'BUTTON' && target.dataset.name) {
      markTheProduct(shoppingList, target.dataset.name)
    }
  })




}

console.log('-----------------------------------------')





{

  // Задание 2

  // Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, 
  // количества и цены за единицу товара. Написать следующие функции.

  type product = {
    name: string,
    quantity: number,
    price: number,
  }

  const storeReceipt: product[] = [
    { name: 'Хлеб', quantity: 1, price: 30 },
    { name: 'Сыр', quantity: 4, price: 200 },
    { name: 'Молоко', quantity: 2, price: 80 },
    { name: 'Яблоки', quantity: 5, price: 12 },
    { name: 'Картошка', quantity: 20, price: 2 },
  ]

  // 1. Распечатка чека на экран.

  function showList(array: any) {
    console.log('Чек: ')
    for (let i in array)
      console.log(array[i].name + ' ' + array[i].quantity + ' ' + array[i].price + ' Подитог: ' + array[i].quantity * array[i].price)
  }

  showList(storeReceipt)


  console.log('-----------------------------------------')

  const checkListOl = document.getElementById('checkList') as HTMLOListElement

  function renderCheckList(arr: product[]) {
    let html = ''

    for (let el of arr) {
      html += `<li> ${el.name} ${el.quantity} ${el.price} руб. </li>`
    }

    html += 'Общая сумма чека: ' + getAmount(storeReceipt)
    checkListOl.innerHTML = html
  }

  renderCheckList(storeReceipt)




  console.log('-----------------------------------------')

  // Как у Кати

  // 1 Распечатка чека на экран.

const chequeShopDiv = document.getElementById('cheque_shop') as HTMLDivElement

function showChequeShop(arr: product[]) {
    let html = '<h3>check №2342342</h3>'
    html += '<p>IP ........</p>'
    html += `<table><tr>
    <th>  
    name
    </th>
    <th>  
    count
    </th>
    <th>  
    price
    </th>
    <th>  
    summary
    </th>
    </tr>`
    for (let el of arr) {
        html += `<tr>
            <td>  
            ${el.name}
            </td>
            <td>  
            ${el.quantity} 
            </td>
            <td>  
            ${el.price}
            </td>
            <td>  
            ${el.price * el.quantity}
            </td>
        </tr>`
    }
    html += '</table>'
    html += `<h3>TO PAY:   ${getAmount(arr)}$</h3>`

    chequeShopDiv.innerHTML = html
}


showChequeShop(storeReceipt)



  console.log('-----------------------------------------')

  // 2. Подсчет общей суммы покупки. 

  function getAmount(array: any) {
    let sum = 0
    for (let i = 0; i < array.length; i++)
      sum += array[i].quantity * array[i].price

    return sum
  }

  console.log('Общая сумма чека: ' + getAmount(storeReceipt))


  // 3. Получение самой дорогой покупки в чеке. 

  function getMax(array: any) {
    let sub = array[0].quantity * array[0].price
    let max = sub
    let j = ''
    let result = ''

    for (let i = 0; i < array.length; i++) {
      sub = array[i].quantity * array[i].price
      if (max < sub) { max = sub; j = array[i].name }
    }
    return result = j + ' ' + max
  }

  console.log('Самая дорогая покупка в чеке: ' + getMax(storeReceipt))


  // 4. Подсчет средней стоимости одного товара в чеке. 

  function getAverageCost(array: any) {
    let num1 = 0
    let num2 = 0
    for(let i = 0; i < array.length; i++) {
      num1 += array[i].price
      num2 += array[i].quantity
    }
    return num1 / num2
  }

  console.log('Средняя стоимость одного товара в чеке: ' + getAverageCost(storeReceipt))


  function getAverageCost2(array: any) {
    let sumQ = 0

    for (let i = 0; i < array.length; i++)
      sumQ += array[i].quantity

    return getAmount(array) / sumQ
  }

  console.log('Средняя ст-ть одной штуки товара в чеке: ' + Math.floor(getAverageCost2(storeReceipt)))

}

console.log('-----------------------------------------')



{
  // Задание 3

  // Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
  // Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 

  type styles = {
    stName: string,
    stVal: string
  }

  const myStyles: styles[] = [
    { stName: 'max-width', stVal: '1280px' },
    { stName: 'font-size', stVal: '5.2rem' },
    { stName: 'color', stVal: '#888' },
    { stName: 'text-align', stVal: 'center' },
    { stName: 'text-decoration', stVal: 'underline' },
    { stName: 'font-weight', stVal: '600' },
  ]

  console.log(myStyles)


  // Написать функцию, которая принимает массив стилей и текст, 
  // и выводит этот текст с помощью document.write() в тегах <p></p>, 
  // добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве. 

  const pMyStylesText = document.getElementById('pMyStyles') as HTMLParagraphElement

  function showStylesArray(array: styles[], myText: string) {

    let styleText = ''

    for (let i = 0; i < array.length; i++) {
      styleText += `${array[i].stName}: ${array[i].stVal}; `
    }

    const tagString = `<p style = "${styleText}">${myText}</p>`
    pMyStylesText.innerHTML += tagString
  }

  showStylesArray(myStyles, 'Здесь есть текст')

  // let z_H2 = document.createElement('h2')

  // function show5Blocks3(n:any) {
  //   for (let i = 1; i <= n; i++) {
  //     document.write('<h2> Header ' + i + '</h2>')
  //   }
  // }
  // show5Blocks3(5)

  // function show5Blocks(n) {
  //   for (let i = 1; i <= n; i++) {
  //     document.write('<h2> Header ' + i + '</h2>')
  //   }
  // }
  // show5Blocks(5)
  // function show5Blocks2(n) {
  //   for (let i = 1; i <= n; i++) {
  //     document.write('<h' + i + '>' + 'Header ' + i + '</h2>')
  //   }
  // }
  // show5Blocks2(6)

}

{

  // Создать массив css - стилей(цвет, размер шрифта, выравнива -
// ние, подчеркивание и т.д.).Каждый элемент массива – это объ -
// ект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и
// текст, и выводит этот текст с помощью document.write() в тегах
// < p > </>, добавив в открывающий тег атрибут style со всеми сти-
// лями, перечисленными в массиве.

const styles = [
  {color:'red'},
  {'font-size':'20px'},
  {'text-align':'center'},
]
const styles2 = [
  {color:'green'},
  {'font-size':'16px'},
  {'text-align':'center'},
]

const renderTextDiv = document.getElementById('renderText') as HTMLDivElement

function renderText(styles:any[], text:string) {
  let styleText = ''
  for (let el of styles) {
    for (let key in el) {
      styleText += `${key}:${el[key]};`
    }
  }
  const tagString = `<p style="${styleText}">${text}</p>`
  // renderTextDiv.insertAdjacentHTML('beforeend', tagString)
  renderTextDiv.innerHTML+=tagString
}

renderText(styles, 'test1')
renderText(styles2, 'test2')

}

console.log('-----------------------------------------')


{
  // Задание 4

  // Создать массив аудиторий академии. 
  // Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и 
  // названия факультета, для которого она предназначена. 

  const classrooms = [
    { audName: 'VKontakte', numOfSeats: 18, facName: 'programming' },
    { audName: 'YouTube', numOfSeats: 10, facName: 'design' },
    { audName: 'instagram', numOfSeats: 20, facName: 'design' },
    { audName: 'Yandex', numOfSeats: 15, facName: 'programming' },
    { audName: 'Google', numOfSeats: 20, facName: 'programming' },
  ]

  console.log(classrooms)


  // Написать несколько функций для работы с ним.

  console.log('-----------------------------------------')

  // 1. Вывод на экран всех аудиторий. 

  function showClassrooms(array: any) {
    for (let i = 0; i < array.length; i++)
      console.log(array[i].audName)
  }

  showClassrooms(classrooms)

  console.log('-----------------------------------------')

  // 2. Вывод на экран аудиторий для указанного факультета.

  function showClasForFac(array: any, name: string) {
    for (let i = 0; i < array.length; i++)
      if (array[i].facName == name) console.log(array[i].audName)
  }

  showClasForFac(classrooms, 'programming')

  console.log('-----------------------------------------')

  // Вывод на экран всех аудиторий.

  const acadClassroomsOl = document.getElementById('AcadClassrooms') as HTMLOListElement

  function renderlassrooms(arr: any) {
    let html = ''
    for (let el of arr) {
      html += `<li>${el.audName},  ${el.numOfSeats} мест, факультет: ${el.facName}</li>`
    }
    acadClassroomsOl.innerHTML = html
  }

  renderlassrooms(classrooms)


  console.log('-----------------------------------------')

  // 3. Вывод на экран только тех аудиторий, которые подходят для переданной группы. 
  // Объект-группа состоит из названия, количества студентов и названия факультета. 

  let Web36 = {
    grName: 'Web36',
    numOfStudents: 18,
    facName: 'programming',
  }


  function showClasForGroup(array: any, obj: any) {
    for (let i = 0; i < array.length; i++) {
      if (obj.facName == array[i].facName && (obj.numOfStudents <= array[i].numOfSeats))
        console.log(array[i].audName)
    }
  }

  showClasForGroup(classrooms, Web36)


  // 4. Функция сортировки аудиторий по количеству мест.

  console.log(classrooms)

  classrooms.sort((a, b) => a.numOfSeats - b.numOfSeats)

  console.log(classrooms)



  // 5. Функция сортировки аудиторий по названию (по алфавиту).

  console.log(classrooms)

  classrooms.sort((a, b) => a.audName.localeCompare(b.audName))

  console.log(classrooms)


}


// ___________________________________________________________________________________________________________






// *********************************************************************************************************


// Массивы

// Практические задания. Массивы


// PZ_Modul_2_Week_2  Выполнено полностью.



// *********************************************************************************************************



// ТЕМА: ОБЪЕКТ. МАССИВЫ. ОБЪЕКТ ARRAY. СТРОКИ. 
// ОБЪЕКТ STRING. ОБЪЕКТ DATE. ОБЪЕКТ MATH. 
// ВВЕДЕНИЕ В ООП


// Задание 1

// Создать массив из 10 случайных чисел и написать несколько функций для работы с ним.

{

  const arr1: number[] = []

  console.log(arr1)

  function getArray(array: number[], num: number) {
    for (let i = 0; i < num; i++)
      array[i] = Math.floor(Math.random() * 20)
  }

  getArray(arr1, 10)

  console.log(arr1)


  // 1. Функция принимает массив и выводит его на экран.

  function showArray(array: any) {
    for (let key of array)
      console.log(key)
  }

  showArray(arr1)


  // 2. Функция принимает массив и выводит только четные элементы.

  function showArrEvenEl(array: any) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0) console.log(array[i])
    }
  }

  showArrEvenEl(arr1)


  // 3. Функция принимает массив и возвращает сумму всех элементов массива.

  function getSumOfEl(array: any) {
    let sum = 0
    for (let i = 0; i < array.length; i++)
      sum += array[i]

    return sum
  }

  console.log(getSumOfEl(arr1))

  // 4. Функция принимает массив и возвращает его максимальный элемент.

  function getMaxElOfArray(array: any) {
    let max = array[0]
    for (let i = 0; i < array.length; i++)
      if (max < array[i]) max = array[i]

    return max
  }

  console.log(arr1)

  console.log(getMaxElOfArray(arr1))

  console.log(Math.max.apply(null, arr1))

  console.log(Math.max(...arr1))


  // 5. Функция добавления нового элемента в массив по указанному индексу.

  function addElInArray(array: any, index: number, newEl: any) {
    return array.splice(index, 0, newEl)
  }

  console.log(arr1)

  console.log(addElInArray(arr1, 1, 45))

  console.log(arr1)



  // 6. Функция удаления элемента из массива по указанному индексу.

  function delElInArray(array: any, index: number) {
    return array.splice(index, 1)
  }

  console.log(arr1)

  console.log(delElInArray(arr1, 1))

  console.log(arr1)




  // Задание 2

  // Создать еще один массив из 5 случайных чисел и написать следующие функции.

  const arr2: number[] = []

  console.log(arr2)

  getArray(arr2, 5)

  console.log(arr2)

  // 1. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы 
  // из двух массивов без повторений.

  let arr3: number[] = []

  function getNewArray(array1: number[], array2: number[]) {
    let array3: number[] = []

    for (let i = 0; i < array1.length; i++) {
      if (array3.includes(array1[i]))
        continue
      else array3.push(array1[i])
    }
    for (let i = 0; i < array2.length; i++) {
      if (array3.includes(array2[i]))
        continue
      else array3.push(array2[i])
    }
    return array3
  }

  arr3 = getNewArray(arr1, arr2)
  console.log(arr1)
  console.log(arr2)
  console.log(arr3)


  function getNewArray2(array1: number[], array2: number[]) {
    let array3: number[] = []

    for (let el of array1) {
      if (!array3.includes(el))
          array3.push(el)
    }
    for (let el of array2) {
      if (!array3.includes(el))
          array3.push(el)
    }
    return array3
  }

  arr3 = getNewArray2(arr1, arr2)
  console.log(arr1)
  console.log(arr2)
  console.log(arr3)


  // 2. Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы 
  // (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.

  function getNewCommonArray(array1: number[], array2: number[]) {
    const array3: number[] = []

    for (let el of array1) {
      if (array1.includes(el) && array2.includes(el)) {
        if (!array3.includes(el))
          array3.push(el)
      }
    }
   
    return array3
  }

  arr3 = getNewCommonArray(arr1, arr2)
  console.log(arr1)
  console.log(arr2)
  console.log(arr3)


  // 3. Функция принимает 2 массива и возвращает новый массив, в котором собраны 
  // все элементы из первого массива, которых нет во втором массиве. 

  function getNewNotCommonArray(array1: number[], array2: number[]) {
    const array3: number[] = []

    for (let el of array1) {
      if (!array2.includes(el)) {
        if (!array3.includes(el))
          array3.push(el)
      }
    }
   
    return array3
  }

  arr3 = getNewNotCommonArray(arr1, arr2)
  console.log(arr1)
  console.log(arr2)
  console.log(arr3)


}


// Задание 3

// Создать массив фруктов и отсортировать его по алфавиту. 
// Написать следующие функции.

{

  const fruits = ['Apple', 'Mango', 'Orange', 'Pear', 'Pineapple', 'Banana', 'Lemon', 'Plum', 'Mandarin', 'Pomegranate', 'Persimmon', 'Apricot']

  console.log(fruits)

  fruits.sort((a, b) => a.localeCompare(b))

  console.log(fruits)



  // 1. Вывод на экран с помощью document.write() в виде списка 
  // (с помощью тегов ul и li). 

const fruitOl = document.getElementById('fruit') as HTMLOListElement

function renderFruit(arr:any) {
  let html = ''
  for(let el of arr) {
    html += `<li>${el}</li>`
  }
  fruitOl.innerHTML = html
}

renderFruit(fruits)

  

  // 2. Поиск фрукта в массиве. Функция принимает название 
  // фрукта и возвращает индекс найденного элемента или -1, 
  // если не найден. Поиск должен быть нерегистрозависимым. 

  function findFruit(arr:any, fruit:string) {
    
    const pos = arr.indexOf(fruit[0].toUpperCase() + fruit.slice(1))
    return pos
  }

  console.log(findFruit(fruits, 'Mango'))
  console.log(findFruit(fruits, 'banana'))
  console.log(findFruit(fruits, 'tomato'))

}


// ___________________________________________________________________________________________________________



//  02/04/2024

// Массивы и функции

// Практика на уроке

// 1.1.  Написать функцию возвращающую массив целых чисел от 0 до 10


// Функция возвращает массив от одного числа до второго, заданных пользователем

{
  function getArrayOfIintegers(num1: number, num2: number) {
    let arr = []

    for (let i = 0; num1 <= num2; i++) {
      arr[i] = num1
      num1++
    }

    return arr
  }

  console.log(getArrayOfIintegers(0, 10))
}

// Функция возвращает массив случайных целых чисел от 0 до 10, размер массива задан пользователем

{
  function getArrayOfIintegers2(num: number) {
    let arr = []

    for (let i = 0; i < num; i++) {
      // @ts-ignore
      arr[i] = parseInt(Math.random() * 11)
    }

    return arr
  }

  console.log(getArrayOfIintegers2(7))
}

// 1.2.  Добавить в функцию опциональные параметры начального и конечного значения массива
//     (если конечный элемент массива не передан, то он больше начального на 10) . Вызвать функцию несколько раз
{
  // Заполняет числами от start до end 
  function getArrayOfIintegers3(start = 0, end = start + 10) {
    let arr = []

    for (let i = 0; start <= end; i++) {
      arr[i] = start
      start++
    }

    return arr
  }

  console.log(getArrayOfIintegers3(2))
}

// Заполняет случайными числами
{
  function getArrayOfIintegers4(start = 0, end = start + 10) {
    let arr = []

    for (let i = 0; i < end; i++) {
      // @ts-ignore
      arr[i] = parseInt(Math.random() * 11)
    }

    return arr
  }

  console.log(getArrayOfIintegers4(2))
}



// 1.3*. Написать функцию возвращающюю массив случайных целых чисел. 
// Функция принимает 1 параметр, количество элементов в будущем массиве

// Функция возвращает массив случайных целых чисел от 0 до 10, размер массива задан пользователем

{
  function getArrayOfIintegers2(num: number) {
    let arr = []

    for (let i = 0; i < num; i++) {
      //  arr[i] = parseInt(Math.random() * 11)
      arr.push(Math.floor(Math.random() * 11))
    }

    return arr
  }

  console.log(getArrayOfIintegers2(5))
}

{
  function funcName(start = 0, end = start + 10) {
    return console.log(start, end)
  }

  funcName()
}

{
  function generateArray(start = 0, end = start + 10) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
  console.log(generateArray())
  console.log(generateArray(20))
  console.log(generateArray(20))
  console.log(generateArray(20, 50))
}




// 2.1. В файле html создать пустой div с произвольным id
// 2.2. Получить объект div'а в js при помощи метода document.getElementById(ваш id) as HTMLDivElement

let pr = document.getElementById('Primer') as HTMLDivElement

let pr2 = document.getElementById('Primer2') as HTMLDivElement

let pr3 = document.getElementById('Primer3') as HTMLDivElement


// 2.3. Вывесли в полученный div текст, "Привет, пользователь"

// 2.4. Написать функцию, которая возвращает текст "Привет, пользователь" или 
// "Привет, <имяПользователя>" в зависимости от переданных параметров и использовать её в задании 2.3.

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

// let str = 'федот'

console.log('федот'[0].toUpperCase())



// ___________________________________________________________________________________________________________


// Домашняя практика. Строки.

{

  let someStr = 'Good morning'
  console.log(someStr)

  someStr = 'Sun\t is going \\down\\'
  console.log(someStr)

  someStr = '"Yes"'
  console.log(someStr)

  someStr = '\"No\"'
  console.log(someStr)

  someStr = 'good morning'
  console.log(someStr[0])
  console.log(someStr[4])

  // someStr[0].toUpperCase()
  console.log(someStr[0].toUpperCase() + someStr.slice(1))

  console.log(someStr)

  console.log(someStr.length)

  console.log(someStr)

  console.log(someStr.charAt(0))

  console.log(someStr.charAt(20))

  console.log(someStr[20])

  console.log(someStr)

  let someStr2 = someStr.toUpperCase()

  console.log(someStr2)

  console.log(someStr)

  let index = someStr.indexOf('morning')

  console.log(index)

  index = someStr.indexOf('zzz')

  console.log(index)


  let someStr3 = 'test it is test sun test no'

  let counter = 0

  let wordToFind = 'test'

  index = someStr3.indexOf(wordToFind)

  console.log(index)

  while (index != -1) {
    counter++;
    index = someStr3.indexOf(wordToFind, index + 1);
  }

  console.log(counter)

  console.log(someStr)

  let someStr4 = someStr.substring(2)

  console.log(someStr4)

  someStr4 = someStr.substring(2, 4)

  console.log(someStr4)


  console.log(someStr)

  let someStr5 = someStr.substr(2)

  console.log(someStr5)

  someStr5 = someStr.substr(2, 5)

  console.log(someStr5)

  let someStr6 = someStr[0].toUpperCase() + someStr.slice(1)

  console.log(someStr)
  console.log(someStr6)

  console.log(someStr == someStr6)
  console.log(someStr < someStr6)
  console.log(someStr > someStr6)
  console.log('G' < 'g')
  console.log('G' > 'g')

}

{

  // Домашняя практика. Задержки и интервалы.

  function hello() {
    console.log('Hello')
  }
  setTimeout(hello, 5000)

  function sum(x1: number, x2: number) {
    console.log(x1 + x2)
  }
  setTimeout(sum, 7000, 1, 2)

  // setTimeout(console.log('Hi'), 2000)

  setTimeout(function () { console.log('Hi') }, 3000)

  setTimeout(function (x1: number, x2: number) {
    console.log(x1 * x2)
  }, 2000, 3, 7)

  let idTime = setTimeout(function () { console.log('Hi') }, 300)
  console.log(idTime)

  clearTimeout(idTime)
  console.log(idTime)



  setInterval(function () { console.log('Hi') }, 8000)


  let idSet = setInterval(intervalFunc, 2000)
  let conter = 0

  function intervalFunc() {
    if (conter == 3) {
      clearInterval(idSet)
      return
    }
    conter++
    console.log('Hi')
  }


  let id = setTimeout(TimeOutFunc, 2000)
  let counter = 0

  function TimeOutFunc() {
    // если таймер сработал уже трижды 
    // останавливаем процесс 
    if (counter == 3) {
      clearTimeout(id)
      return
    }
    counter++
    console.log('Hi')
    // ставим занова таймер на две секунды 
    id = setTimeout(TimeOutFunc, 2000)
  }

}

{

  let id = setTimeout(TimeOutFunc, 2000)
  let counter = 1
  function TimeOutFunc() {
    console.log('Hi')
    switch (counter) {
      case 1:
        id = setTimeout(TimeOutFunc, 5000)
        break
      case 2:
        id = setTimeout(TimeOutFunc, 10000)
        break
      case 3:
        clearTimeout(id)
        return
    }
    counter++
  }

}

{
  // Домашняя практика. Объект Math. Случайные числа


  console.log(Math.PI)
  console.log(Math.E)

  let num1 = 8.3
  let num2 = 8.5

  console.log(Math.ceil(num1))
  console.log(Math.ceil(num2))

  console.log(Math.floor(num1))
  console.log(Math.floor(num2))

  console.log(Math.round(num1))
  console.log(Math.round(num2))

  console.log(Math.pow(3, 2))

  console.log(Math.sqrt(25))

  console.log(Math.min(25, -1, 102, 3, 12, 65, -10, 23, 34))

  console.log(Math.max(25, -1, 102, 3, 12, 65, -10, 23, 34))

  console.log(Math.abs(-14))

  console.log(Math.random())

  // случайное значение от 0 до 9 включительно
  console.log(Math.floor(Math.random() * 10))

  // случайное значение от 1 до 10
  console.log(Math.floor(Math.random() * 10 + 1))

  // случайное значение от 0 до 10 включительно
  console.log(Math.floor(Math.random() * 11))



  for (let i = 0; i < 30; i++) {
    console.log(Math.floor(Math.random() * 10 + 1))
  }

}

{
  // Домашняя практика. Объект Date. Обработка даты и времени


  const userDate = new Date()

  console.log(userDate)

}



// ___________________________________________________________________________________________________________




// *************************************************************************************************

// Домашние задания 

// DZ_Modul_2_Week_3

//  СТРОКИ   В работе.


// *************************************************************************************************



{

// Модуль 2
//  ТЕМА: ОБЪЕКТ. МАССИВЫ. ОБЪЕКТ ARRAY. СТРОКИ. 
// ОБЪЕКТ STRING. ОБЪЕКТ DATE. ОБЪЕКТ MATH.  
// ВВЕДЕНИЕ В ООП
//  Задание
//  1. 
// Написать функцию, которая принимает строку и выводит 
// статистику о ней: количество букв, количество цифр и 
// количество других знаков.
//  2. Написать функцию, которая принимает двузначное число 
// и возвращает его в текстовом виде. 
// Например: 35 – тридцать пять, 89 – восемьдесят девять, 
// 12 – двенадцать. 
// 3. Написать функцию, которая заменяет в полученной строке 
// большие буквы на маленькие, маленькие – на большие, а 
// цифры – на знак нижнего подчеркивания. 
// 4. Написать функцию, которая преобразует названия css- 
// стилей с дефисом в название в СamelСase стиле: font-size 
// в fontSize, background-color в backgroundColor, text
// align в textAlign.
//  5. Написать функцию, которая принимает словосочетание 
// и превращает его в аббревиатуру. 
// Например: cascading style sheets в CSS, объектно
// ориентированное программирование в ООП.

// 6. Написать функцию, которая принимает любое коли
// чество строк, объединяет их в одну длинную строку и 
// возвращает ее. 
// 7. 
// Написать функцию – калькулятор. Функция принимает 
// строку с примером, определяет, какое действие необходимо 
// выполнить (+ - * /), переводит операнды в числа, решает 
// пример и возвращает результат.
//  8. Написать функцию, которая получает url и выводит под
// робную информацию о нем. 
// Например: url “https://itstep.org/ua/about”, информация 
// “протокол: https, домен: itstep.org, путь: /ua/about”.
//  9. 
// Написать функцию, которая принимает строку и раздели
// тель и возвращает массив подстрок, разбитых с помощью 
// указанного разделителя. 
// Например: строка “10/08/2020”, разделитель “/”, результат: 
// “10”, “08”, “2020”. 
// Выполняя задание, не используйте функцию split().
//  10. Написать функцию вывода текста по заданному шаблону. 
// Функция принимает первым параметром шаблон, в тексте 
// которого может использоваться %, после символа % ука
// зывается индекс входного параметра. При выводе вместо 
// %индекс необходимо вывести значение соответствующего 
// входного параметра. 
// Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10, 
// 8, 2020) должна вывести “Today is Monday 10.8.2020”.




}


// ___________________________________________________________________________________________________________




// *************************************************************************************************

// Практические задания 

// PZ_Modul_2_Week_3

//  СТРОКИ   В работе.


// *************************************************************************************************


{

//   Модуль 2
//   ТЕМА: ОБЪЕКТ. МАССИВЫ. ОБЪЕКТ ARRAY. СТРОКИ. 
//  ОБЪЕКТ STRING. ОБЪЕКТ DATE. ОБЪЕКТ MATH.  
//  ВВЕДЕНИЕ В ООП
//   Задание
//   1. 
//  Написать функцию, которая принимает 2 строки и срав
//  нивает их длину. Функция возвращает 1, если в первой 
//  строке больше символов, чем во второй; -1 –  если во вто
//  рой больше символов, чем в первой; или 0 – если строки 
//  одинаковой длины.
//   2. Написать функцию, которая переводит в верхний регистр 
//  первый символ переданной строки.
//   3. Написать функцию, которая считает количество гласных 
//  букв в переданной строке. 
//  4. Написать функцию для проверки спама в переданной 
//  строке. Функция возвращает true, если строка содержит 
//  спам. Спамом считать следующие слова: 100% бесплатно, 
//  увеличение продаж, только сегодня, не удаляйте, ххх. 
//  Функция должна быть нечувствительна к регистру.
//   5. Написать функцию сокращения строки. Функция прини
//  мает строку и ее максимальную длину. Если длина строки 
//  больше, чем максимальная, то необходимо отбросить 
//  лишние символы, добавив вместо них троеточие. 
//  Например: truncate(“Hello, world!”, 8) должна вернуть 
//  “Hello...”.

//  6. Написать функцию, которая проверяет, является ли пере
//  данная строка палиндромом.
//   7. 
//  Написать функцию, которая считает количество слов в 
//  предложении.
//   8. Написать функцию, которая возвращает самое длинное 
//  слово из предложения.
//   9. 
//  Написать функцию, которая считает среднюю длину слова 
//  в предложении.
//   10. Написать функцию, которая принимает строку и символ 
//  и выводит индексы, по которым находится этот символ в 
//  строке. Также вывести, сколько всего раз встречается этот 
//  символ в строке. 


}






// ___________________________________________________________________________________________________________


// DZ_Module_2_Week_4

// ___________________________________________________________________________________________________________


// Задание 1
// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
// ■ get-свойство, возвращающее радиус окружности;
// ■ set-свойство, устанавливающее радиус окружности;
// ■ get-свойство, возвращающее диаметр окружности;
// ■ метод, вычисляющий площадь окружности;
// ■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.




// ___________________________________________________________________________________________________________

// 02.05.2024 практика в классе

// Текущая дата и время
// let now = new Date()
// console.log(now)




// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// let feb20 = new Date(2012, 1, 20, 3, 12)

// console.log(feb20)


// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».





// document.body.style.background = 'rgb(169, 193, 206)'; // сделать фон 

// setTimeout(() => document.body.style.background = '', 3000); // вернуть назад

// console.log(document.body)
// console.log(document.body.constructor.name)
// console.dir(document.body)



// 04.06.2024
// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.

type options = {
  top?: number,
  right?: number,
  html?: string,
  className?: string,
}

function showNotification({ top = 0, right = 0, className = '', html = '' }) {

  let notification = document.createElement('div')
  notification.className = "notification"
  notification.classList.add('notification')
  if (className) {
    notification.classList.add(className)
  }

  notification.style.top = top + 'px'
  notification.style.right = right + 'px'

  notification.innerHTML = html
  document.body.append(notification)

  setTimeout(() => notification.remove(), 5000)
}

let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: 'Hello ' + i++,
    className: "welcome"
  });
}, 5000);




// ---------------------------------------------------------------------------------------------------------------------------




// let z_H2 = document.createElement('h2')

// function show5Blocks3(n:any) {
//   for (let i = 1; i <= n; i++) {
//     document.write('<h2> Header ' + i + '</h2>')
//   }
// }
// show5Blocks3(5)

// function show5Blocks(n) {
//   for (let i = 1; i <= n; i++) {
//     document.write('<h2> Header ' + i + '</h2>')
//   }
// }
// show5Blocks(5)



// const userDiv4 = document.getElementById('div4') as HTMLDivElement

// userDiv4.addEventListener('click', () => {
//   document.getElementById.style.transform = "rotate(50deg)"
// })



// 13.06.2024
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

// onclick


// 18.06.24.





// Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.





