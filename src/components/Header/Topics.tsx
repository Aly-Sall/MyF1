import { Link } from "react-router-dom";

const Topics = () => {
  return (
    <div className="bg-[#1a1a1a] p-4 md:p-8 mx-4 md:mx-16">
      <h2 className="text-white text-xl sm:text-2xl mb-4">Explore F1 topics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative bg-gray-800 rounded-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-lg">
          <Link to="/tires">
            <img
              alt="Tires"
              className="w-full h-auto"
              src="https://f1i.autojournal.fr/wp-content/uploads/sites/17/2018/07/diijlttxuaal4ju.jpg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">Tires</span>
            </div>
          </Link>
        </div>
        <div className="relative bg-gray-800 rounded-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-lg">
          <Link to="/engine">
            <img
              alt="Engine"
              className="w-full h-auto"
              src="https://www.autohebdo.fr/app/uploads/2022/08/b_D8D7537-Large1.jpg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">Engine</span>
            </div>
          </Link>
        </div>
        <div className="relative bg-gray-800 rounded-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-lg">
          <Link to="/Drs">
            <img
              alt="DRS"
              className="w-full h-auto"
              src="https://cdn-1.motorsport.com/images/amp/6VRJBNV6/s1000/charles-leclerc-ferrari-f1-75-.jpg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">DRS</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topics;
