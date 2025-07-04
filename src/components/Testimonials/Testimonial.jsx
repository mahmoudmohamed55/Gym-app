import Slider from "react-slick";
import { TestimonialData } from "./TestimonialData";


function Testimonial() {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="testimonial" className="Testimonials bg-white dark:bg-black py-15">
      <div className="container p-0" data-aos = "zoom-in">
      <h2 className="text-3xl mb-15 font-bold text-center text-black dark:text-white">
        Testimonials
      </h2>
        <Slider {...settings}>
          {TestimonialData.map((item) => {
            return (
              <div  className="my-6">
                <div
                  key={item.id}
                  className="bg-slate-200 rounded-2xl mx-5 dark:bg-gray-900 p-5"
                >
                  <img
                    className="w-20 h-20 rounded-full border-2 border-main  mx-auto"
                    src={item.img}
                    alt=""
                  />
                  <div className="content mt-5 text-center">
                    <p className="font-bold mb-2 ">{item.name}</p>
                    <p>{item.text.slice(0, 100)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
export default Testimonial;
