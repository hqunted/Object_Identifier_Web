import io from "socket.io-client";

const base64ToImage = (base64: string) => {
  const img = new Image();

  return (img.src = base64);
};
export const saveImage = (imageData: string) => {
  //save image to assets
};

export const recieveImage = () => {
  const socket = io("http://localhost:3000");

  socket.on("connect", () => {
    console.log("Connected to server");
  });

  return socket.on("imageData", (imageData) => {
    console.log("Received image data from server");
    console.log(imageData);
    return imageData;
    // Render image data in the frontend
  });
};
