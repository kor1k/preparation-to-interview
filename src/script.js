// function amountOfPrepearedJsThemes() {
//     let lengthOfTasks = document.getElementsByClassName('js_task');
//     // alert(lengthOfTasks.length)
//     lengthOfTasks.onmouseup == alert(lengthOfTasks.length)
// }
// amountOfPrepearedJsThemes();

// --------------------------------------------------------forEach start------------------------------------------------------------------//

// function forEachExample() {
//     var arr = ['Mercedes', 'Opel', 'BMW', 'Mazda', 'Śkoda'];
//     arr.forEach(function (item, i, arr) {
//         console.log(i + ': ' + item + "(massive: " + arr + ')');
//     });
// }
//
// forEachExample();

// --------------------------------------------------------forEach end------------------------------------------------------------------//

// --------------------------------------------------------filter start------------------------------------------------------------------//

// function filterExample() {
//     var arr = [11, -112, 200, 500, 0, 19, 10, -135];
//     var highNumber = arr.filter(function (number) {
//         return number < 0;
//     });
//     var lowNumber = arr.filter(function (number2) {
//         return number2 > 0;
//     });
//     alert(highNumber);
//     alert(lowNumber);
// }
//
// filterExample();

// --------------------------------------------------------filter end------------------------------------------------------------------//

// --------------------------------------------------------map start------------------------------------------------------------------//


// function mapExample() {
//     var arrNames = ['html', 'css', 'javascript', 'react.js', 'java', 'angular', 'c++'];
//
//     var namesLengths = arrNames.map(function (name) {
//         return name.length;
//     });
//     alert(namesLengths)
// }
//
// mapExample();

// function multiplyOfNumbersMapExample() {
//     var numbers = [10, 20, 30, 40, 50];
//     var multiply = numbers.map(x => x * 2);
//     alert(multiply);
// }
//
// multiplyOfNumbersMapExample();

// function powerOfNumbersMapExample() {
//     var numbers = [10, 20, 30, 40, 50];
//     var multiply = numbers.map(x => x * x);
//     alert(multiply);
// }
//
// powerOfNumbersMapExample();
// --------------------------------------------------------map end------------------------------------------------------------------//

// --------------------------------------------------------map end------------------------------------------------------------------//

// --------------------------------------------------------string methods start------------------------------------------------------------------//

// function stringMethodsExample() {
// var str = 'My name is Kostya';
// str = str[1] + str[5] + str[5] + str[1];
// alert(str.charAt(5));
// alert(str.length);
// alert(str);
// alert(str.indexOf('My'))
// _____________
// var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
// var target = "на"; // цель поиска
//
// var pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) !== -1) {
//     alert(pos);
// }
// _____________
// var str = 'Substring_test';
// alert(str.substring(10,14)) //test
// alert(str.substring(0,3)) //Sub
// _____________
// var str = "Substr_test";
// alert(str.substr(0, 3)) //Sub
// alert(str.substr(0, 6)) //substr
// }
// stringMethodsExample();

// --------------------------------------------------------string methods end------------------------------------------------------------------//

// --------------------------------------------------------Замыкания start------------------------------------------------------------------//

// function closuresExample(a) {
//     return function (b) {
//         return a * b;
//     }
// }
// console.log(closuresExample());
// closuresExample();
//___________
// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//         alert (name); // displayName() uses variable declared in the parent function
//     }
//     displayName();
// }
// init();

// --------------------------------------------------------Замыкания end------------------------------------------------------------------//

// --------------------------------------------------------Objects start------------------------------------------------------------------//

// function objectExample() {
// obj = new Object(); (1)
// var person = {}; // (2)
// person.name = 'Kostya';
// person.age = '19';
// person.hobby = 'Programming';
// alert('Name: ' + person.name);
// alert('Age: ' + person.age);
// ________
// delete person.name;
// if ("name" in person) {
//     alert('Name is here!')
// } else {
//     alert('Name is not here!')
// }
// ________
// alert(person.lalala);
// ________
// var person = {
//     name: 'Kostya',
//     age: '19',
//     hobby: 'Programming'
// };
//
// alert(person.asdadasd === undefined);
// alert(person.name === undefined);
// alert(person.age === undefined);
// ________
// var user = {
//     name: "Таня",
//     age: 25,
//     mood: 'Fine',
//     size: {
//         top: 90,
//         middle: 60,
//         bottom: 90
//     }
// };
//
// if (user.size.top === 90) {
//     alert(user.mood)
// } else {
//     alert(user.name + ' плачет')
// }
// ________
// alert(user.name) // "Таня"
// alert(user.size.top) // 90
// alert(user.mood); //fine
// }
// objectExample();

// --------------------------------------------------------Objects end------------------------------------------------------------------//

// -----------------------------------------------Объекты: перебор свойств start------------------------------------------------------------------//

// function objectPereborExample() {
//     var menu = {
//         width: 300,
//         height: 200,
//         title: 'Menu',
//     }
//     // for (var key in menu){
//     //     alert("Key: " + key + " значение" + menu[key])
//     // }
//     var counter = 0;
//     for (var key in menu) {
//         counter++;
//     }
//     alert("Всего свойств: " + counter)
// }
//
// objectPereborExample();

// function sumOfSalariesInObject() {
//     var salaries = {
//         'Katya': 200,
//         'Anya': 300,
//         'Vadim': 900
//     }
//     var counter = 0;
//
//     for (var key in salaries){
//         alert(salaries[key])
// counter += salaries[key]
// }
// alert('Sum of salaries is: ' + counter)
// }
//
// sumOfSalariesInObject();

// function biggestSalary() {
//     var salaries = {
//         'Andy': 700,
//         'Mary': 400,
//         'Anton': 500,
//         'Slava': 1000
//     };
//     var biggest = 0;
//     for (var key in salaries) {
//         biggest += salaries[key]
//     }
//     alert('the biggest salary is: ' + biggest + '$');
// }
// biggestSalary();


// -----------------------------------------------Объекты: перебор свойств end------------------------------------------------------------------//


// ---------------------------------------------Объекты: передача по ссылкке end------------------------------------------------------------------//

// function peredachaPoSsilkeObject() {
//     var user = {
//         name: 'Vasya',
//         age: 30
//     };
//     var clone = {};
//     for (var key in user) {
//         clone[key] = user[key];
//     }
//     clone.name = 'Petya';
//     alert(user.name)
//     // var admin = user;
//     // admin.name = 'Petya';
//     // alert(user.name)
// }
// peredachaPoSsilkeObject();
// ___________
// var time = {
//     year: 2345,
//     month: 11,
//     day: 10,
//     hour: 11,
//     minute: 12,
//     second: 13,
//     microsecond: 123456
// }
//
// console.log(time); // (*)
// time.microsecond++; // (**)
//
// console.log(time);
// time.microsecond++;
//
// console.log(time);
// time.microsecond++;
// ___________

// ---------------------------------------------Объекты: передача по ссылкке end------------------------------------------------------------------//

// ---------------------------------------------Arrays start------------------------------------------------------------------//

// function arrayExample() {
//     var emptyArr = [];
//     var fruitsArr = ['Apple', 'Orange', 'Kiwi', 'Mango'];
//     var arrWithObjNum_and_Text = [1, 'two', {name: 'korik', age: '19'}, '4'];
//     fruitsArr[2] = 'VALERA';
//     fruitsArr[0] = 'MAXIMKA';
//     fruitsArr[4] = 'PETRO';
//     // alert(fruitsArr[0]);
//     // alert(fruitsArr[1]);
//     // alert(fruitsArr[2]);
//     // alert(fruitsArr[3]);
//     // alert(fruitsArr[4]);
//     alert(arrWithObjNum_and_Text[1]);
// }
// arrayExample();

// ______________pop start_________
// Удаляет последний элемент из массива и возвращает его:
// function arrayPopExample() {
//     var cars = ['Mercedes Benz', 'BWM', 'Volvo'];
//     alert(cars.pop()); // deleted last el in arr
//     alert(cars)
// }
//
// arrayPopExample();
// ______________push start_________

// ______________push start_________
// Добавляет элемент в конец массива:
// function arrayPushExample() {
//     var cars = ['Mercedes Benz', 'BWM', 'Volvo'];
//     cars.push('Bugatti', 'basdjasd');
//     alert(cars);
//     // две равнозначные строки
//     alert('length of arr is: ' + cars.length);
//     alert(cars.push())
//     // две равнозначные строки
// }
// arrayPushExample();
// ______________push start_________

// ______________shift start_________
// Удаляет из массива первый элемент и возвращает его:
// function shiftArrayExample() {
//     var fruits = ['Apple', 'Pineapple','Mango','Lemon'];
//     fruits.shift();
//     alert(fruits);
// }
// shiftArrayExample();
// ______________shift end_________

// ______________unshift start_________
// Добавляет элемент в начало массива:
// function unshiftArrayExample() {
//     var rifles = ['glock','ak-47','m4a1','awp','deagle'];
//     rifles.unshift('PHP');
//     alert(rifles)
// }
// unshiftArrayExample();
// ______________unshift end_________

// function eat(arr) {
//     arr.pop();
// }
// var arr = ["нам", "не", "страшен", "серый", "волк"];
// alert('length ' + arr.length); // 5
// eat(arr);
// eat(arr);
// alert('new length after eat ' + arr.length); //3


// Array with empty elements
// var a = [];
// a[0] = 0;
// a[100] = 100;
// alert(a); // 0,,,,,5

// function pereborOfArray() {
//     var arr = ['Mango', 'Glock-18', 'Mercedes', 'BMW', 'Building'];
//     for (var i = 0; i < arr.length; i++) {
//         alert(arr[i])
//     }
// }
// pereborOfArray();

// function newArayCreating() {
//     // var arr = new Array("Яблоко", "Груша", "и т.п.");
//     var arr = new Array(2, 3);
//     alert(arr); //2,3
//     var arr2 = new Array(10);
//     alert(arr2[2]) //undefined
// }
// newArayCreating();

//Многомерные массивы
// function mnogoMernieArrays() {
//     var matrix = [
//         [1,2,3],
//         [4,5,6],
//         [7,8,9]
//     ]
//     alert(matrix[0][1])
// }
// mnogoMernieArrays();

// Задача на массивы
// function arrayExample() {
// var arr = [1, 2, 3, 4, 5, 'last element of array'];
// // alert(arr.length); // 6
// alert(arr.pop());
// // alert(arr.length) // 5
// _______
// var goods = ["Яблоко", "Груша", "Слива",'Макароны'];
// var lastItem = goods[goods.length - 1]; // получить последний элемент
// alert(lastItem)
// var goods = ['Car', 'Котлета', 'Beef', 'Beer'];
// goods.push('Sebek') // one way
// goods[goods.length] = 'Компьютер'; // 2nd way
// alert(goods)
// }
//
// arrayExample();

// ______________split start_________
// function splitArrayExample() {
//     var names = 'Маша, Петя, Марина, Василий';
//
//     var arr = names.split(', ');
//
//     for (var i = 0; i < arr.length; i++) {
//         alert('Вам сообщение: ' + arr[i]);
//     }
//     var str = "loremasdasdad";
//     alert(str.split('')); // т,е,с,т
// }
//
// splitArrayExample();
// ______________split end_________


// ______________join start_________
// function joinArraysExample() {
//     var arr = ['Kolya', 'Vasya', 'Petya', 'Anya'];
//     var joinedArr = arr.join('+++');
//     alert(joinedArr)
// }
// joinArraysExample();
// ______________join end_________


// ______________deleteFromArr start_________
// function deleteFromArr() {
//     var arr = [1, 2, 3, 4, 5];
//     delete arr[0];
//     alert(arr)
// }
//
// deleteFromArr();
// ______________deleteFromArr end_________

// ______________splice start_________
//Метод splice – это универсальный раскладной нож для работы с массивами. Умеет все: удалять элементы, вставлять элементы, заменять элементы – по очереди и одновременно.
// Удаление спомощью splice
// function deleteWithSplice() {
//     // var arr = ['I am', 'preparing', ' to ', 'interview'];
//     // arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
//     // alert(arr) // удалился preparing
//     // __________
//     // var arr = ['I am', 'preparing', ' to ', 'interview'];
//     // arr.splice(0,1,'You are');
//     // alert(arr) // you are preapearing to interview
//     // __________
//     // var arr = ["Я", "сейчас", "изучаю", "JavaScript"];
//     // arr.splice(0, 3, "Мы", "изучаем") // удалить 3 первых элемента и добавить другие вместо них
//     // alert(arr) // теперь ["Мы", "изучаем", "JavaScript"]
//     // _________
//     var arr = ["Я", "сейчас", "изучаю", "JavaScript"];
//     var removed = arr.splice(0, 2);// удалить 2 первых элемента
//     alert(removed); // "Я", "сейчас" <-- array of removed elements
//     // _________
//     // Метод splice также может вставлять элементы без удаления, для этого достаточно установить deleteCount в 0
//     var arr = ["Я", "изучаю", "JavaScript"];
//     // с позиции 2
//     // удалить 0
//     // вставить "сложный", "язык"
//     arr.splice(2, 0, "сложный", "язык");
//     alert(arr); // "Я", "изучаю", "сложный", "язык", "JavaScript"
// }
// deleteWithSplice();
// ______________splice end_________


// ______________slice start_________
// Метод slice(begin, end) копирует участок массива от begin до end, не включая end. Исходный массив при этом не меняется.
// function sliceArrayExample() {
//     var arr = ['I wrote', 'this text', 'for example'];
// var arr2 = arr.slice(0, 2)
// alert(arr2) // i wrote this text
// var arr2 = arr.slice(2, 4) //for example
// alert(arr2)
// _______
// Если не указать end – копирование будет до конца массива:
// var arr3 = arr.slice(1);
// alert(arr3) // взять все элементы, начиная с номера 1
// _________
// Можно использовать отрицательные индексы, они отсчитываются с конца:
// var4 = arr.slice(-0) // копировать от 2-го элемента с конца и дальше
// alert(var4)
// ________
//Если вообще не указать аргументов – скопируется весь массив:
// var5 = arr.slice();
// alert(var5)// i wrote this text for example
// }
// sliceArrayExample();
// ______________slice end_________


// ______________sort start_________
//Метод sort() сортирует массив на месте. Например:
// function sortArrayExample() {
// var arr = [111231, 200, 10, 20, 50];
// arr.sort();
// alert(arr) // not right sorting of elements!!!!1 //Это произошло потому, что по умолчанию sort сортирует, преобразуя элементы к строке.Поэтому и порядок у них строковый, ведь "2" > "15".
// }
// sortArrayExample();
//  Правильная проверка на больше ли число!
// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
// }
// var arr = [ 1123, 2111231, 101091,11111111111111 ];
// arr.sort(compareNumeric);
// alert(arr);  //  правильно вывело
// ______________sort end_________


// ______________reverse start_________
// function reverseArrExample() {
//     var arr = [1, 2, 3, 4, 5];
//     alert(arr)
//     var arrReversed = arr.reverse()
//     alert(arrReversed)
// }
// reverseArrExample();
// ______________reverse end_________


// ______________concat start_________
//Метод arr.concat создаёт новый массив, в который копируются элементы из arr
// function concatArrExample() {
//     var arr = [1, 2, 3, 4, 5];
//     alert(arr)
//     var newArr = arr.concat(6, 7, 8, 9, 10);
//     alert(newArr)
// _____
// var arr = [1, 2];
// var newArr = arr.concat([3, 4], 5); // то же самое, что arr.concat(3,4,5)
// alert( newArr ); // 1,2,3,4,5
// }
// concatArrExample();
// ______________concat end_________

// ______________indexOf/lastIndexOf start_________
// function indexOflastIndexOfArrayExample() {
//     var arr = [1, 0, false];
//     alert( arr.indexOf(0) ); // 1
//     alert( arr.indexOf(false) ); // 2
//     alert( arr.indexOf(null) ); // -1
// }
// indexOflastIndexOfArrayExample();
// ______________indexOf/lastIndexOf end_________

// ИТОГ
// push/pop, shift/unshift, splice – для добавления и удаления элементов.
//     join/split – для преобразования строки в массив и обратно.
//     slice – копирует участок массива.
//     sort – для сортировки массива. Если не передать функцию сравнения – сортирует элементы как строки.
//     reverse – меняет порядок элементов на обратный.
//     concat – объединяет массивы.
//     indexOf/lastIndexOf – возвращают позицию элемента в массиве (не поддерживается в IE8-).

// ______________map start_________
// var languages = ['jQuery', 'JavaScript', 'Java', 'CSS', 'HTML'];
// function mapArrExample() {
//     var arrLengths = languages.map(function (languages) {
//         return languages.length;
//     });
//     alert(arrLengths)
// }
// mapArrExample();
// ______________map end_________


// ______________every/some start_________
// Эти методы используются для проверки массива.
// var arr = [-1, -200, -20, 10, -30, 50, 1000];
// function everySomeArrExample(arr) {
//     return arr > 0;
// }
// alert(arr.every(everySomeArrExample)) // false, не все положительные
// alert(arr.some(everySomeArrExample)) // true, есть хоть одно положительное
// everySomeArrExample();
// ______________every/some end_________


// ______________theme start_________

// ______________theme end_________


// ______________theme start_________

// ______________theme end_________


// ______________theme start_________

// ______________theme end_________

// ИТОГ
// forEach – для перебора массива.
//     filter – для фильтрации массива.
//     every/some – для проверки массива.
//     map – для трансформации массива в массив.
//     reduce/reduceRight – для прохода по массиву с вычислением значения.


// ---------------------------------------------Arrays end------------------------------------------------------------------//

