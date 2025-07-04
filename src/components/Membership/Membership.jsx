import { skillsData } from "./MembershipData";

function Membership() {
  return (
    <div id="Membership" className="Membership py-20 bg-white dark:bg-black">
      <div className="container">
        <h2 data-aos="fade-up" className="text-3xl mb-15 font-bold text-center text-black dark:text-white">
          Join Our Membership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {skillsData.map((skill, index) => (
            <div 
            data-aos = "fade-up"
            data-aos-delay={skill.aosDelay}
              key={index}
              className="card group text-center space-y-3 sm:space-y-6 p-4 sm:py-16 bg-slate-200 hover:bg-red-100 dark:bg-gray-800 dark:hover:bg-main/50 duration-300 text-black dark:text-white rounded-lg group"
            >
              <h3 className="text-2xl mb-3 font-bold">{skill.name}</h3>
              <p className="mb-3 text-main text-2xl font-bold   ">
                {skill.price}
              </p>
              {skill.description.map((desc, index) => (
                <p key={index} className="mt-2 text-black dark:text-white">
                  {desc}
                </p>
              ))}
              <p className="mt-2 text-black dark:text-white text-2xl font-bold">
                Duration: {skill.duration}
              </p>
              <button className="bg-main w-44 mx-auto text-white py-2 px-4 rounded-md hover:bg-main/80 group-hover:scale-110 transition-all">
                learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Membership;
