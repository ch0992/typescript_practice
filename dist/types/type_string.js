"use strict";
//NOTE Template String
var str_employeeName = "YGtoken";
var str_employeeDept = "Choi";
//ES6 이전 문자열 표기
var str_employeeDesc = str_employeeName + " works in the" + str_employeeDept + " department";
//ES6 리터럴 표기
var str_employeeDesc2 = str_employeeName + " works in the " + str_employeeDept + " department.";
console.log(str_employeeDesc);
console.log(str_employeeDept);
//NOTE charAt() 문자열에서 인자로 주어진 값에 해당하는 문자를 리턴 https://opentutorials.org/course/50/86
var str_str = "Hello Typescript";
console.log(str_str.charAt(0));
console.log(str_str.charAt(2));
console.log("Hello World".charAt(2));
//NOTE concat() 복수의 배열을 결합해서 리턴 https://opentutorials.org/course/50/102
var str_str2 = "Hello";
var str_str3 = "Typescript";
console.log(str_str2.concat(str_str3)); //returns 'HelloTypeScript'
console.log(str_str2.concat(" ", str_str3)); // returns 'Hello TypeScript'
console.log(str_str2.concat(" Mr. ", "Bond")); //returns 'Hello Mr. Bond'
