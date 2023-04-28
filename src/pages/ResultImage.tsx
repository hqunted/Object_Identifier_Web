import { ImageFrame } from "../components/ImageFrame";

import useSocketIo from "../hooks/useSocketIo";

export interface selectedImage {
  selectedImage: string | undefined;
}

export const ResultImage = ({ selectedImage }: selectedImage) => {
  const { recieveImageData, base64ToImage } = useSocketIo();

  return (
    <div className="flex flex-col items-center justify-center">
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
