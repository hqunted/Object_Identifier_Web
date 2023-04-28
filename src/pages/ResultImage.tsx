import { useEffect } from "react";
import { ImageFrame } from "../components/ImageFrame";
import { socket } from "../socket";
import { useState } from "react";
import { LoadingModal } from "../components/LoadingModal";

export interface selectedImage {
  selectedImage: string | undefined;
}

export const ResultImage = ({ selectedImage }: selectedImage) => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [recieveImageData, setRecieveImageData] = useState("");

  const base64ToImage = (base64: string) => {
    return `data:image/png;base64,${base64}`;
  };
  console.log(base64ToImage(recieveImageData));
  socket.on("imageData", (imageData) => {
    setRecieveImageData(imageData);
  });
  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
      console.log("Connected!");
    }

    function onDisconnect() {
      setIsConnected(false);
      console.log("Disconnected!");
    }

    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <div className="w-full max-w-screen-lg flex flex-col md:flex-col lg:flex-row justify-center items-center relative">
        {selectedImage && (
          <div className="flex justify-center lg:pt-4xs lg:w-2.5xl lg:rounded-3xl">
            <ImageFrame imageData={selectedImage} />
          </div>
        )}
        <div className="flex justify-center lg:pt-4xs lg:w-2.5xl lg:rounded-3xl">
          <ImageFrame imageData={base64ToImage(recieveImageData)} />
        </div>
        <div className="bg-gradient-to-br from-blue-300 to-blue-600 rounded-3xl" />
      </div>
    </div>
  );
};
