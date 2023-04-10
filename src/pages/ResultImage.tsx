import { LoadingModal } from "../components/LoadingModal";

export interface selectedImage {
  selectedImage: string | undefined;
}

export const ResultImage = ({ selectedImage }: selectedImage) => {
  return (
    <div className=" w-full h-full  flex items-center justify-center">
      <img
        src={selectedImage}
        alt="uploaded"
        className="flex max-w-full max-h-full object-contain rounded-lg"
      />
      <LoadingModal />
      <div className="w-[50%] h-[50%] bg-gray-600 rounded-lg opacity-50 "></div>
    </div>
  );
};
