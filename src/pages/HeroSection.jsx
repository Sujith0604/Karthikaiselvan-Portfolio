import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";

const HeroSection = () => {
  return (
    <div className="flex flex-row w-[100%] h-[800px] md:h-screen bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black shadow-2xl ">
      <div className=" flex flex-col lg:w-[50%]  justify-center items-center md:items-start lg:gap-5 gap-11 px-11">
        <h1 className="text-white md:text-8xl font-light text-6xl tracking-wide  ">
          Hi there,
        </h1>
        <p className="text-white text-center md:text-start font-extralight text-xl  font-light ">
          My name is Ian Dunkerley, a front-end developer based in Torquay,
          Devon, UK. I have worked on a wide range of front-end projects, from
          DJ applications to eCommerce booking platforms, with a focus on
          creating clean, well-crafted interfaces that not only look great but
          also provide a seamless user experience.
        </p>
        <div className=" flex gap-5">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <EmailIcon className="text-white" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="text-white" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="text-white" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="text-white" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="text-white" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <CallIcon className="text-white" />
          </a>
        </div>
      </div>

      <div className=" hidden lg:flex lg:flex-col lg:w-[50%] justify-center items-center">
        <img
          className=" w-[400px] h-[400px] rounded-3xl object-cover"
          src="images/Herosection.jpg"
          alt="Placeholder Image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
