import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const WorkSection = () => {
  const listWorks = [
    {
      id: 1,
      title: "Project Title",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      link: "#",
    },
    {
      id: 2,
      title: "Project Title",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      link: "#",
    },
    {
      id: 3,
      title: "Project Title",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      link: "#",
    },
    {
      id: 4,
      title: "Project Title",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      link: "#",
    },
    {
      id: 5,
      title: "Project Title",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      link: "#",
    },
    {
      id: 6,
      title: "Project Title",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      link: "#",
    },
  ];

  return (
    <div>
      <div className=" flex flex-col items-center justify-center gap-5">
        <h1 className=" md:text-6xl text-5xl">My works</h1>
        <p className="text-lg">List of works </p>
      </div>
      <div className=" flex flex-wrap items-center gap-5 justify-around">
        {listWorks.map((work) => (
          <div
            key={work.id}
            className="h-[600px] rounded-3xl w-[400px] md:w-[500px] flex flex-col justify-between shadow-lg p-4 mx-2"
          >
            <img
              className="h-[300px] w-full object-cover "
              src="https://via.placeholder.com/400x600"
              alt="Project Image"
            />
            <div className=" flex flex-col gap-3">
              <h3 className=" text-4xl">{work.title}</h3>
              <p className=" text-[15px]">{work.description}</p>
            </div>
            <div className=" flex gap-5">
              <a href={work.link}>
                <LanguageIcon />
              </a>
              <a href="#">
                <CodeIcon />
              </a>
              <a href="#">
                <GitHubIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
