const {EventEmitter} = require("events");
var myEvent=new EventEmitter();
myEvent.on("Flash",()=>{
    console.log("Flash Flash Flash Runnnnnnn");
})
myEvent.emit("Flash")