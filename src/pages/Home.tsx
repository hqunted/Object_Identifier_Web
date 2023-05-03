import { useEffect, useState } from "react";
import { UploadImage } from "../components/UploadImage";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { ResultImage } from "./ResultImage";
import { pingAPI } from "../services/pingAPI";
import { LoadingModal } from "../components/LoadingModal";

export const Home = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      console.log(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    if (selectedImage) pingAPI(selectedImage);
  }, [selectedImage]);

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center w-full h-full">
        {!selectedImage && (
          <UploadImage handleImageUpload={handleImageUpload} />
        )}

        {selectedImage && (
          <div>
            <LoadingModal />
            <ResultImage selectedImage={selectedImage} />
            <button
              className="z-49 absolute flex rounded-b-lg 2xl:text-sm xl:text-xs 2xl:p-3xs xl:p-xs  lg:p-sm bg-gradient-to-br from-blue-300 to-blue-600 lg:text-2xl md:text-4xl md:p-sm text-white hover:bg-white hover:scale-110 cursor-pointer"
              onClick={() => {
                setSelectedImage(null);
              }}
            >
              Upload New Image
            </button>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};
