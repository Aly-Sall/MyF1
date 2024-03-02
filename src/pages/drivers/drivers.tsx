import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ArrowUp } from "react-feather";
import driversData from "../../data/drivers.json";

const Drivers = () => {
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
        F1 Drivers 2024
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <AnimatePresence>
          {driversData.map((driver) => (
            <motion.div
              key={driver.familyName}
              className="m-5 border-t-4 border-r-4 border-x-slate-950 border-y-slate-950"
              whileTap={{ scale: 0.9 }} // Transition au clic
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Link to={`/driver/${driver.familyName}`}>
                <div className="flex flex-col items-center justify-between py-3 border-t-2 border-b-2 my-2 mx-2">
                  <h3>
                    {driver.givenName} {driver.familyName}
                  </h3>
                  <div>
                    <img
                      src={driver.flag}
                      alt=""
                      height={50}
                      width={50}
                      className="mr-3"
                    />
                  </div>
                </div>
                <p className="text-gray-500 text-center">{driver.team}</p>
                <div className="flex items-center justify-center">
                  <img
                    src={driver.permanentNumber}
                    alt=""
                    height={85}
                    width={85}
                  />
                  <img
                    className="object-contain h-48 w-96"
                    src={driver.img}
                    alt=""
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* Bouton de retour en haut */}
      <motion.button
        className={`fixed right-4 bottom-4 p-2 rounded-full bg-gray-800 text-white ${
          isVisible ? "block" : "hidden"
        }`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </div>
  );
};

export default Drivers;
