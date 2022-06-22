import { isNullishCoalesce } from "typescript";

class Player {
    constructor(
        private firstName:string,
        private lastName:string,
        public nickName:string
    ) {}
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }

    private getFullName2(){
        return `${this.firstName} ${this.lastName}`
    }
}

const yg4 = new Player("yg","la","greg");


//private이므로 Player객체안에서만 접근가능
//yg4.firstName



abstract class User {
    constructor(
        private firstName:string,
        private lastName:string,
        public nickName:string
    ) {}
}

class Player2 extends User{

    
}


yg4.getFullName()
//private은 외부에서 호출불가
//yg4.getFullName2()