import { useState } from "react";
import { Header } from "../components/Header";
import { BackgroundTriangles } from "../components/BackgroundTriangles";
import { UploadImage } from "../components/UploadImage";

export const Home = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-600"></div>
      <Header />
      <BackgroundTriangles />
      <div className="flex flex-col items-center justify-center w-full h-full ">
        //No image has been selected
        {!selectedImage && (
          <UploadImage handleImageUpload={handleImageUpload} />
        )}
        //Image has been selected
        {selectedImage && (
          <div className=" w-full h-full flex items-center justify-center">
            <div className="flex w-full h-full items-center justify-center">
              <div className="w-1/2 h-full flex items-center justify-center">
                <div className="w-[65%] h-[65%] bg-gray-600 rounded-lg opacity-50 ">
                  <img
                    src={selectedImage}
                    alt="uploaded"
                    className="absolute max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
              </div>
              <div className="w-1/2 h-full flex items-center justify-center">
                <div className="w-[65%] h-[65%] bg-gray-600 rounded-lg opacity-50"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
