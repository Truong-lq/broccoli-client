import { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import usePlanStore from '../../stores/planStore';
import MealList from './MealList';
import NutritionSummary from './NutritionSummary';
import { meals } from '../../utils/constants';
import Loading from '../Loading';

const PlannerContent = ({ sizeClass }) => {
  const { plan, date, planLoading, setPlan, setPlanLoading } = usePlanStore(
    (state) => state
  );

  const totalCalories = useMemo(
    () => plan?.reduce((acc, curr) => acc + curr.nutrients.calories, 0),
    [plan]
  );

  const generatePlan = async () => {
    setPlanLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    setPlan(meals);

    setPlanLoading(false);
  };

  if (planLoading)
    return (
      <div className={`${sizeClass} flex justify-center items-center`}>
        <Loading />
      </div>
    );

  return (
    <div className={sizeClass}>
      {plan.length ? (
        <div className='py-24 px-10 flex gap-x-14'>
          {/* Left column */}
          <div className='flex-1'>
            {/* Header */}
            <div className='flex justify-between items-center mb-5'>
              <div className='flex items-center'>
                <h2 className='font-medium text-2xl mr-20'>Meals</h2>
                <span>{totalCalories} Calories</span>
              </div>
              <FontAwesomeIcon
                icon={faRotate}
                className='text-lg cursor-pointer'
              />
            </div>

            <MealList meals={plan} />
          </div>

          {/* Right column */}
          <div className='w-2/5'>
            <h2 className='font-medium text-2xl mb-5'>Nutrition</h2>
            <NutritionSummary meals={plan} />
          </div>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center h-full'>
          <p className='text-xl font-medium'>
            Generate meal plan for {date.toDateString()}.
          </p>
          <button
            className='button rounded-3xl bg-primary w-32 h-10 text-base-100 mt-4 hover:opacity-80'
            onClick={generatePlan}
          >
            <FontAwesomeIcon icon={faRotate} />
            <span className='ml-2 font-medium'>Generate</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default PlannerContent;
