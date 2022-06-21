"use strict";
//number로 type지정 및 선언
var a = 6;
console.log(a);
//player 객체 선언
var player = {
    name: "nice"
};
//player
player.name = "yg";
console.log(player.name);
//공통 Alias Type을 yg변수에 주입
var yg = {
    name: "yg"
};
console.log(yg.name);
//************************************* */
//player3 선언 및 age 초기화 하지 않고 선언
var player3 = {
    name: "yg"
};
//player3 age 초기화
player3.age = 13;
//player3 age 초기화 되었을 경우 분기문
if (player3.age && player3.age > 10) {
    player3.age = 99;
    console.log(player3.age);
}
//************************************* */
//playerMaker에 player2 타입 리턴
function playerMaker(name) {
    return {
        name: name
    };
}
var yg2 = playerMaker("yg");
//player2를 리턴하는 함수이기 때문에 age는 초기화가 가능
yg2.age = 41;
var playerMaker2 = function (name) { return ({ name: name }); };
var yg3 = playerMaker2("ygyg");
yg3.age = 41;
// player4.name = "sd"
var numbers2 = [1, 2, 3, 4, 5];
// numbers2.push(7)
var names2 = ["1", "2"];
// names2.push{"sad"}
//************************************* */
// Tuple 
var player7 = ["yg", 1, true];
// player7[0] = 1
// player7[1] = "1"
var player8 = ["yg", 1, true];
// player7[0] = 1
// player7[1] = "1"
