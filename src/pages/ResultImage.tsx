import { ImageFrames } from "../components/ImageFrames";

export interface selectedImage {
  selectedImage: string | undefined;
}

export const ResultImage = ({ selectedImage }: selectedImage) => {
  return (
    <div className=" w-full h-full flex 2xl:pl-2xl">
      <div className="flex 2xl:w-2xl bg-gray-400 2xl:pb-xl rounded-3xl ">
        <ImageFrames imagePath={"https://picsum.photos/200/300"} />
      </div>
      <div className="2xl:w-2.5xl"></div>
      <div className="flex 2xl:w-2xl bg-gray-400 2xl:pb-xl rounded-3xl">
        {selectedImage ? <ImageFrames imagePath={selectedImage} /> : null}
      </div>
    </div>
  );
};
