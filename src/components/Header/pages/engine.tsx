import React from "react";

const Engine: React.FC = () => {
  return (
    <>
      <div className="relative border-b w-full">
        <img
          src="https://www.autohebdo.fr/app/uploads/2022/08/b_D8D7537-Large1.jpg"
          alt="Engine"
          className="h-96 w-full object-cover blur-0"
        />
      </div>

      <div className="mx-4 md:mx-8 lg:mx-20 xl:mx-32 my-5 max-w-5xl">
        <div className="mt-5">
          <h2 className="font-mono text-lg md:text-xl lg:text-2xl hover:text-red-500">
            What is in an F1 power unit?
          </h2>
          <p className="leading-5 tracking-wide text-base md:text-lg lg:text-xl mt-3 md:mt-5">
            First things first, a modern F1 engine is no longer called that,
            it’s called a ‘power unit’ – and that’s because it’s a hybrid. It
            consists of a petrol internal combustion engine and electric motors
            powered by an Energy Recovery System. (ERS). When introduced in
            2014, they were criticised for their lack of noise compared to the
            popular ear-rattling V8 and V10 monsters of the past, but these are
            some of the most powerful and efficient power units in Grand Prix
            history.
          </p>
        </div>
        <div className="mt-5">
          <h2 className="font-mono text-lg md:text-xl lg:text-2xl hover:text-red-500">
            How much horsepower does an F1 power unit produce?
          </h2>
          <p className="leading-5 tracking-wide text-base md:text-lg lg:text-xl mt-3 md:mt-5">
            The total power output from the combined petrol and electric
            elements is around 1,000bhp – significantly higher than a normal
            road car. The petrol engine runs at 15,000rpm – again, significantly
            more than a road car. This all means an F1 car can cover 0-60mph in
            around 2.6 seconds and top out at around 230mph, depending on the
            amount of drag it is running. When BAR (which via Honda and Brawn GP
            eventually became Mercedes) stripped its car of as much drag as
            possible, it hit 246.9mph on the Bonneville Salt Flats in 2006.
          </p>
        </div>
      </div>
    </>
  );
};
export default Engine;
