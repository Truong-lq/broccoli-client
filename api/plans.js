import axiosIns from './axiosIns';

export const getPlan = async (apply_date) => {
  const { data } = await axiosIns.post('/plans', { apply_date });

  return data;
};

export const generatePlan = async (apply_date) => {
  const { data } = await axiosIns.post('/plans/generate', { apply_date });

  return data;
};
