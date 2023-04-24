import io from "socket.io-client";

export const recieveImage = () => {
  const base64ToImage = (base64: string) => {
    return `data:image/png;base64,${base64}`;
  };
  const socket = io("http://localhost:3000");

  socket.on("connect", () => {
    console.log("Connected to server");
  });

  return socket.on("imageData", (imageData) => {
    console.log("Received image data from server");
    console.log(imageData);
    base64ToImage(imageData);
    return { imageData, base64ToImage };
  });
};
