//==== inherit recap between type and interface
type Coffee = {
    name : string
}

type Cafe = Coffee & {
    phone : number
}

//이미 만들어진 type은 상속등의 기법을 사용하지 않으면 property 변경이나 추가가 어렵다.


const CafeCustomer: Cafe = {
    name : "starbucks",
    phone : 8495
}


//==================
interface Coffee2 {
    name : string
}

interface Cafe2 extends Coffee2 {
    phone : number
}

//interface는 peroperty 추가가 자유롭다.
interface Cafe2 {
    etc:string
}

const CafeCustomer2: Cafe2 = {
    name : "yg",
    phone : 22345,
    etc : "none"
}

//type을 interface로 상속받아 implements
type Cafe3 = {
    name : string
}

interface Customer2 extends Cafe3 {
    phone : number
}

class MyCafe implements Customer2 {
    constructor(
        public name : "yg",
        public phone : 2334
    ){}
}
