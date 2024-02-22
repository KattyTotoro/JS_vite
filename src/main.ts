import './style.scss'
console.log(4545)

// DZ_Modul_1

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





      /*9. Запросите у пользователя трехзначное число и выведите его задом наперед. 
           Для решения задачи вам понадобится оператор % (остаток от деления).*/





      /*10. Запросите у пользователя целое число и выведите в ответ, четное число или нет. 
            В задании используйте логические операторы. В задании не надо использовать if или switch.*/


            let num = -5
            let result

            if (num > 0) {
              console.log ('1')
              result = 1
            } else if (num < 0) {
              console.log ('-1')
              result = -1
            } else {
              console.log ('0')
              result = 0
            }
            
            console.log(result)




            // let result

            // (a + b < 4) ? 


