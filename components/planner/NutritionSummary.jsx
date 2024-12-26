import { useMemo } from 'react';
import PieChart from './PieChart';
import { macroNutrients } from '../../utils/constants';

const NutritionSummary = ({ meals }) => {
  // Calculate the total of each macro nutrient
  const handledMacros = useMemo(
    () =>
      meals.reduce((acc, meal) => {
        macroNutrients.forEach((nutrient) => {
          acc[nutrient] = (acc[nutrient] || 0) + meal?.nutrients[nutrient];
        });
        return acc;
      }, {}),
    [meals]
  );

  // Resolve the color of each macro nutrient
  const resolveColor = useMemo(() => {
    const colors = {
      carbs: 'bg-orange-400',
      protein: 'bg-cyan-500',
      fat: 'bg-red-500'
    };

    return (nutrient) => colors[nutrient];
  }, []);

  return (
    <div>
      <PieChart data={handledMacros} />

      {/* Macro nutrients group */}
      <div className='mt-7 mx-auto max-w-44'>
        <span className='text-right block mb-2 font-semibold text-lg'>
          Totals
        </span>

        {macroNutrients.map((nutrient) =>
          nutrient === 'calories' ? (
            <div key={nutrient} className='flex justify-between mt-1'>
              <span className='capitalize font-semibold relative text-lg'>
                {nutrient}
              </span>
              <span className='text-lg'>{handledMacros[nutrient]}</span>
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
              <span className='text-lg'>{handledMacros[nutrient]}g</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default NutritionSummary;
