import { useState } from "react";
import { Header } from "../components/Header";
import { BackgroundTriangles } from "../components/BackgroundTriangles";
import { UploadImage } from "../components/UploadImage";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { ResultImage } from "./ResultImage";

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
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center w-full h-full ">
        //No image has been selected
        {!selectedImage && (
          <UploadImage handleImageUpload={handleImageUpload} />
        )}
        //Image has been selected
        {selectedImage && <ResultImage selectedImage={selectedImage} />}
      </div>
    </DefaultLayout>
  );
};
