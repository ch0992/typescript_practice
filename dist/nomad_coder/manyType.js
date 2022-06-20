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
//공통 인터페이스 player2 주입
var yg = {
    name: "yg"
};
var player3 = {
    name: "yg"
};
player3.age = 13;
if (player3.age && player3.age > 10) {
    player3.age = 99;
    console.log(player3.age);
}
