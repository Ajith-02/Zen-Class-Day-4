var arr = [1, 2, 2, 5, 4, 4];

var repeat = {};
for (var index in arr) {
    //console.log(index, arr[index]);
    var currentValue = arr[index];
    if (repeat[currentValue]) {
        repeat[currentValue] = repeat[currentValue] + 1;
        //repeat[currentValue] += 1;
    } else {
        repeat[currentValue] = 1;
    }
}
console.log(repeat)

var repeatedNumber = [];
var nonRepeated = [];

for (var key in repeat) {
    console.log(key, repeat[key])
    var repeatCount = repeat[key]
    if (repeatCount > 1) {
        repeatedNumber.push(key)
    } else {
        nonRepeated.push(key)
    }
}
console.log(repeatedNumber);
console.log(nonRepeated);



//adding key to existing object
//{2:1}
var obj = { 4: 2, 5: 1 };
obj["2"] = 1;
//left side of = (assignment operator) is key
//right side of = is value
obj["4"] = 9;
console.log(obj);

// finding maximum and average
var marks = [10, 100, 50, 80, 90];

let max = -Infinity;

for (let i = 0; i <= marks.length; i++) {
    if (max < marks[i]) {
        max = marks[i];
    }
}
console.log(max);
console.log(max / marks.length);

/*
max        i  marks[i]  max < marks[i]  max
-Infinity  0   10          true         10
10         1   100         true         100
100        2   50          false        100
100        3   80          false        100 
100        4   90          false        100
*/

// to find the sum (medthod 1)
var sum = 0;
for (var i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
}
console.log(sum);

// to find the sum (medthod 2)
var sum = 0;
function printMark(marks) {
    sum = sum + marks
}
marks.forEach(printMark)
console.log(sum / marks.length);


var Ajith = 27;
// isLegal is a function name
// age is called argument or parameter
function isLegal(age) {
    if (age >= 18) {
        console.log("major");
    } else {
        console.log("minor");
    }
}
// calling function
isLegal(Ajith)

// interview questions
console.log(4 == "4");
// True - == allow coercion (coercion & then check equal or not) this is slower
console.log(4 === "4");
// False - === does not allow coercion (directly check equal or not) this is faster


console.log(4 - "bc");
//NaN - not a number
//NaN is a value but some number is not a number
console.log(typeof (NaN));// number
console.log(typeof (false));// boolean

// undefined vs not defined
console.log(typeof (undefined));// undefined
// typeof will always returns a string

var a;
console.log(a);// no value is assigned so JS gives undefined
//console.log(a1);//not declared so it is not defined. not defined is a error

var student = {
    name: "Ajith",
    class: "B28"
}
// to get the name
console.log(student.name);
//or
console.log(student["name"]);

// to iterate in object
for (var key in student) {
    console.log(key, student[key]);
}

console.log(typeof (student));
console.log(typeof (null));

var t = NaN;
console.log(t != NaN);// to check t is nan or not


//Truthy & Falsy
/*
truthy - true, string, number
falsy  - null, undefined, 0 is falsy
*/
var val = true;
//var val = 2;
//var val = "good";

var val = null;
//var val = undefined;
//var val = 0;

if (val) {
    console.log("Hi")
} else {
    console.log("Cool")
}



var a = 1;
var b = 1;
// number is primitives
// 1 === 1
console.log(a===b);


// arrays equality checked by addresses not by value
var d = [3,4];  // d stored in different address(ex: x1)
var e = [3,4];  // e stored in different address(ex: x2)
var f = d; // copy by reference
console.log(d===e); // so it is false
console.log(d===f); // f stored in d address so it is true


f[1] = 5;
e[0] = 8;
console.log(d, f, e);
//  d       f       e
//[3, 5]  [3, 5]  [8, 4]
// d & f have a same address, f is latest one
// any changes made in f it will reflect in d


// spread operator
var g = [...d]// copy by value
console.log(g === d); //false
console.log(g, d); 
//   g      d
// [3, 5] [3, 5]

d[0] = 8;
console.log(g, d); 
//   g       d
// [3, 5]  [8, 5]


var t1 = [...d, 5, 6] // adding to the existing (adding with d)
console.log(t1);

var g1 = [4,7];
var g2 = [10,6];

var g3 = [...g1, ...g2];
console.log(g3);


// Template literal - ``(backticks)
var name1 = "Ajith";
var name2 = "Padmakumar";
//substitution(interpolation) - ${} this is called interpolation
var msg = `${name1},${name2} welcome`
console.log(msg);
console.log(`${name1},${name2}`+ " " +"welcome");

console.log(
    `Hi Awesome
    Welcome
        `
);
