import img from "../../assets/banner.png";
function About() {
  return (
    <div className="about py-20 bg-slate-100 dark:bg-black/40" id="about">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-16">
        <div data-aos="fade-up" className="image">
          <img
            src={img}
            alt=""
            className="sm:scale-125  object-contain w-full  max-h-[300px]"
          />
        </div>
        <div className="content text-center sm:text-left">
          <div data-aos="zoom-in" className="head flex items-center gap-3 mb-3 justify-center sm:justify-start">
            <p className="text-main/70 text-6xl font-bold">02</p>
            <div className="global ">
              <p className="text-main">Global Fitness</p>
              <h3 className="text-4xl font-bold">About Us</h3>
            </div>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-gray-600 mb-2 dark:text-white"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ratione
            ducimus beatae repellat vitae odit necessitatibus nisi aut deserunt
            minus modi sit quibusdam, est ea quas voluptate id! Voluptatibus,
            rerum!
          </p>
          <p data-aos="fade-up" data-aos-delay="500" className="text-gray-600 dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ratione
            ducimus beatae repellat vitae odit necessitatibus nisi aut deserunt
            minus modi sit quibusdam, est ea quas voluptate id! Voluptatibus,
            rerum!
          </p>
          <button
            data-aos-delay="700"
            data-aos="fade-up"
            className="bg-transparent border border-main text-main py-2 px-4 mt-5 rounded-md hover:bg-main hover:text-white cursor-pointer transition-all "
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
