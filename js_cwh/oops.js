class Animal{
  introduce(){
    this.bark();
  }
}

class Dog extends Animal{
  bark(){
    console.log("Woof Woof");
  }
}

const dog = new Dog()
dog.introduce()

class Cat extends Animal{
  bark(){
    console.log("Meow Meow");
  }
}

const cat = new Cat();
cat.introduce()