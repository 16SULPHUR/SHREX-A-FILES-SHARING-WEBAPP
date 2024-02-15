const getUser = require("./getUser");

let socket;

function connectToWS() {
  socket = new WebSocket(
    `ws://localhost:3002/?id=${sessionStorage.getItem("id")}`
  );

  socket.addEventListener("close", () => {
    getUser("IIIDDD");
    console.log("WebSocket connection closed");
  });

  socket.addEventListener("open", () => {
    console.log("CONNECTED TO WS");
  });

  // socket.onclose((ev)=>{
  //   console.log("WS CLOSED ONCLOSE")
  //   console.log("EV")
  //   console.log(ev)
  // })
}

// Function to send a file
function sendFile(sender, recipient, fileBuffer) {
  const message = {
    type: "file",
    sender: "sender",
    recipient: "recipient",
    file: "fileBuffer",
  };

  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(message));
  } else {
    console.error("WebSocket is not open");
  }
}

module.exports = { connectToWS, sendFile };
