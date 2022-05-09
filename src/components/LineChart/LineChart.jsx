import React, { useState, useEffect } from "react";
import baseURL from "../../api/apiClient";
import instance from "../../api/request";
import axios from "axios";
import numeral from "numeral";
import styles from "./LineChart.module.scss";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const buildChartData = (data, casesType) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

function LineChart({ casesType }) {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const fetchHistoryData = async () => {
        const response = await axios.get(baseURL + instance.fetchHistory);

        const data = response.data;
        console.log("LineChart", data);

        let chartData = buildChartData(data, casesType);
        setData(chartData);
      };
      fetchHistoryData();
    } catch (error) {
      console.log(error);
    }
  }, [casesType]);

  return (
    <div>
      {data?.length > 0 ? (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "#05DBF2",
                borderColor: "#115D8C",
                data: data,
              },
            ],
          }}
          // options={options}
        />
      ) : (
        <h3 className={styles.info}>Loading Data...</h3>
      )}
    </div>
  );
}

export default LineChart;
