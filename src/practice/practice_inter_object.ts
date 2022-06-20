interface Person {
  name: String;
  age?: number;
}

interface Developer {
  name: string;
  age?: number;
  skills: string[];
}

const person: Person = {
  name: "김사람",
  age: 20
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript"]
};

const people: Person[] = [person, expert];

console.log(person);
console.log(expert);
console.log(people);
