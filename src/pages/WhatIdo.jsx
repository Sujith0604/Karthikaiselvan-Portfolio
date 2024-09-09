const WhatIdo = () => {
  return (
    <div className=" flex flex-col md:h-screen justify-around gap-5">
      <div className=" flex flex-col gap-5">
        <h1 className="md:text-6xl text-5xl font-light text-center">
          What I Do
        </h1>
        <p className="text-lg text-center">
          I am a passionate front-end developer and UI/UX designer. I specialize
          in building user-friendly and accessible interfaces.
        </p>
      </div>
      <div className=" flex items-center justify-around flex-wrap gap-5">
        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href="#">
            <img
              className="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
              alt="image description"
            />
          </a>
          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <p>
              Do you want to get notified when a new component is added to
              Flowbite?
            </p>
          </figcaption>
        </figure>
        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href="#">
            <img
              className="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
              alt="image description"
            />
          </a>
          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <p>
              Do you want to get notified when a new component is added to
              Flowbite?
            </p>
          </figcaption>
        </figure>
        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href="#">
            <img
              className="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
              alt="image description"
            />
          </a>
          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <p>
              Do you want to get notified when a new component is added to
              Flowbite?
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default WhatIdo;
