import './style.scss'
// console.log(4545)

// DZ_Modul_1_Week_1 - Сделано польностью.


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

            // const evroToDollarExchange = 1.08
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



        /*8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. 
           Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.*/

            // let sum = 160
            // let price = 30

            // let numberOfChocolates = parseInt(sum / price)
            // console.log('Количество шоколдано, которое Вы можете купить', numberOfChocolates)

            // let residualAmount = sum - (price * numberOfChocolates)
            // console.log('Остаток денег:', residualAmount)



        /*9. Запросите у пользователя трехзначное число и выведите его задом наперед. 
              Для решения задачи вам понадобится оператор % (остаток от деления).*/

            // let num1 = 749

            // let num2 = parseInt((num1 % 10) * 100) + parseInt(((num1/10) % 10)) * 10 + parseInt(((num1/100) % 10))

            // console.log(num2)



        /*10. Запросите у пользователя целое число и выведите в ответ, четное число или нет. 
                В задании используйте логические операторы. В задании не надо использовать if или switch.*/

                // let num = 12

                // if (num % 2 == 0) {
                //   console.log('Число', num, 'чётное')
                // } else console.log('Число', num, 'не чётное')

                    // Вариант 2

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


              
// PZ_Modul_1_Week_1 - Сделано 1 - 8


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


     /* 10. Зарплата работника составляет $250 + 10% от продаж. 
      Запросите общую сумму продаж за месяц и посчитайте 
      зарплату.*/


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

                // let age = 15
                // if (age >= 14 && age <= 90) {
                //   console.log('Диапазон от 14 до 90')
                // } else console.log('Возраст вне диапазона')


              /*  Напишите условие if для проверки, что значение переменной age 
                  НЕ находится в диапазоне 14 и 90 включительно.
                  Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.*/

                // let age = 14
                // if (age < 14 || age > 90) {
                //   console.log('НЕ находится в диапазоне')
                // } else console.log('В диапазоне')

                // Вариант 2
                // let age = 91
                // if (age !< 14 || age !> 90) {
                //   console.log('НЕ находится в диапазоне')
                // } else console.log('В диапазоне')


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


// DZ_Modul_1_Week_2  - В работе


      /* Вам необходимо самостоятельно решить, для какого задания какой оператор ветвления 
        лучше использовать: if, switch или тернарный.


        1. Запросить у пользователя его возраст и определить, кем он 
        является: ребенком (0–2), подростком (12–18), взрослым 
        (18_60) или пенсионером (60– ...).

        2. Запросить у пользователя число от 0 до 9 и вывести ему 
        спецсимвол, который расположен на этой клавише (1–!, 
        2–@, 3–# и т. д).

        3. Запросить у пользователя трехзначное и число и проверить, 
        есть ли в нем одинаковые цифры.

        4. Запросить у пользователя год и проверить, високосный он 
        или нет. Високосный год либо кратен 400, либо кратен 4 и 
        при этом не кратен 100.

        5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

        6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, 
        UAN или AZN, и получает в ответ соответствующую сумму.

        7. Запросить у пользователя сумму покупки и вывести сумму 
        к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 
        до 500 – 5%, от 500 и выше – 7%. 

        8. Запросить у пользователя длину окружности и периметр 
        квадрата. Определить, может ли такая окружность поместиться в указанный квадрат. 

        9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 
        балла. После вопросов выведите пользователю количество 
        набранных баллов.

        10. Запросить дату (день, месяц, год) и вывести следующую 
        за ней дату. Учтите возможность перехода на следующий 
        месяц, год, а также високосный год. 
*/


// ___________________________________________________________________________________________________________





// PZ_Modul_1_Week_2  - В работе


    /*  ■ Задания, в которых необходимо использовать IF.

              1. Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.

              2. Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).

              3. Запросить у пользователя число и вывести его модуль 
              (|7| = 7, |-7| = 7).

              4. Запросить у пользователя время (часы, минуты, секунды) 
              и проверить корректность введенных данных.
              5. Запросить координаты точки (x, y) и определить номер 
              четверти, в которую попала эта точка. Необходимо учесть 
              случаи попадания точки на оси X или Y или в начало 
              координат.

        ■ Задания, в которых необходимо использовать SWITCH.

              1. Запросить у пользователя номер месяца и вывести на экран 
              его название.

              2. Реализовать калькулятор. Пользователь вводит 2 числа и 
              знак (+ - * /). В зависимости от введенного знака решить 
              пример и вывести результат.


        ■ Задания, в которых необходимо использовать тернарный 
        оператор.

              1. Запросить 2 числа и вывести большее из них.

              2. Запросить 1 число и проверить, оно кратно 5 или нет.

              3. Запросить у пользователя название планеты. Если пользователь ввел «Земля» или «земля», 
              то вывести «Привет, землянин!», в остальных случаях вывести «Привет, инопланетянин!». 
    
    
    */


// ___________________________________________________________________________________________________________




// DZ_Modul_1_Week_3  - В работе


  /* Вам необходимо самостоятельно решить, для какого задания какой цикл лучше использовать: WHILE, DO WHILE или FOR.


      1. Подсчитать сумму всех чисел в заданном пользователем 
      диапазоне. 
      
      2. Запросить 2 числа и найти только наибольший общий 
      делитель.
      
      3. Запросить у пользователя число и вывести все делители 
      этого числа.
      
      4. Определить количество цифр в введенном числе.
      
      5. Запросить у пользователя 10 чисел и подсчитать, сколько 
      он ввел положительных, отрицательных и нулей. При этом 
      также посчитать, сколько четных и нечетных. Вывести 
      статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
      
      6. Зациклить калькулятор. Запросить у пользователя 2 числа 
      и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока 
      пользователь не откажется.
      
      7. Запросить у пользователя число и на сколько цифр его 
      сдвинуть. Сдвинуть цифры числа и вывести результат (если 
      число 123456 сдвинуть на 2 цифры, то получится 345612).


        8. Зациклить вывод дней недели таким образом: «День недели. 
        Хотите увидеть следующий день?» и так до тех пор, пока 
        пользователь нажимает OK. 
        
        9. Вывести таблицу умножения для всех чисел от 2 до 9. 
        Каждое число необходимо умножить на числа от 1 до 10.
        
        10. Игра «Угадай число». Предложить пользователю загадать 
        число от 0 до 100 и отгадать его следующим способом: 
        каждую итерацию цикла делите диапазон чисел пополам, 
        записываете результат в N и спрашиваете у пользователя 
        «Ваше число > N, < N или == N?». В зависимости от того 
        что указал пользователь, уменьшаете диапазон. Начальный 
        диапазон от 0 до 100, поделили пополам и получили 50. 
        Если пользователь указал, что его число > 50, то изменили 
        диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
  
  
  */

// ___________________________________________________________________________________________________________



// PZ_Modul_1_Week_3   - Сделано: 1, 4, 5


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




          






