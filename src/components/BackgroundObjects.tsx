export const BackgroundObjects = () => {
  const randomShapes = [...Array(60)].map((_, index) => {
    const shapeType = Math.floor(Math.random() * 2) === 0 ? "circle" : "square";
    const shapeSize = `${Math.floor(Math.random() * 10) + 5}rem`;
    const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, 0.5)`;
    const randomTop = `${Math.floor(Math.random() * 101)}%`;
    const randomLeft = `${Math.floor(Math.random() * 101)}%`;
    const randomDelay = `${index * 0.5}s`;

    const shapeStyle = {
      top: randomTop,
      left: randomLeft,
      animationDelay: randomDelay,
      backgroundColor: randomColor,
      borderRadius: shapeType === "circle" ? "50%" : "0%",
      height: shapeSize,
      width: shapeSize,
    };

    return (
      <div
        key={index}
        className={`absolute blur-sm animate-waving-shape ${shapeType} animate-waving-object`}
        style={shapeStyle}
      />
    );
  });

  return <>{randomShapes}</>;
};
