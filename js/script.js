'use strict';
// let number = 5; гибкая переменная, намбер ее имя 5 значение;
// const leftBorderWidth = 1; переменная константа, то есть которую нельзя поменять
// number = 10;
// console.log(number); открытие консоли где в скобках пишется имя переменной;
// "use strict"; объявляем директиву нашему файлу , что мы работаем в современом режиме;
// a = 15;
// console.log(a);
// const obj = {
// a: 50
// };
// obj.a = 10; подмена переменной с константой
// console.log(obj);

// console.log(name);
// var name = 'Ivan'; вар переменная где ее значение определяется до её определения;

// console.log(1);

// {
//     let result = 50;
// }
// console.log(result);
// alert(5);
// [].push('a');
// Классификация типов данных в Java Script
// Простые типы:
// let number = 4; целое
// let number = 4.6; дробное
// console.log(-4/0);операции умножения деления
// console.log ('string'*8); умножение строки на число тоже проходит
// const persone = 'Alex'; тип данных строковый;
// const persone = '5'; цифровое значение в кавычках будет строкой
// const bool = true; булиновое значнеие правда или ложь
// const bool = false; булиновое значнеие правда или ложь
// console.log (something); переменная без назначения
// let und;
// console.log(und);
// const obj = {
//     name: 'John',
//     age: 25,
//     isMarried: false
// }; создали переменную объект , в которую вставляем определенные данные, это будут его свойства и 
// действия(методы) а в объекте у каждого свойства будет заданный нами ключ
// console.log(obj.name); через консоль лог вытягую свойство name
// const obj = {
//     name: 'John',
//     age: 26,
//     isMarried: false
// };
// console.log(obj ['name']); через консоль лог вытягиваю свойство name, только уже заключая
// её в кавычки,а само названия свойства в кавычки
//  let arr = ['plum.png','orange.jpg',5,'apple.bmp',{},[]]; 
//  вставляю в массив свойства, в строго определенном порядке, туда же можно и объекты и другие массивы
//  иными словами в отличие от объекта у каждого свойства в массиве ключ определен порядковым номером
// console.log(arr[1]);
// console.log(arr[1]); достаю из массива определенный объект
// alert ('Hello'); команда которая во всплывающем окне предупреждает пользователя о чем-то;

// const result = confirm('Are you here?'); всплывающее окно бразуера , где пользователь отвечает
// console.log (result); через консоль может можем увидеть, что пользователь выбрал
// const answer = prompt ('Вам есть 18 лет?', '18'); всплывающее окно браузера с вопросом и пустым плейсхолдером
// console.log(typeof(answer)); смотрим ответ от пользователя, который всегда будет STRING (СТРОКОЙ)
// const answer = +prompt ('Вам есть 18 лет?', '18'); 
// console.log(answer+5); преобразуем стрингу в числовой тип данных
// const answers = []; 
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', ''); 
// answers[2] = prompt('Сколько вам лет?', '');
// document.write(answers);
// создал массив с функцией prompt(вопрос для пользователя во всплывающем окне) 
// и плейсхолдером для ответов;
// документ врайт выводит ответы пользователя не в консоле, а на фронте;
// const answers = [];
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', ''); 
// answers[2] = prompt('Сколько вам лет?', '');
// console.log(typeof(answers));
// console.log(typeof(null))
// массив это частный случай объекта поэтому при попытке вывести инфу через консоль, он выдает объект;
// prompt; alert; confirm; работают только внутри бразуера, так как это фичи браузера;
// Интерполяция (ES6)
// const category = 'toys';
// console.log('https://someurl.com/'+ category); такой способ становится проблемным, если энд поинт 
// длинный 

// const category = 'toys'; такой способ работает только с косыми ковычками ``;
// console.log(`https://someurl.com/${category}/5`);
// const user = 'Ivan';
// alert (`Привет,${user}`); динамическая переменная;
// Операторы умножения/деления и тд в JS;
// console.log('arr'+' - object'); склаываем строку и строку и получаем строку
// console.log(4 + '- object'); прибавляю число + строку, и всё равно получаю строку;
// console.log(4 + +'- object'); получаю ошибку;
// console.log(4 + + '5'); 5 становится обычным числом, и получаю числовой резальтат 9;
// let incr = 10,
//     decr = 10;
// // incr++; если плюс перед инкр префикс, если после постфикс
// // decr--;
// // console.log(incr++); в случае постановки после возвращает старое значение
// // console.log(decr--);
// console.log(++incr); а если возвести в префикс отрабатывает правильно
// console.log(--decr);
// console.log(5%2); делим 5 на 2 ;
// console.log (2*4==8); если нам нужно с чем то сравнить то необходимо указать двойное равно ==
// console.log (2*4==='8');  если указать 3 знака равно, то 8 в кавычках будет уже false;
// && AND оператор работает только если всё TRUE как в скл;
// || OR оператор работает если хотя бы одно условие TRUE как в скл;
// const isChecked = true,
//       isClose = true;  переменная допустим, пользователь выбрал чекбокс, после чего триггер клоуз
//       console.log(isChecked && isClose);
// в данном случае AND (&&) срабатывает только если оба условия true;
// const isChecked = true,
//       isClose = false;
//       console.log(isChecked || isClose);
//       в данном случае одно из условий TRUE одно из этих условий выполняется и нам возвращается тру
//       если будет оба FALSE то вернется FALSE;
// ! опреатор отриация аналог NOT в скл 
// const isChecked = false,
//       isClose = false;
//       console.log(isChecked || !isClose);
// в данном случае ! оператор нот с энд даёт true;
// console.log(2+2 *2 == 8);
// console.log(2+2 *2 !== 8); если добавляю операто ! то есть not получаю тру, так как 
// мой экспрешн не равен 8;
// console.log(2+2 *2 != '6'); в данном случае получаем false потому что 
// числовое выражение приравнивается к строке 6 равно 6

// console.log(2+2 *2 !== '6'); а при детальном сравнении мы получаем TRUE 
// Практика часть 1 начинаем содавать приложение;
// const numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?','');

// const personalMoviesDB = {
//      count:numberOfFilms,
//      movies:{},
//      actors:{},
//      genres:[],
//      privat:false
// };

// const a = prompt ('Один из последних просмотренных фильмов?',''),
//       b = prompt ('На сколько оцените его?',''),
//       c = prompt ('Один из последних просмотренных фильмов?',''),
//       d = prompt ('На сколько оцените его?','');

// personalMoviesDB.movies[a] = b;
// personalMoviesDB.movies[c] = d;
// console.log(personalMoviesDB);
// Условия 
if (4==9) {
    console.log('Ok!');
} else {
    console.log ('Error');
}
Если 4 = 4 то в консоли я вывожу слово Ок!(то есть булиновое значение принимает True);
Если 4 = 9 то в консоли я вывожу слово Error(то есть булиновое значение принимает False);

if (1) {
    console.log('Ok!');
} else {
    console.log ('Error');
}
Если противопостановления то я так же выходит Ок!(то есть булиновое значение принимает True);
