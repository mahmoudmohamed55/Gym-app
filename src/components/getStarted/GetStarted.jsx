import dummble from "../../assets/dumbell.jpg";
import app from "../../assets/app_store.png";
import play from "../../assets/play_store.png";
function GetStarted() {
  return (
    <div className="getStarted py-20 px-10 bg-white dark:bg-black/40">
      <div
        className="container bg-cover  bg-no-repeat bg-center h-full w-full sm:min-h-[400px] rounded-3xl p-10 flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${dummble})` }}
      >
        <h1  data-aos="fade-up" className="text-3xl mb-3 font-bold text-black dark:text-white">
          Get Started with our app
        </h1>
        <p data-aos = "fade-up" data-aos-delay="300" className="text-md max-w-[600px] text-center font-bold text-black dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam harum accusantium odit?
        </p>
        <div data-aos = "fade-up" data-aos-delay="500" className="images  flex flex-wrap justify-center items-center gap-4 mt-4">
            <img src={app} className="max-w-[150px] sm:max-w-[120px] md:max-w-[300px]" alt="" />
            <img src={play} className="max-w-[150px] sm:max-w-[120px] md:max-w-[300px]"  alt="" />
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
