import { useEffect, useState } from "react";
import { UploadImage } from "../components/UploadImage";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { ResultImage } from "./ResultImage";
import { pingAPI } from "../services/pingAPI";
import { LoadingModal } from "../components/LoadingModal";
import { addAnotherImageButton } from "../components/addAnotherImageButton";

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
            {addAnotherImageButton(setSelectedImage)}
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};
