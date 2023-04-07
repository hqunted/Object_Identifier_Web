import { useState } from "react";

export const HandleImageUpload = () => {
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
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-600"></div>
      <div className="absolute top-[6%] left-[6%] p-4 text-blue-600 font-bold text-6xl font-amaticsc shadow-xl transform hover:scale-110 transition duration-300">
        Triangle Analyzer
      </div>
      {[...Array(60)].map((_, index) => (
        <div
          key={index}
          className={`absolute h-6 w-6 blur-sm animate-triangle-${
            index + 1
          } top-$`}
          style={{
            top: `${Math.floor(Math.random() * 101)}%`,
            left: `${Math.floor(Math.random() * 101)}%`,
            animationDelay: `${index * 0.5}s`,
            borderLeft: `3rem solid transparent`,
            borderRight: `3rem solid transparent`,
            borderBottom: `6rem solid rgba(${Math.floor(
              Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
              Math.random() * 256
            )}, 0.5)`,
          }}
        ></div>
      ))}
      <div className="flex flex-col items-center justify-center w-full h-full">
        {!selectedImage && (
          <>
            <div className="absolute bg-gray-600 w-1/2 h-1/2 rounded-lg opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <label className="absolute bg-white text-blue-500 px-4 py-2 rounded-lg mt-8 hover:bg-blue-500 hover:text-white cursor-pointer">
              Upload Image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </>
        )}
        {selectedImage && (
          <div className="absolute w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="uploaded"
              className="absolute max-w-full max-h-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};
