interface ScheduleProps {
    dayWeek: string;
    date: string;
    hour: string;
    label: string;
  }
  
  export function Schedule({ dayWeek, date, hour, label }: ScheduleProps) {
    return (
      <li className=" pb-5 border-b border-gray-500">
        <div className="flex justify-between">
          <div className="">
            <p className="text-gray-100 font-bold text-2xl leading-[34px]">
              {dayWeek}
            </p>
            <span className="text-gray-300 leading-[26px] font-medium">
              {date}
            </span>
          </div>
          <div className="w-[375px] flex items-center ali gap-6 bg-gray-500 rounded-[5px] p-4 border-2 border-transparent hover:border-green-300 transition-colors">
            <p className="bg-green-400 text-black font-medium py-[6px] px-4 leading-5 rounded-[5px]">
              {hour}
            </p>
            <p className="font-medium">{label}</p>
          </div>
        </div>
      </li>
    );
  }
  