const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn off the motor!');

  setTimeout(()=>{ //This comes at the end, when everything executes in the program. 
    console.log("Please turn off the motor. It's a gentle reminder.")
  },1000);
});

console.log("The script is running");
myEmitter.emit('WaterFull');
console.log("The script is still running");
myEmitter.emit('WaterFull');