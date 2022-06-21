type SuperPrint = {
    (arr: number[]):void
    (arr: boolean[]):void
    (arr: string[]):void
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i=>console.log(i))
}

superPrint([1,2,3,4])
superPrint([true,false,true])
superPrint(["a","b","c"])