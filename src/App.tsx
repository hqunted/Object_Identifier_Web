import "./App.css";
import { useState } from "react";

function App() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Image Uploader</h1>
      {selectedImage ? (
        <div className="flex flex-col items-center">
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Uploaded Image"
            className="max-w-full max-h-96"
          />
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg mt-8"
            onClick={() => setSelectedImage(null)}
          >
            Remove Image
          </button>
        </div>
      ) : (
        <div className="border-4 border-dashed border-gray-400 rounded-lg p-8">
          <h2 className="text-xl font-bold mb-4">Select an Image to Upload</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="py-2"
          />
        </div>
      )}
    </div>
  );
}

export default App;
