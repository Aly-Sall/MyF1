import React from "react";
import { useParams } from "react-router-dom";
import TeamData from "../../data/teams.json";

interface Team {
  driver1: string;
  driver1_number?: number;
  driver1_pic: string;
  driver1_pic1?: string;
  driver2: string;
  driver2_number?: number;
  driver2_pic: string;
  driver2_pic2?: string;
  team: string;
  team_pic: string;
  team_logo: string;
  full_logo?: string;
  fullTeamName?: string;
  Base?: string;
  TeamChief?: string;
  TechnicalChief?: string;
  Chassis?: string;
  PowerUnit?: string;
  FirstTeamEntry?: number;
  WorldChampionships?: string;
  HighestRaceFinish?: string;
  PolePositions?: number;
  FastestLaps?: number;
}

const TeamDetail: React.FC = () => {
  const { team } = useParams<{ team: string }>();
  const teamData: Team | undefined = TeamData.find((d) => d.team === team);

  if (!teamData) {
    return <div>Équipe non trouvée</div>;
  }

  return (
    <div className="bg-neutral-200">
      <h1 className="text-3xl p-6 ml-4">{teamData.team}</h1>
      <header className="bg-slate-50 p-10 mx-10 my-11">
        <div className="flex justify-center mb-3"></div>
        <section className="overflow-x-auto flex flex-col lg:flex-row justify-between">
          <table className="mb-10 lg:mr-10">
            <tbody>
              <tr>
                <td>
                  <img
                    src={teamData.full_logo}
                    alt=""
                    height={300}
                    width={300}
                  />
                </td>
              </tr>
              <tr>
                <td className="text-xl m-4">Full Team Name</td>
                <td className="text-xl m-4">{teamData.fullTeamName}</td>
              </tr>
              <tr>
                <td className="text-xl">Base</td>
                <td className="text-xl align-middle">{teamData.Base}</td>
              </tr>
              <tr>
                <td className="text-xl">Team Chief</td>
                <td className="text-xl align-middle">{teamData.TeamChief}</td>
              </tr>
              <tr>
                <td className="text-xl">Technical Chief</td>
                <td className="text-xl">{teamData.TechnicalChief}</td>
              </tr>
              <tr>
                <td className="text-xl">Chassis</td>
                <td className="text-xl">{teamData.Chassis}</td>
              </tr>
              <tr>
                <td className="text-xl">Power Unit</td>
                <td className="text-xl">{teamData.PowerUnit}</td>
              </tr>
              <tr>
                <td className="text-xl">First Team Entry</td>
                <td className="text-xl">{teamData.FirstTeamEntry}</td>
              </tr>
              <tr>
                <td className="text-xl">World Championships</td>
                <td className="text-xl">{teamData.WorldChampionships}</td>
              </tr>
              <tr>
                <td className="text-xl">Highest Race Finish</td>
                <td className="text-xl">{teamData.HighestRaceFinish}</td>
              </tr>
              <tr>
                <td className="text-xl">Pole Positions</td>
                <td className="text-xl">{teamData.PolePositions}</td>
              </tr>
              <tr>
                <td className="text-xl">Fastest Laps</td>
                <td className="text-xl">{teamData.PolePositions}</td>
              </tr>
            </tbody>
          </table>
          <section className="lg:w-1/2">
            <ul className="flex flex-col lg:flex-row justify-around items-start">
              <li className="mb-5 lg:mr-5 border-x-2 border-x-slate-200 hover:bg-black hover:text-white transition-all duration-300 ease-in-out hover:scale-110">
                <img
                  src={teamData.driver1_pic1}
                  alt=""
                  className="w-719 h-720 hover:bg-black hover:text-white block hover:scale-y-100 z-10"
                />
                <div>
                  <div className="px-6 pt-6">
                    <span className="font-bold text-3xl">
                      {teamData.driver1_number}
                    </span>
                  </div>
                  <h1 className="px-6">{teamData.driver1}</h1>
                  <p className="px-6">{teamData.team}</p>
                </div>
              </li>
              <li className="mb-5 lg:mr-5 border-x-2 border-x-slate-200 hover:bg-black hover:text-white transition-all duration-300 ease-in-out hover:scale-110">
                <img
                  src={teamData.driver2_pic2}
                  alt=""
                  className="w-719 h-720 hover:bg-black hover:text-white block hover:scale-y-100 z-10"
                />
                <div>
                  <div className="px-6 pt-6">
                    <span className="font-bold text-3xl">
                      {teamData.driver2_number}
                    </span>
                  </div>
                  <h1 className="px-6">{teamData.driver2}</h1>
                  <p className="px-6">{teamData.team}</p>
                </div>
              </li>
            </ul>
          </section>
        </section>
      </header>
    </div>
  );
};

export default TeamDetail;
