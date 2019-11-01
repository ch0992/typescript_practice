"use strict";
var find_numbers = [1, 2, 3, 4, 10];
var findSame = function (x, y) {
    var result = find_numbers.find(function (x) { return x === y; });
    return result;
};
var findBigger = function (x, y) {
    var result = Number(find_numbers.find(function (x) { return x > y; }));
    return result;
};
console.log("findSame : " + findSame(4, 4) + " findBigger : " + findBigger(4, 5));
