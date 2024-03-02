import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-3 mt-36">
        {/* Content here */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span className="col-span-3 sm:col-auto">© 2024 myF1.</span>
        <span className="col-span-3 sm:col-auto">Built by Sall Aly.</span>
        <div className="col-span-3 sm:col-auto">
          <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-50 hover:bg-teal-500 duration-300">
            <SocialIcon
              url="https://twitter.com/puulohh"
              fgColor="white"
              bgColor="transparent"
            />
          </span>
          <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-50 hover:bg-teal-500 duration-300">
            <SocialIcon
              url="https://github.com/Aly-Sall"
              fgColor="white"
              bgColor="transparent"
            />
          </span>
          <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-50 hover:bg-teal-500 duration-300">
            <SocialIcon
              url="https://www.linkedin.com/in/aly-sall-658332283/"
              fgColor="white"
              bgColor="transparent"
            />
          </span>
          <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-50 hover:bg-teal-500 duration-300">
            <a href="mailto:votre@email.com" className="flex items-center">
              <SocialIcon
                url="mailto:votre@email.com"
                fgColor="white"
                bgColor="transparent"
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
