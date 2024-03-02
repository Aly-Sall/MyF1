const Tires = () => {
  return (
    <>
      <div className="relative border-b w-full">
        <img
          src="https://cdn.pixabay.com/photo/2021/11/05/09/11/formula-1-6770795_1280.jpg"
          alt="Tires ferrari"
          className="h-auto max-h-96 mx-auto w-full object-cover blur-0"
        />

        <div className="absolute inset-0 flex items-center justify-center text-3xl text-top flex-col text-white">
          <img
            src="https://d3nv2arudvw7ln.cloudfront.net/images/global/900/131/hero-tyresgroup-4505508874689.png"
            alt=""
            height={100}
            width={400}
            className="block mt-80 w-1/3"
          />
        </div>
      </div>
      <div className="text-center mt-8 sm:mt-24 mx-4 sm:mx-12 lg:mx-72">
        <div className="text-center block tracking-wide leading-snug mb-4 sm:mb-10">
          {/* Content */}
          The 18-inch tires were designed from the ground-up, with every element
          of the tire drawn from a clean sheet of paper: from the profile to the
          structure, to the compounds. The design process took in more than
          10,000 hours of indoor testing, more than 5,000 hours of simulation,
          and more than 70 prototypes developed virtually, to eventually create
          30 different specifications that were tested by nearly all the teams
          over more than 20,000 kilometers. The role of the drivers was crucial,
          with each of them contributing to the development at various points
          and helping Pirelli arrive at the definitive specifications thanks to
          their feedback. This year, the number of compounds that Pirelli can
          nominate throughout the championship has increased to six: making it
          possible to have tires that are even more perfectly suited to the
          specific characteristics of each track. A philosophy that is equally
          true for Pirelli’s road products, which benefit from technology
          directly transferred from Formula 1®.
        </div>
        <h2 className="mb-8 sm:mb-16">DISCOVER THE RANGE</h2>
        <h2 className="text-9xl text-slate-200 mb-8 sm:mb-14">SLICK TIRES</h2>
        <p className="mb-4 sm:mb-9">
          Since 2022, tires have a wider working range than their 13-inch
          predecessors, improving the warm-up phase, as a result, overheating is
          limited, and degradation is reduced. However, innovation never stops:
          in 2023, a new C1 compound has been created. Pirelli provides three
          different compounds of slick tire, as well as the intermediate and
          full-wet tire, for teams to utilize over a race weekend. There are six
          slick compounds within the range, numbered from zero to five from
          hardest to softest. These are known as C0 to C5, with the ‘C’ standing
          for ‘compound’.
        </p>
        <p>Sizes:</p>
        <p>Front: 305/720-18</p>
        <p>Rear: 405/720-18 </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-48 mt-4 sm:mt-10 mb-8 sm:mb-24">
          <img
            src="http://d3nv2arudvw7ln.cloudfront.net/staticfolder/Tyre/resources/img/red-parentesi.png"
            alt=""
            className="mx-auto"
          />
          <img
            src="http://d3nv2arudvw7ln.cloudfront.net/staticfolder/Tyre/resources/img/yellow-parentesi.png"
            alt=""
            className="mx-auto"
          />
          <img
            src="http://d3nv2arudvw7ln.cloudfront.net/staticfolder/Tyre/resources/img/white-parentesi.png"
            alt=""
            className="mx-auto"
          />
        </div>
        <h2 className="text-9xl text-slate-200 mb-8 sm:mb-14">WET TIRES</h2>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-around mb-8 sm:mb-32">
          <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
            <h2 className="text-5xl leading-tight font-bold mr-4 sm:mr-32 mt-4 sm:mt-32">
              CINTURATO <span className="text-green-500">GREEN</span>{" "}
              INTERMEDIATE{" "}
            </h2>
          </div>
          <img
            src="https://d3nv2arudvw7ln.cloudfront.net/images/global/380/862/cinturato-green-intermediate-4505508953587.png"
            alt=""
            className="mx-auto"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-around">
          <img
            src="https://d3nv2arudvw7ln.cloudfront.net/images/global/968/233/cinturato-blue-wet-4505508953865.png"
            alt=""
            className="mx-auto"
          />
          <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-32">
            <h2 className="text-5xl leading-snug font-bold ml-4 sm:ml-32 mt-4 sm:mt-0">
              CINTURATO <span className="text-blue-500">GREEN</span>{" "}
              INTERMEDIATE{" "}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tires;
