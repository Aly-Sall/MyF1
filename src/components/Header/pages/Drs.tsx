const Drs = () => {
  return (
    <>
      <div className="relative border-b w-full">
        <img
          src="https://cdn-1.motorsport.com/images/amp/6VRJBNV6/s1000/charles-leclerc-ferrari-f1-75-.jpg"
          alt="Tires ferrari"
          className="h-96 w-full object-cover blur-0"
        />
      </div>
      <div className="mx-4 md:mx-8 lg:mx-20 xl:mx-32">
        <div>
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl my-4">
            The Origins of DRS
          </h2>
          <p className="text-base md:text-lg lg:text-xl">
            The concept of the Drag Reduction System (DRS) was introduced in
            Formula 1 in 2011 to improve overtaking opportunities and make races
            more exciting. With the increasing aerodynamic advancements of F1
            cars, it became progressively challenging for drivers to overtake
            their opponents. Therefore, the FIA introduced DRS as a tactical
            tool to level the playing field.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl my-4">
            How DRS Works
          </h2>
          <p className="text-base md:text-lg lg:text-xl">
            The Drag Reduction System is a movable rear wing mechanism
            incorporated into the design of Formula 1 cars. It is typically
            located on the rear wing of the car and aims to reduce drag and
            increase speed on straightaways. DRS is not available throughout the
            entire race; its use is regulated in specific areas of the track and
            is only permitted under certain conditions.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl my-4">
            Activation of DRS
          </h2>
          <p className="text-base md:text-lg lg:text-xl">
            To activate DRS, a pursuing driver must be within one second of the
            car ahead when crossing a designated "DRS detection point" on the
            track. This point is strategically placed before the DRS activation
            zone. When the pursuing driver meets this condition, the flap on the
            rear wing of their car opens, reducing aerodynamic drag and
            providing them with a significant speed advantage.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl my-4">
            Mastering Overtaking with DRS
          </h2>
          <p className="text-base md:text-lg lg:text-xl">
            While the DRS system offers a valuable advantage to the pursuing
            driver, mastering the art of overtaking with the DRS system requires
            skill and strategy. Deploying DRS too early can result in a failed
            overtaking attempt, while waiting too long can give the opposing
            driver an opportunity to effectively defend their position.
            Therefore, the DRS system adds an additional layer of excitement,
            strategy, and thrilling moments to Formula 1 races.
          </p>
        </div>
        <div className="border-b border-grey-600 my-3">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl my-4">
            DRS and Its Impact on Races
          </h2>
          <p className="text-base md:text-lg lg:text-xl">
            Since its introduction, the DRS system has had a profound impact on
            the dynamics of Formula 1 races. It has led to an increase in
            overtaking maneuvers, heightened battles on the track, and increased
            engagement from spectators. Fans around the world eagerly anticipate
            the activation of DRS zones, as it often leads to suspenseful
            moments and drama in the final laps that can decide the outcome of a
            race.
          </p>
        </div>
      </div>
    </>
  );
};

export default Drs;
