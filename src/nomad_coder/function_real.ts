function superPrint5<T>(a: T[]){
    return a[0]
}

const A = superPrint5([0,2,3,4])

type Player2<E> = {
    name:string
    extraInfo:E
}

const sdf : Player2<{favFood:string}> = {
    name:"yg",
    extraInfo: {
        favFood:"kimchi"
    }
}


type YgExtra = {
    favFood:string;
}

type YgPlayer = Player2<YgExtra>



const sdf2 : YgPlayer =  {
    name : "yg",
    extraInfo : {
        favFood : "kimchi"
    }
}

const ana: Player2<null> = {
    name: "ana",
    extraInfo:null
}