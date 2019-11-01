// NOTE  Variable Declaration using let

let vari_employeeName: string = "John";

// NOTE let Variables Scope

let vari_num1: number = 1;

let letDeclaration = () => {
  let vari_num2: number = 2;

  if (vari_num1 > vari_num2) {
    let vari_num3: number = 3;
    vari_num3++;
  }

  while (vari_num1 < vari_num2) {
    let vari_num4: number = 4;
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

var vari2_num1: number = 1;

let varDeclaration = () => {
  var vari2_num2: number = 2;

  if (vari2_num2 > vari2_num1) {
    var vari2_num3: number = 3;
    vari2_num3++;
  }
  while (vari2_num2 < vari2_num2) {
    var vari2_num4: number = 4;
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
let vari3_num1: number = 10;

//NOTE it won't make error but not good.
// console.log(vari3_num2);
var vari3_num2: number = 10;

//NOTE Same Variable Name in Different Blocks
let num: number = 1;

function demo() {
  let num: number = 2;

  if (true) {
    let num: number = 3;
    console.log(num); //Output: 3
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
