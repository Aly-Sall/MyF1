import { ArrowUp } from "react-feather";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const BestOf2023 = () => {
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
    <div className="overflow-visible">
      <div className="snap-start">
        <img
          src="https://pbs.twimg.com/media/GFmJMV9WMAAu5rQ?format=jpg&name=4096x4096"
          alt=""
          className="w-full h-full object-cover sm:h-screen"
        />
      </div>
      <div className="snap-start">
        <img
          src="https://pbs.twimg.com/media/GFvUCaNWcAA3zBh?format=jpg&name=4096x4096"
          alt=""
          className="w-full h-full object-cover sm:h-screen"
        />
      </div>
      <div className="snap-start bg-cyan-200 w-full h-full flex items-center justify-center text-8xl">
        <img
          src="https://pbs.twimg.com/media/GF4CoYXWAAAfHj7?format=jpg&name=4096x4096"
          alt=""
          className="w-full h-full object-cover sm:h-screen"
        />
      </div>
      <div className="snap-start bg-fuchsia-200 w-full h-full flex items-center justify-center text-8xl">
        <img
          src="https://pbs.twimg.com/media/GGSjE5LWoAAAMcN?format=jpg&name=4096x4096"
          alt=""
          className="w-full h-full object-cover sm:h-screen"
        />
      </div>
      <div className="snap-start bg-fuchsia-200 w-full h-full flex items-center justify-center text-8xl">
        <img
          src="https://pbs.twimg.com/media/GGNlUK_XUAAc39l?format=jpg&name=4096x4096"
          alt=""
          className="w-full h-full object-cover sm:h-screen"
        />
      </div>
      <div className="snap-start bg-fuchsia-200 w-full h-full flex items-center justify-center text-8xl">
        <img
          src="https://pbs.twimg.com/media/GGH0NpQa4AE252h?format=jpg&name=4096x4096"
          alt=""
          className="w-full h-full object-cover sm:h-screen"
        />
      </div>
      <div className="snap-start bg-fuchsia-200 w-full h-full flex items-center justify-center text-8xl">
        <img
          src="https://pbs.twimg.com/media/GGZyw6gWEAArY5J?format=jpg&name=4096x4096"
          alt=""
          className="w-full h-full object-cover sm:h-screen"
        />
      </div>
      <div className="snap-start bg-fuchsia-200 w-full h-full flex items-center justify-center text-8xl">
        <img
          src="https://www.topgear.com/sites/default/files/2024/01/2-McLaren-MCL38-2024-F1-livery.jpg"
          alt=""
          className="w-full h-full object-cover sm:h-screen"
        />
      </div>
      <div className="snap-start bg-fuchsia-200 w-full h-full flex items-center justify-center text-8xl">
        <img
          src="https://pbs.twimg.com/media/GFlLFvsakAEfy9Q?format=jpg&name=4096x4096"
          alt=""
          className="w-full h-full object-cover sm:h-screen"
        />
      </div>
      <div className="snap-start bg-fuchsia-200 w-full h-full flex items-center justify-center text-8xl">
        <img
          src="https://pbs.twimg.com/media/GFVjytfWMAAPUMp?format=jpg&name=4096x4096"
          alt=""
          className="w-full h-full object-cover sm:h-screen"
        />
      </div>

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

export default BestOf2023;
