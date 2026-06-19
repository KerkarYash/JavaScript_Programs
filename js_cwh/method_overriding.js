class Employee{
  login(){
    console.log(`Employee has logged in.`)
  }

  logout(){
    console.log(`Employee has logged out.`)
  }

  requestLeaves(leaves){
    console.log(`Leave request submitted.`);
    console.log(`Employee has requested ${leaves} leaves.`);
    console.log(`Request sent to manager.`);
  }
}

class Programmer extends Employee{
  requestCoffee(x){
    console.log(`Employee has requested ${x} coffees.`)
  }
  // requestLeaves(leaves){
  //   console.log(`Employee has requested ${leaves+1} leaves (One Extra).`)
  // }

  requestLeaves(leaves){
    super.requestLeaves(4)
    console.log("One Extra leave is granted")
  }
}

let e = new Programmer();
e.login()
e.requestLeaves(3)
e.requestCoffee(2)