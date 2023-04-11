import { LoadingModal } from "../components/LoadingModal";

export interface selectedImage {
  selectedImage: string | undefined;
}

export const ResultImage = ({ selectedImage }: selectedImage) => {
  return (
    <div className=" w-full h-full  flex items-center justify-center">
      <div className="flex w-6xl h-[90%] bg-gray-600 opacity-50 pb-[50%]"></div>
      <div className="flex w-6xl h-[70%] bg-gray-600 opacity-50 pb-[25%]">
        <img
          src={selectedImage}
          alt="uploaded"
          className="absolute max-w-full max-h-full object-contain rounded-lg"
        />
      </div>
      <LoadingModal />
    </div>
  );
};
