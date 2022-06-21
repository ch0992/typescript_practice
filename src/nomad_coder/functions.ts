import { BuilderProgram } from "typescript"

function add(a:number, b:number): number {
    return a + b
}

const add2 = (a:number, b:number) => a+b

//call signature
type Add = (a:number, b:number) => number

const add3:Add= (a,b) => a+b

//overloading : multiple call signature

type Add2 = {
    (a: number, b: number) : number
    (a: number, b: string) : number
}

const add4:Add2 = (a,b) => {
    if(typeof b === "string") return a
    return a + b
}

type Config = {
    path: string,
    state: object
}


type Push = {
    (path:string):void
    (config:Config):void
}

const push:Push = (config) => {
    if(typeof config === "string") console.log(config);
    else{
        console.log(config.path);
    }
}

type Add3 = {
    (a: number, b: number) : number
    (a: number, b: number, c: number) : number
}

const add5:Add3 = (a,b,c?: number) => {
    if(c) return a+b+c
    return a+b
}


