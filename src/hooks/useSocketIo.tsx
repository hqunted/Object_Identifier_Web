import { socket } from "../socket";
import { useState, useEffect } from "react";

const useSocketIo = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [recieveImageData, setRecieveImageData] = useState("");

  const base64ToImage = (base64: string) => {
    return `data:image/png;base64,${base64}`;
  };
  console.log(base64ToImage(recieveImageData));
  socket.on("imageData", (imageData) => {
    setRecieveImageData(imageData);
  });

  const changeVisibilityOnLoad = () => {
    return recieveImageData ? "opacity-100" : "opacity-0";
  };

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
      console.log("Connected!");
    };

    const onDisconnect = () => {
      setIsConnected(false);
      console.log("Disconnected!");
    };

    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);
  return { recieveImageData, base64ToImage, changeVisibilityOnLoad };
};

export default useSocketIo;
