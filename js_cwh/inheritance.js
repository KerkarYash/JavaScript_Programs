class Animal{
  constructor(name, color){
    this.name = name
    this.color = color
  }

  run(){
    console.log(`${this.name} is running`)
  }
  rest(){
    console.log(`${this.name} is resting`)
  }
}

class Monkey extends Animal {
  eatBanana(){
    console.log(`${this.name} is eating banana`)
  }
}

let roxyObject = new Animal("Roxy","white")
roxyObject.run()

let chimpuObject = new Monkey("Chimpu","brown")
chimpuObject.eatBanana()
