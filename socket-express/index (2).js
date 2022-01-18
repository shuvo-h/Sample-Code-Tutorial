import logo from './logo.svg';
import './App.css';
import { io } from "socket.io-client";

function App() {

  const socket = io("ws://localhost:5000");

socket.on("connect", () => {
  // either with send()
  socket.send("Hello!");

  // or with emit() and custom event names
  socket.emit("salutations", "Hello!", { "mr": "john" }, Uint8Array.from([1, 2, 3, 4]));
});

// handle the event sent with socket.send()
socket.on("message", data => {
  console.log(data);
});

// handle the event sent with socket.emit()
socket.on("greetings", (elem1, elem2, elem3) => {
  console.log(elem1, elem2, elem3);
});

  return (
    <div className="App">
      
      
    </div>
  );
}

export default App;
