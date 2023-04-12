export const BackgroundTriangles = () => {
  return (
    <>
      {[...Array(60)].map((_, index) => (
        <div
          key={index}
          className={`absolute h-6 w-6 blur-sm animate-waving-triangle ${
            index + 1
          }`}
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
    </>
  );
};
