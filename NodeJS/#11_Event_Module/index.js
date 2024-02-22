// Events Module
// Node Js has  built-in module called "Events",
// where you can create

// 01 Registering for the event to be fired only once.

// 02 Create an event instance and register a couple of callbacks

const EventEmitter = require("events");
const event = new EventEmitter();

event.on("hello", () => {
  console.log("Hello World!!");
});

event.emit("hello");

// Registering for the event with callback parameters.

event.on("sayMyName", (name, msg) => {
  console.log(name + msg);
});

event.emit("sayMyName", "Utkarsh Singh Chouhan", "ok");
