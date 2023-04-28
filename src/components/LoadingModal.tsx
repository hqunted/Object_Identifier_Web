import useSocketIo from "../hooks/useSocketIo";
import classNames from "classnames";

export const LoadingModal = () => {
  const { recieveImageData } = useSocketIo();

  return (
    <div
      className={classNames(
        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",
        recieveImageData ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="flex justify-center rounded-3xl transform bg-gradient-to-br from-blue-300 to-blue-600 shadow-lg p-2xl ">
        <div className="flex rounded-2xl bg-white text-blue-500 2xl:text-2xl 2xl:p-sm xl:p-xs lg:text-2xl md:text-4xl md:p-[8%] xl:text-2xl animate-waving-object">
          Please wait processing
          <div className="flex animate-bounce">...</div>
        </div>
      </div>
    </div>
  );
};
