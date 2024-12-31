import { useMemo } from "react";
import PieChart from "./PieChart";
import { macroNutrients } from "../../utils/constants";
import { toOneFloatPoint } from "../../utils/format";

const NutritionSummary = ({ data }) => {
  // Resolve the color of each macro nutrient
  const resolveColor = useMemo(() => {
    const colors = {
      carbs: "bg-orange-400",
      protein: "bg-cyan-500",
      fat: "bg-red-500",
    };

    return (nutrient) => colors[nutrient];
  }, []);

  return (
    <div>
      <PieChart data={data} />

      {/* Macro nutrients group */}
      <div className='mt-7 mx-auto max-w-48'>
        <span className='text-right block mb-2 font-semibold text-lg'>Total</span>

        {macroNutrients.map((nutrient) =>
          nutrient === "calories" ? (
            <div key={nutrient} className='flex justify-between mt-1'>
              <span className='capitalize font-semibold relative text-lg'>{nutrient}</span>
              <span className='text-lg'>{toOneFloatPoint(data[nutrient])}kCal</span>
            </div>
          ) : (
            <div key={nutrient} className='flex justify-between mt-1'>
              <span className='capitalize font-semibold relative text-lg'>
                {nutrient}
                <span
                  className={`absolute -left-7 -translate-y-1/2 top-1/2 w-2 h-2 rounded-sm ${resolveColor(
                    nutrient
                  )}`}
                ></span>
              </span>
              <span className='text-lg'>{toOneFloatPoint(data[nutrient])}g</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default NutritionSummary;
