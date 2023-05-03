import { socket } from "../socket";
import { useState, useEffect } from "react";

const useSocketIo = () => {
  const [, setIsConnected] = useState(socket.connected);
  const [recieveImageData, setRecieveImageData] = useState("");

  const base64ToImage = (base64: string) => {
    return `data:image/png;base64,${base64}`;
  };
  const toggleLoadingModal = () => {
    return recieveImageData ? "opacity-0 z-48" : "opacity-100 z-50";
  };

  socket.on("imageData", (imageData) => {
    setRecieveImageData(imageData);
  });

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  return {
    recieveImageData,
    base64ToImage,
    toggleLoadingModal,
  };
};

export default useSocketIo;
