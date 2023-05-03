export const addAnotherImageButton = (setSelectedImage: Function) => {
  return (
    <div>
      <button
        className="z-49 absolute flex rounded-b-lg 2xl:text-sm xl:text-xs 2xl:p-3xs xl:p-xs lg:p-sm bg-gradient-to-br from-blue-300 to-blue-600 lg:text-2xl md:text-4xl md:p-sm text-white hover:bg-white hover:scale-110 cursor-pointer"
        onClick={() => {
          setSelectedImage(null);
        }}
      >
        Upload New Image
      </button>
    </div>
  );
};
