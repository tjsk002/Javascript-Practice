
//
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    console.log('▲');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


const test1 = {} //object literal
const test2 = new Object(); //object constructor

function print(person){
  console.log(person.name);
  console.log(person.age);
}

const salim = {name:'salim', age:4}
print(salim);

salim.hasjob = true;
console.log(salim.hasjob);

let food = ["감자튀김","핫도그"]
food.push("삼각김밥","고기","라면");
console.log(food);
food.splice(1,1,"아이스크림","케이크");
console.log(food);

let food2 = ["식빵","도넛"]
let newFood = food.concat(food2);
console.log(newFood);
console.clear();

console.log(food);
console.log(food.indexOf("고기"));
food.push("감자튀김")
console.log(food);
console.log(food.indexOf("감자튀김"));
console.log(food.lastIndexOf("감자튀김"));

console.log(food.includes("고기"));
console.log(food.includes("소고기"));



