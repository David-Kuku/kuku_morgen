import React from 'react';
import colors from '../../../utils/colors';

type BarChartData = {
  date: string;
  value: number;
};

const BarChart: React.FC<{ data: BarChartData[] }> = ({ data }) => {
  const max = 100000; 
  const yAxisValues = [20000, 40000, 60000, 80000, 100000]; 

  const calcBarHeight = (value: number): number => {
    return (value / max) * 100
  };

  return (
    <div className="flex w-full">
      <div className="flex flex-col-reverse justify-between">
        {yAxisValues.map((value) => (
          <div key={value} className="w-10" style={{color: colors.Black_10}}>
            {value/1000}k
          </div>
        ))}
      </div>
      <div className="flex ml-[30px] sl:ml-[60px] h-[280px] justify-between w-full">
        {data.map((item, index) => (
          <div key={item.value} className="w-[35px] flex relative rounded-t-xl">
            <div
              className="h-20 bg-gray-300 absolute bottom-0 rounded-xl left-[35%] w-[40%]"
              style={{
                height: `100%`,
                backgroundImage: `linear-gradient(to top, ${colors.primary} ${calcBarHeight(
                  item.value
                )}%, #EEF0FA ${calcBarHeight(item.value)}%)`,
              }}
            />
            <div className="absolute bottom-[-40px] w-full text-[12px] mt-1" style={{color: colors.Black_10}}>{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart