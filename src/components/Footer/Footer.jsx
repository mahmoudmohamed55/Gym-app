import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { Navlinks } from "../navbar/Links";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();

  return (
    <div data-aos = "zoom-in" className="footer py-10 bg-gray-200 dark:bg-black/40">
      <div className="container ">
        <div className="w-full flex flex-col items-center sm:flex-row gap-5 xl:gap-0 justify-around">
          <img src={logo} alt="" className="w-16 sm:w-24" />
          <div className="icons flex items-center gap-5 cursor-pointer">
            <FaInstagram className="text-3xl text-black hover:text-main dark:text-white" />
            <FaFacebook className="text-3xl text-black hover:text-main dark:text-white" />
            <FaWhatsapp className="text-3xl text-black hover:text-main dark:text-white" />
          </div>
          <p className="text-black dark:text-white text-xl">
            Contact Us: +91 123456789
          </p>
          <ul className="flex items-center gap-3">
            {Navlinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  key={link.id}
                  className="text-black font-bold text-[14px] md:text-lg dark:text-white hover:text-main "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a href="https://github.com/mahmoudmohamed55" target="_blank" className="text-center mt-5 w-full">Copyright &copy; {year} By <span className="text-main text-2xl"> Mahmoud Mohamed</span></a>
      </div>
    </div>
  );
}

export default Footer;
