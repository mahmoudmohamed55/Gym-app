import programImg from "../../assets/banner.png";
function OurPrograms() {
  return (
    <div
      className="Our-Programs py-20 bg-white dark:bg-black"
      id="our-programs"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="content text-center sm:text-left">
          <div data-aos="zoom-in" className="head flex items-center gap-3 mb-3 justify-center sm:justify-start ">
            <p className="text-main/70 text-6xl font-bold">01</p>
            <div className="global ">
              <p className="text-main">Global Fitness</p>
              <h2 className="text-black text-4xl font-bold dark:text-white">
                Our Programs
              </h2>
            </div>
          </div>
          <p data-aos = "fade-up" data-aos-delay="300" className="text-gray-600 mb-2 dark:text-white">
            Discover our variety of training programs designed to fit every
            goal. Whether you're a beginner or a pro, we have the perfect plan
            for you.
          </p>
          <p data-aos = "fade-up" data-aos-delay="500" className="text-gray-600 mb-2 dark:text-white">
            From weight loss and muscle building to flexibility and endurance,
            our certified trainers will guide you every step of the way in a
            motivating and supportive environment.
          </p>
          <button data-aos = "fade-up" data-aos-delay="700" className="bg-transparent text-main border py-2 px-4 border-main rounded-md cursor-pointer hover:bg-main hover:text-white">
            View Programs
          </button>
        </div>
        <div data-aos = "fade-up" className="image">
          <img
            src={programImg}
            className="sm:scale-125 object-contain w-full  max-h-[300px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default OurPrograms;
