export const addAnotherImageButton = (setSelectedImage: Function) => {
  return (
    <div>
      <button
        className="z-49 absolute flex rounded-b-lg 2xl:text-sm xl:text-xs 2xl:p-2xs 2xl:max-h-2.5xl xl:max-h-2.5xl lg:max-h-2xl md:max-h-2.5x lg:text-2xl md:text-xl md:p-3xs bg-gradient-to-br from-blue-300 to-blue-600 text-white hover:bg-white hover:scale-110 cursor-pointer"
        onClick={() => {
          setSelectedImage(null);
        }}
      >
        Upload New Image
      </button>
    </div>
  );
};
