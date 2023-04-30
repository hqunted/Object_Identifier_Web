import useSocketIo from "../hooks/useSocketIo";
import classNames from "classnames";

export const LoadingModal = () => {
  const { toggleLoadingModal } = useSocketIo();

  return (
    <div
      className={classNames(
        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",
        toggleLoadingModal()
      )}
    >
      <div className="flex justify-center rounded-3xl bg-gradient-to-r from-blue-300 to-blue-400 via-blue-600 animate-gradient-x shadow-lg p-5xl">
        <div className="flex rounded-2xl bg-white text-blue-500 2xl:text-5xl xl:p-xs lg:text-3xl md:text-4xl md:p-[8%] xl:text-2xl font-amaticsc animate-waving-object">
          Please wait processing
          <div className="flex animate-bounce">...</div>
        </div>
      </div>
    </div>
  );
};
