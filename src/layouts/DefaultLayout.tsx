import { Header } from "../components/Header";
import { BackgroundTriangles } from "../components/BackgroundTriangles";

export interface DefaultLayoutProps {
  children: JSX.Element;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-600"></div>
      <div>
        <Header />
        <BackgroundTriangles />
        {children}
      </div>
    </div>
  );
};
