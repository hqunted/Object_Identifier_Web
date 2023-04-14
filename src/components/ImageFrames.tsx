interface ImageFrameProps {
  imagePath: string;
}

export const ImageFrames = ({ imagePath }: ImageFrameProps) => {
  return (
    <div>
      <img
        src={imagePath}
        alt="Frames"
        className=" w-3xl h-3xl object-contain max-h-2.5xl 2xl:p-4xs 2xl:max-h-2.5xl xl:max-h-2.5xl lg:max-h-2xl md:max-h-2.5xl  bg-gradient-to-br from-blue-300 to-blue-600 rounded-3xl"
      />
    </div>
  );
};
