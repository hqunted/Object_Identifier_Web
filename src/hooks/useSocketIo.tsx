import { useState, useEffect } from "react";
import io from "socket.io-client";

const useSocketIo = () => {
  const [imageData, setImageData] = useState("");

  const socket = io("http://localhost:3000");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("imageData", (data) => {
      console.log("Received image data from server");
      setImageData(data);
    });
  }, []);

  return imageData;
};

export default useSocketIo;
