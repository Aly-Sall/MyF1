// DriverDetail.tsx

import React from "react";
import { useParams } from "react-router-dom";
import driversData from "../../../data/drivers.json";

interface Driver {
  driverId?: string;
  permanentNumber: string;
  code: string;
  img: string;
  givenName: string;
  familyName: string;
  nationality: string;
  flag: string;
  team: string;
  grandsPrixEntered?: number;
  worldChampionships?: string;
  highestRaceFinish?: string;
  highestGridPosition?: number;
  dateOfBirth?: string;
  placeOfBirth?: string;
  helmet?: string;
  img2?: string;
}

const DriverDetail: React.FC = () => {
  const { familyName } = useParams<{ familyName: string }>();
  const driver: Driver | undefined = driversData.find(
    (d) => d.familyName === familyName
  );

  if (!driver) {
    return <div>Pilote non trouvé</div>;
  }

  return (
    <div className=" lg:flex p-8 ">
      <div className="lg:w-1/2">
        <img
          src={driver.img2 || "/placeholder-image.jpg"}
          alt="Driver Image"
          className="w-719 h-720 mb-9"
        />

        <div className="flex ml-4">
          <img src={driver.permanentNumber} alt="" height={60} width={60} />
          <img src={driver.flag} alt="" height={60} width={60} />
        </div>
      </div>

      <div className="lg:w-1/2 lg:ml-8">
        <h2 className="text-3xl font-bold mb-4">
          <img src={driver.helmet} alt="" height={200} width={200} />
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full ">
            <tbody>
              <tr>
                <td className="text-xl font-bold text-center align-middle ">
                  Team
                </td>
                <td className="align-middle">{driver.team}</td>
              </tr>
              <tr>
                <th className="text-xl font-bold text-center align-middle">
                  Country
                </th>
                <td className="align-middle">{driver.nationality}</td>
              </tr>
              <tr>
                <th className="text-xl font-bold">Grands Prix entered</th>
                <td>{driver.grandsPrixEntered}</td>
              </tr>
              <tr>
                <th className="text-xl font-bold">World Championships</th>
                <td>{driver.worldChampionships}</td>
              </tr>
              <tr>
                <th className="text-xl font-bold">Highest race finish</th>
                <td>{driver.highestRaceFinish}</td>
              </tr>
              <tr>
                <th className="text-xl font-bold">Highest grid position</th>
                <td>{driver.highestGridPosition}</td>
              </tr>
              <tr>
                <th className="text-xl font-bold">Date of birth</th>
                <td>{driver.dateOfBirth}</td>
              </tr>
              <tr>
                <th className="text-xl font-bold">Place of birth</th>
                <td>{driver.placeOfBirth}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DriverDetail;
