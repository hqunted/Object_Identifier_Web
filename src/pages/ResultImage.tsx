export interface selectedImage {
  selectedImage: string | undefined;
}

export const ResultImage = ({ selectedImage }: selectedImage) => {
  return (
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
  );
};
