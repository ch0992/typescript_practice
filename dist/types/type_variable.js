"use strict";
// NOTE  Variable Declaration using let
var vari_employeeName = "John";
// NOTE let Variables Scope
var vari_num1 = 1;
var letDeclaration = function () {
    var vari_num2 = 2;
    if (vari_num1 > vari_num2) {
        var vari_num3 = 3;
        vari_num3++;
    }
    while (vari_num1 < vari_num2) {
        var vari_num4 = 4;
        vari_num1++;
    }
    console.log(vari_num1);
    console.log(vari_num2);
    //NOTE It will make Error
    //   console.log(vari_num3);
    //   console.log(vari_num4);
};
letDeclaration();
//var Variables Scope
var vari2_num1 = 1;
var varDeclaration = function () {
    var vari2_num2 = 2;
    if (vari2_num2 > vari2_num1) {
        var vari2_num3 = 3;
        vari2_num3++;
    }
    while (vari2_num2 < vari2_num2) {
        var vari2_num4 = 4;
        vari2_num1++;
    }
};
console.log(vari2_num1);
// console.log(vari2_num2);
// console.log(vari2_num3);
// console.log(vari2_num4);
varDeclaration();
//NOTE let vs var
// NOTE this case will make error
// console.log(vari3_num1);
var vari3_num1 = 10;
//NOTE it won't make error but not good.
// console.log(vari3_num2);
var vari3_num2 = 10;
//NOTE Same Variable Name in Different Blocks
var num = 1;
function demo() {
    var num = 2;
    if (true) {
        var num_1 = 3;
        console.log(num_1); //Output: 3
    }
    console.log(num); //Output: 2
}
console.log(num); //Output: 1
demo();
// function letDemo(a: number) {
//   let a: number = 10; //Compiler Error: TS2300: Duplicate identifier 'a'
//   let b: number = 20;
//   return a + b;
// }
// NOTE Const Declaration
