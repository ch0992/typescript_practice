//concretetype
type SuperPrint = {
    (arr: number[]):void
    (arr: boolean[]):void
    (arr: string[]):void
    (arr: (number|boolean)[]):void
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i=>console.log(i))
}

superPrint([1,2,3,4])
superPrint([true,false,true])
superPrint(["a","b","c"])
superPrint([1,2,true,false])
superPrint([1,2])


//==========================================

//generic
type SuperPrint2 = {
    <T>(arr: T[]):void
}

const superPrint2: SuperPrint2 = (arr) => {
    arr.forEach(i=>console.log(i))
}

superPrint2([1,2,3,4])
superPrint2([true,false,true])
superPrint2(["a","b","c"])
superPrint2([1,2,true,false])
superPrint2([1,2,3,4,5,6,7,false,"asdf"])


//
type SuperPrint3 = {
    <T>(arr: T[]):T
}

const superPrint3: SuperPrint3 = (arr) => arr[0]

const first = superPrint3([1,2,3,4])
const second = superPrint3(["hey","key",123,false])


type SuperPrint4={
    <T,M>(arr: T[], b:M):T
}

const superPrint4: SuperPrint4 = (arr, b) => arr[0]

const third = superPrint4([1,2,3,4],4)
const forth = superPrint4([1,2,3,4],"44")
