import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "react-feather";
import teams from "../../data/teams.json";
import { Link } from "react-router-dom";

const Teams = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-4 md:pl-10 md:pr-10">
      <h2 className="text-4xl md:text-6xl py-4 text-center text-black font-bold border-t-4 border-r-4 border-x-slate-950 border-y-slate-950 m-5">
        F1 Teams 2024
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {teams &&
          teams.map((team, index) => (
            <div
              key={index}
              className="hover:border-blue-500 m-5 border-t-4 border-r-4 border-x-slate-950 border-y-slate-950"
            >
              <Link to={`/team/${team.team}`}>
                <div className="flex flex-col md:flex-row items-center justify-between py-3 border-t-2 border-b-2 my-2 mx-2 text-2xl font-serif">
                  <h3>{team.team}</h3>
                  <div className="md:ml-4">
                    <img
                      src={team.team_logo}
                      alt=""
                      height={50}
                      width={50}
                      className="mr-3"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start justify-around font-serif sm:flex-row lg:flex-row">
                  <div className="flex items-center mb-2 md:mb-0">
                    <h3 className="flex items-end mr-6 border-b-4 md:border-r-4">
                      <p className=" mb-2">{team.driver1}</p>
                      <img
                        src={team.driver1_pic}
                        alt=""
                        className="h-10 w-10 ml-2"
                      />
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <h3 className="flex items-center border-b-4 md:border-r-4">
                      <p className="mr-2">{team.driver2}</p>
                      <img
                        src={team.driver2_pic}
                        alt=""
                        className="h-10 w-10 ml-7"
                      />
                    </h3>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src={team.team_pic}
                    alt=""
                    className="bg-inherit"
                    height={480}
                    width={480}
                  />
                </div>
              </Link>
            </div>
          ))}
      </div>
      {/* Bouton de retour en haut avec Feather Icons */}
      <motion.button
        className={`fixed bottom-4 right-4 p-2 rounded-full bg-gray-800 text-white ${
          isVisible ? "block" : "hidden"
        } sm:bottom-8 sm:right-8 md:p-3 md:bottom-12 md:right-12 lg:p-4 lg:bottom-16 lg:right-16 xl:p-5 xl:bottom-20 xl:right-3`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </div>
  );
};

export default Teams;
