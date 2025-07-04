import landing from "../../assets/landing.jpg";
function Landing() {
  return (
    <div
      className="landing bg-cover bg-no-repeat bg-center h-dvh "
      style={{ backgroundImage: `url(${landing})` }}
    >
      <div className="bg-white/40 dark:bg-black/70 h-full">
        <div className="container flex items-center justify-center h-full">
          <div className="text-center w-full md:w-[550px] h-full flex flex-col justify-center">
            <p
              data-aos="fade-up"
              className="text-2xl font-semibold text-main md:text-4xl"
            >
              Start your fitness journey
            </p>
            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-4xl my-3 font-bold text-black md:text-6xl dark:text-white"
            >
              Your Fitness Journey Begins!
            </h2>
            <p data-aos="fade-up" data-aos-delay="500" className="mt-3">
              “The body achieves what the mind believes.”
            </p>
            <a
            href="/#our-programs"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-once={"true"}
              className=" mt-5 bg-main text-white w-48 mx-auto px-4 py-2 rounded-md cursor-pointer hover:bg-main/90"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
