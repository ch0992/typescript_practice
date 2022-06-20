//number로 type지정 및 선언
let a : number = 6

console.log(a)

//player 객체 선언
const player = {
    name:"nice"
}

//player
player.name = "yg"

console.log(player.name);

//************************************* */


//공통 Alias Type
type player2 = {
  name:string,
  age?:number   
}

//공통 Alias Type을 yg변수에 주입
const yg : player2 = {
    name:"yg"
}

console.log(yg.name);

//************************************* */

//player3 선언 및 age 초기화 하지 않고 선언
const player3 : {
    name: string;
    age?: number;
} = {
    name:"yg"
}

//player3 age 초기화
player3.age = 13

//player3 age 초기화 되었을 경우 분기문
if(player3.age && player3.age > 10){
    player3.age = 99
    console.log(player3.age);
}

//************************************* */

//type 중복사용을 위한 선언
type Name = string;
type Age = number;

//PlayerYG에 타입선언에 type변수 사용
type PlayerYG = {
    name:Name,
    age:Age
}

type PlayerSeattle = {
    name:Name,
    age:Age
}

//************************************* */

//playerMaker에 player2 타입 리턴
function playerMaker(name:string) : player2 {
    return {
        name
    }
}
const yg2 = playerMaker("yg")
//player2를 리턴하는 함수이기 때문에 age는 초기화가 가능
yg2.age = 41

const playerMaker2 = (name:string) : player2 => ({name})
const yg3 = playerMaker2("ygyg")
yg3.age = 41