//type Inheritance

//interface extends\
interface Memory {
    name : string,
    age : number
}

interface HardWare extends Memory{
    hobby : string
}

interface SoftWare extends HardWare {
    sex : string
}

const kissCorp : SoftWare = {
    name : "yg",
    age : 39,
    hobby : "swimming",
    sex : "man"
}

//interface 상속없이 연달아 타입정의
interface Test1 {
    name : string
}

interface Test1 {
    age : number
}

interface Test1 {
    location : string
}

const test10 : Test1 = {
    name : "YG",
    age : 39,
    location : "Korea"
}




//=================================
//type을 상속할때 & 연산자 사용
type SoftWare2 = {
    name : string
}

type HardWare2 = SoftWare2& {
    age : number
}

const kissCorp2 : HardWare2 = {
    name : "yg",
    age : 39
}


//=================================
//type을 interface로 상속
type SoftWare3 = {
    name : string
}

interface HardWare3 extends SoftWare3 {
    name : "yg"
}


