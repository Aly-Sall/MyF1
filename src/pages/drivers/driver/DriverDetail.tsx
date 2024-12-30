import React from "react";
import { useParams, Link } from "react-router-dom";
import driversData from "../../../data/drivers.json";

interface Driver {
  driverId?: string;
  permanentNumber: string;
  code: string;
  img: string;
  givenName: string;
  familyName: string;
  nationality?: string;
  flag: string;
  team?: string;
  grandsPrixEntered?: number;
  worldChampionships?: string;
  highestRaceFinish?: string;
  highestGridPosition?: number;
  dateOfBirth?: string;
  placeOfBirth?: string;
  helmet?: string;
  img2?: string;
  team_logo?: string;
}

const DriverDetail: React.FC = () => {
  const { familyName } = useParams<{ familyName: string }>();
  const driver: Driver | undefined = driversData?.find(
    (d) => d.familyName === familyName
  );

  if (!DriverDetail) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="text-2xl font-bold text-red-600">Pilote non trouvé</h2>
        <Link to="/drivers" className="text-blue-500 hover:underline mt-4">
          Retour à la liste des pilotes
        </Link>
      </div>
    );
  }

  return (
    <div className="lg:flex p-8">
      <div className="lg:w-1/2">
        <img
          src={driver?.img2 || "/placeholder-driver.jpg"}
          alt={`${driver?.givenName} ${driver?.familyName}`}
          className="w-full h-auto mb-9"
        />
        <div className="flex items-center ml-4 space-x-4">
          <img
            src={driver?.permanentNumber || "/placeholder-number.png"}
            alt="Permanent Number"
            height={60}
            width={60}
          />
          <img
            src={driver?.flag || "/placeholder-flag.png"}
            alt={`${driver?.nationality} Flag`}
            height={60}
            width={60}
          />
        </div>
      </div>

      <div className="lg:w-1/2 lg:ml-8">
        <h2 className="text-3xl font-bold mb-4">{`${driver?.givenName} ${driver?.familyName}`}</h2>
        {driver?.helmet && (
          <img
            src={driver.helmet}
            alt={`${driver.givenName}'s Helmet`}
            className="w-40 h-40 mb-4"
          />
        )}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <tbody>
              {[
                ["Team", driver?.team],
                ["Country", driver?.nationality],
                ["Grands Prix entered", driver?.grandsPrixEntered],
                ["World Championships", driver?.worldChampionships],
                ["Highest race finish", driver?.highestRaceFinish],
                ["Highest grid position", driver?.highestGridPosition],
                ["Date of birth", driver?.dateOfBirth],
                ["Place of birth", driver?.placeOfBirth],
              ].map(
                ([label, value]) =>
                  value && (
                    <tr key={label}>
                      <th className="text-left p-2 font-semibold border border-gray-300">
                        {label}
                      </th>
                      <td className="p-2 border border-gray-300">{value}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DriverDetail;
