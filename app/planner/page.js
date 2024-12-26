'use client';
import { useEffect } from 'react';
import { PlannerContent, PlannerHeader } from '../../components/planner';
import usePlanStore from '../../stores/planStore';
import { meals } from '../../utils/constants';

const PlannerPage = () => {
  const { setPlan, date, setPlanLoading } = usePlanStore((state) => state);

  const fetchPlan = async () => {
    setPlanLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    setPlan([]);

    setPlanLoading(false);
  };

  useEffect(() => {
    // Fetch plan when date changed
    fetchPlan();
  }, [date]);

  return (
    <div>
      <PlannerHeader sizeClass='h-20' />
      <PlannerContent sizeClass='h-screen -mt-20' />
    </div>
  );
};

export default PlannerPage;
