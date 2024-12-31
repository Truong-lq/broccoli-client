import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import usePlanStore from "../../stores/planStore";
import MealList from "./MealList";
import NutritionSummary from "./NutritionSummary";
import Loading from "../Loading";
import { toOneFloatPoint } from "../../utils/format";
import { generatePlan } from "../../api/plans";
import { useMemo } from "react";

const PlannerContent = ({ sizeClass }) => {
  const { plan, date, planLoading, setPlan, setPlanLoading } = usePlanStore((state) => state);

  const handleBtnClick = async () => {
    setPlanLoading(true);

    const plan = await generatePlan(date);
    setPlan(plan);

    setPlanLoading(false);
  };

  // Avoid rendering other plan when change page on loading
  const validPlan = useMemo(() => {
    const planDate = new Date(plan?.apply_date).setHours(0, 0, 0, 0);
    const chooseDate = new Date(date).setHours(0, 0, 0, 0);

    return plan && planDate === chooseDate;
  }, [plan]);

  if (planLoading)
    return (
      <div className={`${sizeClass} flex justify-center items-center`}>
        <Loading />
      </div>
    );

  return (
    <div className={sizeClass}>
      {validPlan ? (
        <div className='py-24 px-10 flex gap-x-14'>
          {/* Left column */}
          <div className='flex-1'>
            {/* Header */}
            <div className='flex justify-between items-center mb-5'>
              <div className='flex items-center'>
                <h2 className='font-medium text-2xl mr-20'>Meals</h2>
                <span>{toOneFloatPoint(plan.plan_nutrition.calories)} Calories</span>
              </div>
              <FontAwesomeIcon icon={faRotate} className='text-lg cursor-pointer' />
            </div>

            <MealList meals={plan.meals} />
          </div>

          {/* Right column */}
          <div className='w-2/5'>
            <h2 className='font-medium text-2xl mb-5'>Nutrition</h2>
            <NutritionSummary data={plan.plan_nutrition} />
          </div>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center h-full'>
          <p className='text-xl font-medium'>Generate meal plan for {date.toDateString()}</p>
          <button
            className='button rounded-3xl bg-primary w-32 h-10 text-base-100 mt-4 hover:opacity-80'
            onClick={handleBtnClick}
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
