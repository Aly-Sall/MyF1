import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUp } from "react-feather";
import scheduleData from "../../data/schedule.json";

const Schedule = () => {
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
    <div className="p-4 md:pl-10 md:pr-10 my-4">
      <h2 className="text-4xl md:text-6xl py-4 text-center text-black font-bold border-t-4 border-r-4 border-x-slate-950 border-y-slate-950 m-5">
        F1 Schedule 2024
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-4 ">
        {scheduleData.map((scheduleItem) => (
          <Link
            to={`/schedule/${scheduleItem.circuit}`}
            key={scheduleItem.circuit}
          >
            <motion.div
              className="grid grid-cols-1 bg-red-500 rounded-md"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="relative h-56">
                <img
                  src={scheduleItem.pic}
                  alt=""
                  className="rounded-md rounded-b-none w-full h-full object-cover"
                />
              </div>

              <div className="p-3">
                <h2 className="semi-bold">
                  {scheduleItem.date} {scheduleItem.month}
                </h2>
                <h2>{scheduleItem.description}</h2>
              </div>
            </motion.div>
          </Link>
        ))}
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

export default Schedule;
