import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <div className="bg-white p-4 md:p-8 md:mb-4">
      <h2 className="text-3xl sm:text-2xl font-bold mb-4">FEATURE</h2>
      <div className="flex flex-wrap md:flex-no-wrap">
        <div className="w-full md:w-1/2 lg:pr-4">
          <Link to="/Lewis">
            <div className="relative">
              <img
                alt=""
                className="w-full"
                height="400"
                src="https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2024%2F02%2F01130907%2FLewis-Hamilton-joins-Ferrari.jpg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
                loading="lazy"
              />
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center h-screen">
          <motion.div
            initial={{ x: -100, y: 0 }}
            animate={{ x: "75%", y: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <img
              src="https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/kick-sauber.png.transform/6col-retina/image.png"
              alt="F1 car"
              className="w-80 sm:w-96 h-auto object-cover"
              style={{ position: "relative" }}
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:mt-9">
          <Link to="/confirmedLineup">
            <div>
              <div className="relative mb-4">
                <img
                  alt="WATCH: Broken trophies, grand introductions and the Blue Man Group – the funniest moments from the 2023 season"
                  className="w-full"
                  height="180"
                  src="https://sportsbase.io/images/gpfans/copy_704x396/9b2ae72904f78cd110dbf6c8e2eb6be79f951dc4.jpg"
                  style={{
                    aspectRatio: "260/180",
                    objectFit: "cover",
                  }}
                  width="260"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold">
                2024 F1 Confirmed Teams Line-Up
              </h3>
            </div>
          </Link>
          <Link to="/RookiePoints">
            <div>
              <div className="relative mb-4">
                <img
                  alt=""
                  className="w-full"
                  height="180"
                  src="https://preview.redd.it/mclaren-top-of-his-rookie-class-earned-97-points-in-his-v0-kcvee6insp2c1.jpg?auto=webp&s=0cd59c262da8eeb7f6f16a4ebe75ea7b3ccf1513"
                  style={{
                    aspectRatio: "260/180",
                    objectFit: "cover",
                  }}
                  width="260"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold">Best F1 Rookie Season</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;
