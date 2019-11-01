"use strict";
//NOTE Typescript Data Type - Number
//NOTE Example: TypeScript Number Type Variable
var num_first = 123;
var num_second = 0x37cf; //hexadecimal
var num_third = 255; //octal
var num_fourth = 57; //ninary
console.log(num_first);
console.log(num_second);
console.log(num_third);
console.log(num_fourth);
//NOTE toExponential() 지수표기 https://opentutorials.org/course/50/132
var num_myNumber = 123456;
console.log(num_myNumber.toExponential());
console.log(num_myNumber.toExponential(1));
console.log(num_myNumber.toExponential(2));
console.log(num_myNumber.toExponential(3));
//NOTE toFixed() 소수 자릿수 제한 https://opentutorials.org/course/50/133
//소수 자릿수 제한 시 5이상은 반올림
var num_myNumber2 = 10.8788;
console.log(num_myNumber2.toFixed());
console.log(num_myNumber2.toFixed(1));
console.log(num_myNumber2.toFixed(2));
console.log(num_myNumber2.toFixed(3));
console.log(num_myNumber2.toFixed(4));
//NOTE  toLocaleString() 사용자의 문화권에 맞는 시간표기법으로 년월일 시간을 리턴 https://opentutorials.org/course/50/177
var num_myNumber3 = 10667.987;
console.log(num_myNumber3.toLocaleString());
console.log(num_myNumber3.toLocaleString("de-DE"));
console.log(num_myNumber3.toLocaleString("KOR"));
//NOTE toPrecision() 수의 길이를 제한   https://opentutorials.org/course/50/134
var num_myNumber4 = 10.5779;
console.log(num_myNumber4.toPrecision(1));
console.log(num_myNumber4.toPrecision(2));
console.log(num_myNumber4.toPrecision(3));
console.log(num_myNumber4.toPrecision(4));
//NOTE toString() 수를 문자열로 리턴  https://opentutorials.org/course/50/135
var num_myNumber5 = 123;
// toString(진법) default 10진법
console.log(num_myNumber5.toString());
console.log(num_myNumber5.toString(2));
console.log(num_myNumber5.toString(4));
console.log(num_myNumber5.toString(8));
console.log(num_myNumber5.toString(16));
console.log(num_myNumber5.toString(36));
//NOTE  valueOf() 문자열에 대한 원시데이터형을 리턴  https://opentutorials.org/course/50/101
var num_myNumber6 = new Number(123);
console.log(num_myNumber6);
console.log(num_myNumber6.valueOf());
console.log(typeof num_myNumber6);
var num_myNumber7 = num_myNumber6.valueOf();
console.log(num_myNumber7);
console.log(typeof num_myNumber7);
