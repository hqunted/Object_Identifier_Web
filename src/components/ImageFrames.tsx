interface ImageFrameProps {
  imagePath: string;
}

export const ImageFrames = ({ imagePath }: ImageFrameProps) => {
  return (
    <div>
      <img
        src={imagePath}
        alt="Frames"
        className="absolute flex w-2.5xl h-2.5xl object-contain p-lg bg-gradient-to-br from-blue-300 to-blue-600 "
      />
    </div>
  );
};
