import io from "socket.io-client";
import { reactLocalStorage } from "reactjs-localstorage";

const API_URI = `https://soket.mylearnr.app/`;

const userData = reactLocalStorage.getObject("userData");

// var socket = io(API_URI, { auth: { userId: userData?._id },secure:true });
var socket=''

async function SocketConnect() {
  // socket.on("connect", () => {
  //   console.log("socket is connected");
  //   console.log(socket);
  // });
  // socket.on("error", () => {
  //   console.log("socket ");
  // });
}

async function SocketDisconnect() {
  // socket.on("connection", () => alert("socket is connected"));
}

export default {
  SocketConnect,
  SocketDisconnect,
  socket,
};
export { SocketConnect, SocketDisconnect, socket };
