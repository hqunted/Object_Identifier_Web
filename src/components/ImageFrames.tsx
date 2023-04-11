interface ImageFrameProps {
  imagePath: string;
}

export const ImageFrames = ({ imagePath }: ImageFrameProps) => {
  return (
    <div>
      <img
        src={imagePath}
        alt="Image"
        className="absolute flex w-6xl h-6xl object-contain p-lg bg-gradient-to-br from-blue-300 to-blue-600 "
      ></img>
    </div>
  );
};
