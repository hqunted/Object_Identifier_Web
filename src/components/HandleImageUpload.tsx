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
      <div className="absolute animate-pulse top-[6%] left-[6%] p-4 flex items-center space-x-2 text-indigo-900 font-bold text-6xl font-amaticsc drop-shadow-lg transform hover:scale-110 transition duration-300">
        <div>Triangle Analyzer</div>
      </div>
      {[...Array(60)].map((_, index) => (
  <div
    key={index}
    className={`absolute h-6 w-6 blur-sm animate-triangle-${index + 1} top-0 left-0`}
    style={{
      top: `${Math.floor(Math.random() * 100)}%`,
      left: `${Math.floor(Math.random() * 100)}%`,
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
      <div className="flex flex-col items-center justify-center w-full h-full ">
        //No image has been selected
        {!selectedImage && (
          <>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-300 to-blue-600 w-1/2 h-1/2 rounded-lg shadow-lg"></div>
            <label className="absolute animate-bounce bg-white text-blue-500 px-4 py-2 rounded-lg mt-8 hover:bg-blue-500  hover:text-white cursor-pointer">
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
        //Image has been selected
        {selectedImage && (
          <div className="absolute w-full h-full flex items-center justify-center">
            <div className="flex absolute w-full h-full items-center justify-center">
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
        )}
      </div>
    </div>
  );
};
