export const meals = [
  {
    id: 1,
    meal_time: 'breakfast',
    meal_name: 'Oat meal with milk and honey and fruits',  
    meal_qty: 1,
    nutrients: {
      calories: 200,
      carbs: 40,
      protein: 10,
      fat: 5
    },
    ingredients: [
      {
        id: 1,
        name: 'Oatmeal',
        qty: 1
      },
      {
        id: 2,
        name: 'Milk',
        qty: 1
      }
    ]
  },
  {
    id: 2,
    meal_time: 'breakfast',
    meal_name: 'Oatmeal',
    meal_qty: 1,
    nutrients: {
      calories: 200,
      carbs: 40,
      protein: 10,
      fat: 5
    },
    ingredients: [
      {
        id: 1,
        name: 'Oatmeal',
        qty: 1
      },
      {
        id: 2,
        name: 'Milk',
        qty: 1
      }
    ]
  },
  {
    id: 3,
    meal_time: 'lunch',
    meal_name: 'Chicken Salad',
    meal_qty: 1,
    nutrients: {
      calories: 200,
      carbs: 40,
      protein: 10,
      fat: 5
    },
    ingredients: [
      {
        id: 1,
        name: 'Oatmeal',
        qty: 1
      },
      {
        id: 2,
        name: 'Milk',
        qty: 1
      }
    ]
  },
  {
    id: 4,
    meal_time: 'dinner',
    meal_name: 'Grilled Salmon',
    meal_qty: 1,
    nutrients: {
      calories: 200,
      carbs: 40,
      protein: 10,
      fat: 5
    },
    ingredients: [
      {
        id: 1,
        name: 'Oatmeal',
        qty: 1
      },
      {
        id: 2,
        name: 'Milk',
        qty: 1
      }
    ]
  },
  {
    id: 5,
    meal_time: 'snack',
    meal_name: 'Grilled Salmon',
    meal_qty: 1,
    nutrients: {
      calories: 200,
      carbs: 40,
      protein: 10,
      fat: 5
    },
    ingredients: [
      {
        id: 1,
        name: 'Oatmeal',
        qty: 1
      },
      {
        id: 2,
        name: 'Milk',
        qty: 1
      }
    ]
  }
];

export const pieChartColors = {
  carbs: 'rgb(251 146 60)',
  protein: 'rgb(6 182 212)',
  fat: 'rgb(239 68 68)'
};

export const mealTimes = ['breakfast', 'lunch', 'dinner', 'snack'];

export const macroNutrients = ['calories', 'carbs', 'protein', 'fat'];
