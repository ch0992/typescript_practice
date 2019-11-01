interface Find_people {
  name: string;
  id: number;
  email: string;
}

const find_numbers: number[] = [1, 2, 3, 4, 10];
const find_people: Find_people[] = [
  { name: "test01", id: 1, email: "test1@test.com" },
  { name: "test02", id: 2, email: "test2@test.com" },
  { name: "test03", id: 3, email: "test3@test.com" },
  { name: "test04", id: 4, email: "test4@test.com" }
];

let findSame = (x: number, y: number): number => {
  let result: number = Number(find_numbers.find(x => x === y));
  return result;
};

let findBigger = (x: number, y: number): number => {
  let result: number = Number(find_numbers.find(x => x > y));

  return result;
};

console.log(
  "findSame : " + findSame(4, 4) + " findBigger : " + findBigger(4, 5)
);

let findPerson = (x: number): Find_people[] => {
  let result: any = find_people.find(person => person.id === x);
  return result;
};

console.log(findPerson(2));
