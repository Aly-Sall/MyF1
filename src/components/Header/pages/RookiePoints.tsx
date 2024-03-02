const RookiePoints = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl text-center text-black my-6">
        ROOKIE POINTS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="p-3 flex justify-between bg-orange-500 text-white my-1">
          <div className="flex flex-row">
            <img
              src="https://media.formula1.com/content/dam/fom-website/teams/2023/mclaren-logo.png.transform/2col-retina/image.png"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2007</h3>
            <h2 className="my-2">HAMILTON</h2>
          </div>
          <p className="mt-2">109</p>
        </div>
        <div className="p-3 flex justify-between bg-orange-500 my-1">
          <div className="flex flex-row">
            <img
              src="https://media.formula1.com/content/dam/fom-website/teams/2023/mclaren-logo.png.transform/2col-retina/image.png"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2023</h3>
            <h2 className="my-2">PIASTRI</h2>
          </div>
          <p className="mt-2">97</p>
        </div>
        <div className="p-3 flex justify-between bg-blue-600 my-1">
          <div className="flex flex-row">
            <img
              src="https://media.formula1.com/content/dam/fom-website/teams/2023/red-bull-racing-logo.png.transform/2col-retina/image.png"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2019</h3>
            <h2 className="my-2">ALBON</h2>
          </div>
          <p className="mt-2">92</p>
        </div>
        <div className="p-3 flex justify-between bg-black my-1 text-white">
          <div className="flex flex-row">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo12dWGNCBx7sm4lIX9mvYgPhFZq83cQrvYA&usqp=CAU"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2017</h3>
            <h2 className="my-2">OCON</h2>
          </div>
          <p className="mt-2">92</p>
        </div>
        <div className="p-3 flex justify-between bg-orange-500 text-white my-1">
          <div className="flex flex-row">
            <img
              src="https://media.formula1.com/content/dam/fom-website/teams/2023/mclaren-logo.png.transform/2col-retina/image.png"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2014</h3>
            <h2 className="my-2">MAGNUSSEN</h2>
          </div>
          <p className="mt-2">55</p>
        </div>
        <div className="p-3 flex justify-between bg-orange-500 text-white my-1">
          <div className="flex flex-row">
            <img
              src="https://media.formula1.com/content/dam/fom-website/teams/2023/mclaren-logo.png.transform/2col-retina/image.png"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2019</h3>
            <h2 className="my-2">NORRIS</h2>
          </div>
          <p className="mt-2">49</p>
        </div>
        <div className="p-3 flex justify-between bg-blue-600 my-1">
          <div className="flex flex-row">
            <img
              src="https://media.formula1.com/content/dam/fom-website/teams/2023/red-bull-racing-logo.png.transform/2col-retina/image.png"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2015</h3>
            <h2 className="my-2">VERSTAPPEN</h2>
          </div>
          <p className="mt-2">49</p>
        </div>
        <div className="p-4 flex justify-between bg-blue-400 my-1">
          <div className="flex flex-row">
            <img
              src="https://media.formula1.com/content/dam/fom-website/teams/2023/williams-logo.png.transform/2col-retina/image.png"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2017</h3>
            <h2 className="my-2">STROLL</h2>
          </div>
          <p className="mt-2">40</p>
        </div>
        <div className="p-3 flex justify-between bg-blue-400 my-1 text-white">
          <div className="flex flex-row">
            <img
              src="data:image/png;base64,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"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2018</h3>
            <h2 className="my-2">LECLERC</h2>
          </div>
          <p className="mt-2">39</p>
        </div>
        <div className="p-3 flex justify-between bg-black my-1 text-white">
          <div className="flex flex-row">
            <img
              src="https://media.formula1.com/content/dam/fom-website/teams/2023/alphatauri-logo.png.transform/2col-retina/image.png"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2021</h3>
            <h2 className="my-2">TSUNODA</h2>
          </div>
          <p className="mt-2">32</p>
        </div>
        <div className="p-3 flex justify-between my-1 text-white bg-blue-600">
          <div className="flex flex-row">
            <img
              src="https://upload.wikimedia.org/wikipedia/fr/2/21/Logo_Toro_Rosso.JPG?20180213095942"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2018</h3>
            <h2 className="my-2">GASLY</h2>
          </div>
          <p className="mt-2">29</p>
        </div>
        <div className="p-3 flex justify-between bg-blue-400 my-1">
          <div className="flex flex-row">
            <img
              src="https://media.formula1.com/content/dam/fom-website/teams/2023/williams-logo.png.transform/2col-retina/image.png"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2010</h3>
            <h2 className="my-2">HULKENBERG</h2>
          </div>
          <p className="mt-2 ml-2">22</p>
        </div>
        <div className="p-3 flex justify-between my-1 text-white bg-blue-600">
          <div className="flex flex-row">
            <img
              src="https://upload.wikimedia.org/wikipedia/fr/2/21/Logo_Toro_Rosso.JPG?20180213095942"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2015</h3>
            <h2 className="my-2">SAINZ</h2>
          </div>
          <p className="mt-2">18</p>
        </div>
        <div className="p-3 flex justify-between my-1 text-white bg-red-600">
          <div className="flex flex-row">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Logo_Sauber_F1.png"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2011</h3>
            <h2 className="my-2">PEREZ</h2>
          </div>
          <p className="mt-2">14</p>
        </div>
        <div className="p-3 flex justify-between my-1 text-white bg-blue-600">
          <div className="flex flex-row">
            <img
              src="https://upload.wikimedia.org/wikipedia/fr/2/21/Logo_Toro_Rosso.JPG?20180213095942"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2012</h3>
            <h2 className="my-2">RICCIARDO</h2>
          </div>
          <p className="mt-2">10</p>
        </div>
        <div className="p-3 flex justify-between bg-blue-400 my-1 text-white">
          <div className="flex flex-row">
            <img
              src="data:image/png;base64,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"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2022</h3>
            <h2 className="my-2">ZHOU</h2>
          </div>
          <p className="mt-2">6</p>
        </div>
        <div className="p-3 flex justify-between bg-blue-400 my-1">
          <div className="flex flex-row">
            <img
              src="https://media.formula1.com/content/dam/fom-website/teams/2023/williams-logo.png.transform/2col-retina/image.png"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2013</h3>
            <h2 className="my-2">BOTTAS</h2>
          </div>
          <p className="mt-2">4</p>
        </div>
        <div className="p-3 flex justify-between bg-blue-400 my-1">
          <div className="flex flex-row">
            <img
              src="https://media.formula1.com/content/dam/fom-website/teams/2023/williams-logo.png.transform/2col-retina/image.png"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2023</h3>
            <h2 className="my-2">SARGEANT</h2>
          </div>
          <p className="mt-2">1</p>
        </div>
        <div className="p-3 flex justify-between bg-blue-400 my-1">
          <div className="flex flex-row">
            <img
              src="https://media.formula1.com/content/dam/fom-website/teams/2023/williams-logo.png.transform/2col-retina/image.png"
              alt=""
              height={40}
              width={40}
              className="object-cover"
            />
            <h3 className="mx-2 my-2">2019</h3>
            <h2 className="my-2">RUSSELL</h2>
          </div>
          <p className="mt-2">0</p>
        </div>
      </div>
    </div>
  );
};

export default RookiePoints;
