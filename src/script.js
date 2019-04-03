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

function objectPereborExample() {

}
objectPereborExample();

// -----------------------------------------------Объекты: перебор свойств end------------------------------------------------------------------//














