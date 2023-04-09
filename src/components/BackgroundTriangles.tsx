export const BackgroundTriangles = () => {
  return (
    <>
      {[...Array(60)].map((_, index) => (
        <div
          key={index}
          className={`absolute h-6 w-6 blur-md animate-waving-triangle ${
            index + 1
          }`}
          style={{
            top: `${Math.floor(Math.random() * 101)}%`,
            left: `${Math.floor(Math.random() * 101)}%`,
            animationDelay: `${index * 0.5}s`,
            borderLeft: `8rem solid transparent`,
            borderRight: `8rem solid transparent`,
            borderBottom: `14rem solid rgba(${Math.floor(
              Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
              Math.random() * 256
            )}, 0.5)`,
          }}
        ></div>
      ))}
    </>
  );
};
