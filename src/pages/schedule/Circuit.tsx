import React from "react";
import { useParams } from "react-router-dom";
import scheduleItem from "../../data/schedule.json";

interface Circuit {
  round?: string;
  date?: string;
  dateremaign?: string;
  month?: string;
  year?: string;
  circuitFlag?: string;
  circuit?: string;
  circuitName?: string;
  circuitPic?: string;
  description?: string;
  pic?: string;
  background?: string;
  dateGP?: number;
  numLaps?: string;
  circuitLength?: string;
  raceDist?: string;
  lapRecord?: string;
  heldBy?: string;
}

const Circuit: React.FC = () => {
  const { circuit } = useParams<{ circuit: string }>();
  const selectedCircuit: Circuit | undefined = scheduleItem.find(
    (c) => c.circuit === circuit
  );

  if (!selectedCircuit) {
    return <div>Circuit not found</div>;
  }

  return (
    <>
      <div className="relative border-b w-full">
        <img
          src={selectedCircuit.background}
          alt=""
          className="h-auto max-h-96 mx-auto w-full object-cover blur-0"
        />
        <div className="absolute inset-0 flex items-center justify-center text-3xl text-top flex-col text-white">
          <h1 className="text-6xl mb-4">{selectedCircuit.circuit}</h1>
          <img
            src={selectedCircuit.year}
            alt=""
            height={110}
            width={110}
            className="bg-black"
          />
        </div>
      </div>

      <div>
        <h2 className="mx-20 my-10 font-mono text-black text-xl">
          {selectedCircuit.description}
        </h2>
      </div>

      <div className="mx-20">
        <div className="flex flex-col md:flex-row md:items-start">
          <img
            src={selectedCircuit.circuitFlag}
            alt=""
            width={50}
            height={50}
            className="mr-4"
          />
          <h1 className="text-black font-bold text-2xl">
            {selectedCircuit.circuitName}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row">
          <img
            src={selectedCircuit.circuitPic}
            alt=""
            className="rounded-lg my-5 md:mr-10 md:my-0"
            height={750}
            width={750}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="border-b-4 border-r-4 block rounded-sm p-3 md:text-center">
              <span className="">Number of laps</span>
              <p className="text-3xl font-bold">{selectedCircuit.numLaps}</p>
            </div>

            <div className="border-b-4 border-r-4 block rounded-sm p-3 md:text-center">
              <span className="">Circuit Length</span>
              <p className="text-3xl font-bold">
                {selectedCircuit.circuitLength}
              </p>
            </div>
            <div className="border-b-4 border-r-4 block rounded-sm p-3 md:text-center">
              <span className="">Race Distance</span>
              <p className="text-3xl font-bold">{selectedCircuit.raceDist}</p>
            </div>
            <div className="border-b-4 border-r-4 block rounded-sm p-3 md:text-center">
              <span className="">Lap Record</span>
              <p className="text-3xl font-bold">{selectedCircuit.lapRecord}</p>
            </div>
            <div className="border-b-4 border-r-4 block rounded-sm p-3 md:text-center">
              <span className="">Held By</span>
              <p className="text-3xl font-bold">{selectedCircuit.heldBy}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Circuit;
