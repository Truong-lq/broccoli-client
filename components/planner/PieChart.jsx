import { useEffect, useMemo, useRef } from "react";
import Chart from "chart.js/auto";
import { capitalize, toOneFloatPoint } from "../../utils/format";
import { pieChartColors as colors } from "../../utils/constants";

const PieChart = ({ data }) => {
  const chartRef = useRef(null);

  // Calculate percentage of each macro nutrient
  const { labels, values } = useMemo(() => {
    const labels = [];
    const values = [];

    Object.entries(data).forEach((nutrient) => {
      if (["fiber", "calories"].includes(nutrient[0])) return;

      if (nutrient[0] === "fat") {
        nutrient[1] = nutrient[1] * 9;
      } else {
        nutrient[1] = nutrient[1] * 4;
      }

      values.push(toOneFloatPoint(nutrient[1] / data.calories) * 100);
      labels.push(capitalize(nutrient[0]));
    });

    return { labels, values };
  }, [data]);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels,
        datasets: [
          {
            label: "Percentage",
            data: values,
            backgroundColor: Object.values(colors),
            hoverOffset: 4,
          },
        ],
      },
    });

    // Destroy chart component unmounts
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className='flex items-center justify-center h-72 w-full right-0 top-0'>
      <canvas ref={chartRef} />
    </div>
  );
};

export default PieChart;
