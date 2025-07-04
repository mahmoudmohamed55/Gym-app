import programImg from "../../assets/banner.png";

function WhyYouChooseUs() {
  return (
    <div
      className="Why-You-Choose-Us py-20 bg-white dark:bg-black"
      id="why-you-choose-us"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="content text-center sm:text-left">
          <div
            data-aos="zoom-in"
            className="head flex items-center gap-3 mb-3 justify-center sm:justify-start"
          >
            <p className="text-main/70 text-6xl font-bold">03</p>
            <div className="global">
              <p className="text-main">Why Choose Us</p>
              <h2 className="text-black text-4xl font-bold dark:text-white">
                Why You Choose Us
              </h2>
            </div>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-gray-600 mb-2 dark:text-white"
          >
            We’re more than just a gym — we’re a community. Our expert trainers,
            clean environment, and supportive atmosphere help you stay consistent
            and reach your goals faster.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-gray-600 mb-2 dark:text-white"
          >
            Whether you're starting your fitness journey or pushing toward a
            new milestone, we're here to guide, support, and challenge you
            every step of the way.
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="700"
            className="bg-transparent text-main border py-2 px-4 border-main rounded-md cursor-pointer hover:bg-main hover:text-white"
          >
            Learn More
          </button>
        </div>
        <div data-aos="fade-up" className="image">
          <img
            src={programImg}
            className="sm:scale-125 object-contain w-full max-h-[300px]"
            alt="Why You Choose Us"
          />
        </div>
      </div>
    </div>
  );
}

export default WhyYouChooseUs;
