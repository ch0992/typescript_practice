// type Words6 = {
//     [key: string]: (string | string[])[]
// }

// class Dict6 {
//     private words: Words;
//     constructor() {
//         this.words = {};
//     }
//     add(word : Word) {
//         if (!this.words[word.term]) 
//             this.words[word.term] = [];
//         this
//             .words[word.term]
//             .push(...word.defs);
//     }
//     def(term : string) {
//         let defString = "";
//         this
//             .words[term]
//             .forEach(function (def, i) {
//                 if (typeof def === "string") {
//                     defString += `${i + 1}. ${def}\n`;
//                 } else {
//                     defString += `${i + 1}.\n`;
//                     def.forEach(function (def, j) {
//                         defString += ` ${i + 1}-${j + 1}. ${def}\n`;
//                     });
//                 }
//             })
//         console.log(defString);
//     }
//     del(term : string, def : number) {
//         this
//             .words[term]
//             .splice(def - 1, 1);
//     }
//     delWord(term : string) {
//         delete this.words[term];
//     }
//     edit(term : string, def : number, newDef : string | string[]) {
//         this.words[term][def - 1] = newDef;
//     }
// }

// class Word6 {
//     constructor(public term : string, public defs : (string | string[])[]) {}
// }

// const dict6 = new Dict();

// const kimchi3 = new Word('kimchi', ['한국의 음식']);
// const kimchi = new Word('kimchi', ['!!잘못된 설명!!', '사진 찍을 때 내는 소리']);

// dict.add(kimchi3);
// dict.add(kimchi4);
// dict.def("kimchi");

// dict.edit("kimchi", 1, ['한국의 음식', '발효음식']);
// dict.del("kimchi", 2);
// dict.def('kimchi');

// dict.delWord('kimchi');
// dict.def('kimchi');

// /*  I made it possible for each word to have multiple meanings and small(lower) 
//  * meanings. Dict.def() is now console.logging the hierarchy of the meanings bel
//  * onging to the word. 
//  */