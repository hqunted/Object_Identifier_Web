export interface UploadImageProps {
  handleImageUpload(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const UploadImage = ({ handleImageUpload }: UploadImageProps) => {
  return (
    <>
      <div className="flex justify-center align-middle items-center w-screen h-screen 2xl:pb-2.5xl lg:pb-2.5xl md:pb-4xl sm:pb-3xl ">
        <div className="flex w-full 2xl:py-1.5xl lg:py-xl lg:w-1/2 md:py-2xl justify-center rounded-3xl transform bg-gradient-to-br from-blue-300 to-blue-600 shadow-lg">
          <label className="flex rounded-2xl 2xl:text-md 2xl:p-xxs xl:p-xs xl:text-2xl lg:p-sm bg-white lg:text-2xl md:text-4xl md:p-sm  text-blue-500 animate-bounce hover:bg-blue-500 hover:text-white cursor-pointer">
            Upload Image
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
              alt="uploaded"
            />
          </label>
        </div>
      </div>
    </>
  );
};
