import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { mealTimes } from "../../utils/constants";
import { toOneFloatPoint } from "../../utils/format";

const MealList = ({ meals }) => {
  return (
    <ul className='flex flex-col gap-4'>
      {mealTimes.map((mealTime, index) => {
        // Group meals based on meal time
        const groupedMeals = meals.filter((meal) => meal.meal_time === mealTime);

        // Total calories for each meal time
        const calories = groupedMeals.reduce((acc, curr) => acc + curr.meal_nutrition.calories, 0);

        return (
          <li className='bg-gray-100 rounded-lg pt-5 pb-3 flex flex-col' key={mealTime}>
            {/* Meal time header */}
            <div className='flex justify-between items-center px-8 mb-1'>
              <div>
                <h3 className='font-semibold capitalize'>{mealTime}</h3>
                <span className='font-normal text-sm'>{toOneFloatPoint(calories)} Calories</span>
              </div>

              <FontAwesomeIcon icon={faShuffle} className='text-slate-500 cursor-pointer' />
            </div>

            {/* Render meals in each meal time */}
            {groupedMeals.map((meal) => (
              <div
                key={meal.name}
                className='flex gap-6 hover:bg-gray-200 px-8 py-3 cursor-pointer transition-colors'
              >
                <img
                  src={`/images/${meal.id}.jpg`}
                  alt={meal.name}
                  className='rounded-md w-36 h-24 object-cover'
                />
                <div>
                  <p className='font-semibold line-clamp-1 max-w-64'>{meal.name}</p>
                  <span className='text-sm'>{meal.meal_qty} serving</span>
                </div>
              </div>
            ))}
          </li>
        );
      })}
    </ul>
  );
};

export default MealList;
