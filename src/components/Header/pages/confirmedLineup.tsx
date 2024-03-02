const ConfirmedLineup = () => {
  return (
    <>
      <h1 className="text-center text-3xl my-6">
        F1 2024 driver line-up: The completed grid
      </h1>
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          <table className="table-auto w-full lg:w-5/6 xl:w-4/5">
            <thead>
              <tr>
                <th className="px-4 py-2">Drivers</th>
                <th className="px-4 py-2">Team</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">
                  Valtteri Bottas
                  <br />
                  Zhou Guanyu
                </td>
                <td className="px-4 py-2">
                  <img
                    src="https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/kick-sauber.png.transform/6col-retina/image.png"
                    alt=""
                    height={380}
                    width={380}
                    className="w-96 h-auto object-cover"
                  />
                </td>
                <td className="px-4 py-2">Kick Sauber</td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  Daniel Ricciardo
                  <br />
                  Yuki Tsunoda
                </td>
                <td className="px-4 py-2">
                  <img
                    src="https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/rb.png.transform/6col-retina/image.png"
                    alt=""
                    height={380}
                    width={380}
                  />
                </td>
                <td className="px-4 py-2">RB</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="px-4 py-2">
                  Pierre Gasly
                  <br />
                  Esteban Ocon
                </td>
                <td className="px-4 py-2">
                  <img
                    src="https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/alpine.png.transform/6col-retina/image.png"
                    alt=""
                    height={380}
                    width={380}
                  />
                </td>
                <td className="px-4 py-2">Alpine</td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  Fernando Alonso
                  <br />
                  Lance Stroll
                </td>
                <td className="px-4 py-2">
                  <img
                    src="https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/aston-martin.png.transform/6col-retina/image.png"
                    alt=""
                    height={380}
                    width={380}
                  />
                </td>
                <td className="px-4 py-2">Aston Martin</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="px-4 py-2">
                  Charles Leclerc
                  <br />
                  Carlos Sainz
                </td>
                <td className="px-4 py-2">
                  <img
                    src="https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/ferrari.png.transform/6col-retina/image.png"
                    alt=""
                    height={380}
                    width={380}
                  />
                </td>
                <td className="px-4 py-2">Ferrari</td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  Nico Hulkenberg
                  <br />
                  Kevin Magnussen
                </td>
                <td className="px-4 py-2">
                  <img
                    src="https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/haas-f1-team.png.transform/6col-retina/image.png"
                    alt=""
                    height={380}
                    width={380}
                  />
                </td>
                <td className="px-4 py-2">Haas</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="px-4 py-2">
                  Lando Norris
                  <br />
                  Oscar Piastri
                </td>
                <td className="px-4 py-2">
                  <img
                    src="https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mclaren.png.transform/6col-retina/image.png"
                    alt=""
                    height={380}
                    width={380}
                  />
                </td>
                <td className="px-4 py-2">McLaren</td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  Lewis Hamilton
                  <br />
                  George Russell
                </td>
                <td className="px-4 py-2">
                  <img
                    src="https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/mercedes.png.transform/6col-retina/image.png"
                    alt=""
                    height={380}
                    width={380}
                  />
                </td>
                <td className="px-4 py-2">Mercedes</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="px-4 py-2">
                  Sergio Perez
                  <br />
                  Max Verstappen
                </td>
                <td className="px-4 py-2">
                  <img
                    src="https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/red-bull-racing.png.transform/6col-retina/image.png"
                    alt=""
                    height={380}
                    width={380}
                  />
                </td>
                <td className="px-4 py-2">Red Bull</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ConfirmedLineup;
