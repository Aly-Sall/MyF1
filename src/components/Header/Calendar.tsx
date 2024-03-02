const Calendar = () => {
  return (
    <div className="bg-[#1a1a1a] text-white w-[370px] h-[180px] rounded-lg overflow-hidden my-5 mx-5">
      <div className="bg-[#d50000] p-4 w-96">
        <h1 className="text-2xl font-bold">F1 CALENDAR 2023</h1>
      </div>
      <div className=" flex justify-between px-4 py-2">
        <div className="">
          <h2 className="font-bold">RACE</h2>
        </div>
        <div className="">
          <h2 className="font-bold">CIRCUIT</h2>
        </div>
      </div>
      <div className="px-4 py-10">
        <button className="w-full bg-[#e10600]">FULL CALENDAR</button>
      </div>
    </div>
  );
};

export default Calendar;
