import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";

const FooterSection = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black flex flex-col md:flex-row gap-10 md:gap-0 items-center md:justify-between justify-center h-[300px] px-4">
      <h1 className=" text-4xl text-white">Karthikaiselvan</h1>
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
  );
};

export default FooterSection;
