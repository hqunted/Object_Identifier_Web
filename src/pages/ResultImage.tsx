import { useEffect } from "react";
import { ImageFrame } from "../components/ImageFrame";
import { recieveImage } from "../services/processImage";

export interface selectedImage {
  selectedImage: string | undefined;
}
const recievedImg = recieveImage();
export const ResultImage = ({ selectedImage }: selectedImage) => {
  useEffect(() => {
    console.log("SAISJFLKSAFKFSAL");
  }, [recievedImg]);
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
