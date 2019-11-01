"use strict";
var sum = function (x, y) {
    return x + y;
};
sum(1, 2);
var sumArray = function (numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
};
var total = sumArray([1, 2, 3, 4, 5]);
var returnNothing = function () {
    console.log("I am just saying hello world");
};
