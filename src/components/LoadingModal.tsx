export const LoadingModal = () => {
  return (
    <>
      <div className="flex relative justify-center h-screen align-middle items-center w-screen 2xl:pb-[40%] 2xl:p-4xl xl:pt-lg xl:p-lg xl:pb-2.5xl lg:pt-lg lg:p-md lg:pb-2.5xl md:pt-3.5xl md:pb-3x">
        <div className="flex w-full 2xl:py-3xl lg:py-1.5xl lg:w-6xl md:py-lg md:pb-3xl py-3xl justify-center rounded-3xl transform bg-gradient-to-br from-blue-300 to-blue-600 shadow-lg">
          <div className="flex rounded-2xl 2xl:text-7xl 2xl:p-sm xl:p-xs animate-waving-triangle xl:text-2xl lg:p-xxs bg-white lg:text-2xl md:text-4xl md:p-[8%] text-blue-500 ">
            Processing
            <div className="flex animate-bounce">...</div>
          </div>
        </div>
      </div>
    </>
  );
};
