import FooterSection from "./pages/FooterSection";
import HeroSection from "./pages/HeroSection";
import WhatIdo from "./pages/WhatIdo";
import WorkSection from "./pages/WorkSection";

const App = () => {
  return (
    <div className=" flex flex-col gap-11 font-poppins">
      <HeroSection />
      <WhatIdo />
      <WorkSection />
      <FooterSection />
    </div>
  );
};

export default App;
