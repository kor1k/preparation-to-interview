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


// ---------------------------------------------Arrays end------------------------------------------------------------------//
