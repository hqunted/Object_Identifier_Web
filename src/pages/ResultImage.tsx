import { ImageFrames } from "../components/ImageFrames";

export interface selectedImage {
  selectedImage: string | undefined;
}

export const ResultImage = ({ selectedImage }: selectedImage) => {
  return (
    <div className=" w-full h-full flex items-center justify-center">
      <div className="flex 2xl:w-6xl 2xl:h-6xl bg-gray-400 2xl:pb-5xl rounded-3xl ">
        <ImageFrames imagePath={"https://picsum.photos/200/300"} />
      </div>
      <div className="w-4xl h-6xl"></div>
      <div className="flex 2xl:w-6xl 2xl:h-6xl bg-gray-400 2xl:pb-5xl rounded-3xl">
        {selectedImage ? <ImageFrames imagePath={selectedImage} /> : null}
      </div>
    </div>
  );
};
