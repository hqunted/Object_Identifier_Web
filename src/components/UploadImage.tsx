export interface UploadImageProps {
  handleImageUpload(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const UploadImage = ({ handleImageUpload }: UploadImageProps) => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-300 to-blue-600 w-1/2 h-1/2 rounded-lg shadow-lg"></div>
      <label className="px-4 py-2 mt-[15%] rounded-lg bg-white text-blue-500 animate-bounce hover:bg-blue-500  hover:text-white cursor-pointer">
        Upload Image
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </label>
    </>
  );
};
