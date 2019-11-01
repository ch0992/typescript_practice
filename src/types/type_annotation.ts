//Type Annotation in Typescript

var anno_age: number = 32;
var anno_name: string = "Jone";
var anno_isUpdated: boolean = true;

//type Annotation in Parameters
let display = (id: number, name: string) => {
  console.log("Id = " + id + ",Name = " + name);
};

//Type Annotation in Object
var anno_employee: {
  id: number;
  name: string;
};

anno_employee = {
  id: 100,
  name: "John"
};
