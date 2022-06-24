//implements
interface Customer {
    firstName: string,
    lastName: string,
    sayHi(name:string):string
    fullName():string
}

interface Boss {
    health:number
}

class VisitCustomer implements Customer, Boss {
    constructor(
        //implements는 property를 private로 변경이 불가능 protected도 마찬가지.
        // private firstName:string,
        // private lastName:string
        public firstName:string,
        public lastName:string,
        public health:number
    ){}
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    sayHi(name: string): string {
        return `Hello ${name}`
    }
}

//interface를 type으로 상속

//일반 function
function makeUser(user:Customer){
    return "hi"
}

//function에 interface로 리턴시
// new User()와 같은 형식은 필요하지 않음.
function makeUserReturn(user:Customer): Customer{
    return {
        firstName:"yg",
        lastName:"choi",
        fullName:() => "xx",
        sayHi: (name) => "string"
    }
}

//arrow function
const makeUser2 = (user:Customer) =>{
    return "hi"
}

//Customer 타입을 상속받은 function의 실제 데이터 초기화
//인터페이스를 argument로 삽입
makeUser({
    firstName:"yg",
    lastName:"choi",
    fullName:() => "xx",
    sayHi: (name) => "string"
})

makeUser2({
    firstName:"yg",
    lastName:"choi",
    fullName:() => "xx",
    sayHi: (name) => "string"
})