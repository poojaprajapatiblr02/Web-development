// js oops 

//1.object prototypes - it is a single template object that all objects inherit methods and properties from without having their own copy
let arr =[1,2,3,4,5];

//2.factory function - a function that returns a new object
function createUser(name, age) {
    const user = {
        name: name,
        age: age,
        greet: function() {                                                                         
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
    return user;
}

//using a single function multiple users can be created but this aslo has a drawback that each user will have its own copy of the greet method, which is not memory efficient.
let user1 = createUser("John", 30);
let user2 = createUser("Jane", 25);
user1.greet(); // Hello, my name is John and I am 30 years old.
user2.greet(); // Hello, my name is Jane and I am 25 years old



//3.New operator - a way to create an object from a constructor function. constructors by conventions does not return anything and starts with a capital letter
function Person(name,age){
    this.name = name,
    this.age=age
}

Person.prototype.talk = function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

let person1 = new Person("Alice", 28);   //new keyword is used to create a new instance of the Person object
let person2 = new Person("Bob", 32);
console.log(person1); // Person { name: 'Alice', age: 28 }
console.log(person2); // Person { name: 'Bob', age: 32 }

//since we are using the new operator the talk method is not copied to each instance, instead it is shared through the prototype chain


//4.Class syntax - using the above method is tricky syntax wise, so we can use class syntax which is a more modern way to create objects in JavaScript. It is just a better way to write the same thing as above. It is a syntactical sugar over the prototype based inheritance.
class PersonClass{
    constructor(name,age){
        this.name=name,
        this.age=age;
    }
    talk() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let person3 = new Person("Charlie", 22);
let person4 = new Person("Diana", 27);


//5.inheritance - a way to create a new class that inherits properties and methods from another class. It is a way to create a new class that is a child of another class. The child class can access the properties and methods of the parent class.

class Student extends PersonClass{
    constructor(name,age, marks){
        super (name,age); //super is used to call the constructor of the parent class
        this.marks = marks;
    }
    study() {
        console.log(`${this.name} is studying and has marks ${this.marks}`);
    }
}

let student1 = new Student("Eve", 20, 85);
let student2 = new Student("Frank", 21, 90);