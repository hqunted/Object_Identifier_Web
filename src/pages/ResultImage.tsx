import { useEffect } from "react";
import { ImageFrame } from "../components/ImageFrame";
import { RecieveImage } from "../services/processImage";
import { socket } from "../socket";
import { useState } from "react";

export interface selectedImage {
  selectedImage: string | undefined;
}
const recievedImg = RecieveImage();

export const ResultImage = ({ selectedImage }: selectedImage) => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    console.log("SAISJFLKSAFKFSAL");
    console.log(isConnected);
  }, [recievedImg]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <div className="w-full max-w-screen-lg flex flex-col md:flex-col lg:flex-row justify-center items-center relative">
        <div className="flex justify-center lg:pt-4xs lg:w-2.5xl lg:rounded-3xl">
          <ImageFrame imageData={"https://picsum.photos/200/300"} />
        </div>
        {selectedImage && (
          <div className="flex justify-center lg:pt-4xs lg:w-2.5xl lg:rounded-3xl">
            <ImageFrame imageData={selectedImage} />
          </div>
        )}

        <div className="bg-gradient-to-br from-blue-300 to-blue-600 rounded-3xl" />
      </div>
    </div>
  );
};
