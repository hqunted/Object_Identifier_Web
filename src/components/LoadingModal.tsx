export const LoadingModal = () => {
  return (
    <>
      <div className="flex absolute justify-center bg-gray-800 bg-opacity-90 align-middle items-center w-screen 2xl:pt-[40%] 2xl:p-[20%] xl:pt-[30%] xl:p-[10%] xl:pb-[30%] lg:pt-[20%] lg: p-[15%] lg:pb-[35%] md:pt-[100%] md:pb-[50%] sm:pb-[130%] ">
        <div className="flex w-full 2xl:py-[20%] lg:py-[15%] lg:w-[55%] md:py-[35%] py-[50%] justify-center rounded-3xl transform bg-gradient-to-br from-blue-300 to-blue-600 shadow-lg">
          <div className="flex rounded-2xl 2xl:text-7xl 2xl:p-[2%] xl:p-[5%] animate-waving-triangle xl:text-2xl lg:p-[3%] bg-white lg:text-2xl md:text-4xl md:p-[8%] text-blue-500 ">
            Processing
            <div className="flex animate-bounce">...</div>
          </div>
        </div>
      </div>
    </>
  );
};
