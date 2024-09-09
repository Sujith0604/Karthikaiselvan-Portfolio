import FooterSection from "./pages/FooterSection";
import HeroSection from "./pages/HeroSection";
import WorkSection from "./pages/WorkSection";

const App = () => {
  return (
    <div className=" flex flex-col gap-11 font-sans">
      <HeroSection />
      <WorkSection />
      <FooterSection />
    </div>
  );
};

export default App;
