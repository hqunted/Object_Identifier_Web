export interface UploadImageProps {
  handleImageUpload(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const UploadImage = ({ handleImageUpload }: UploadImageProps) => {
  return (
    <>
      <div className="flex justify-center align-middle items-center w-screen h-screen 2xl:pb-[20%] xl:pb-[30%] lg:pb-[35%] md:pb-[50%] sm:pb-[130%] ">
        <div className="flex w-full 2xl:py-[14%] lg:py-[15%] lg:w-[55%] md:py-[35%] py-[50%] justify-center rounded-3xl transform bg-gradient-to-br from-blue-300 to-blue-600 shadow-lg">
          <label className="flex rounded-2xl 2xl:text-5xl 2xl:p-[2%] xl:p-[5%] xl:text-2xl lg:p-[3%] bg-white lg:text-2xl md:text-4xl md:p-[8%]  text-blue-500 animate-bounce hover:bg-blue-500 hover:text-white cursor-pointer">
            Upload Image
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>
      </div>
    </>
  );
};
