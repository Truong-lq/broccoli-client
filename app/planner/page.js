'use client';
import { useEffect } from 'react';
import { PlannerContent, PlannerHeader } from '../../components/planner';
import usePlanStore from '../../stores/planStore';
import { getPlan } from '../../api/plans';

const PlannerPage = () => {
  const { setPlan, date, setPlanLoading } = usePlanStore((state) => state);

  useEffect(() => {
    const fetchPlan = async () => {
      setPlanLoading(true);

      const plan = await getPlan(date);

      if (plan?.msg) {
        setPlan(null);
      } else {
        setPlan(plan);
      }

      setPlanLoading(false);
    };
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
