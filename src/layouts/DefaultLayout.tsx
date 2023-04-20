import { Header } from "../components/Header";
import { BackgroundObjects } from "../components/BackgroundObjects";

export interface DefaultLayoutProps {
  children: JSX.Element;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-blue-300 to-blue-600 ">
      <div className="absolute inset-0"></div>
      <div>
        <Header />
        <BackgroundObjects />
        {children}
      </div>
    </div>
  );
};
