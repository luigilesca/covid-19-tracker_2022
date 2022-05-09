import React, { useState, useEffect } from "react";

import styles from "./Italy.module.scss";
import numeral from "numeral";

import { Card, ItalyChart } from "../../components";

import axios from "axios";
import baseURL from "../../api/apiClient";
import instance from "../../api/request";

function Italy() {
  const [italyData, setItalyData] = useState({});

  const [italyHistory, setItalyHistory] = useState({});

  const [chartCases, setChartCases] = useState(true);
  const [chartDeaths, setChartDeaths] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const toggleChart = () => {
    setChartCases(!chartCases);
    setChartDeaths(!chartDeaths);
  };

  useEffect(() => {
    try {
      const getItalyData = async () => {
        const response = await axios.get(baseURL + instance.fetchItalyData);
        const data = response.data;

        // console.log("ITALY", data);

        const italyData = {
          cases: data.cases,
          recovered: data.recovered,
          deaths: data.deaths,
          todayCases: data.todayCases,
          todayRecovered: data.todayRecovered,
          todayDeaths: data.todayDeaths,
        };

        setItalyData(italyData);
        setIsLoading(false);
      };

      getItalyData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // console.log(italyData);

  useEffect(() => {
    try {
      const getItalyHistory = async () => {
        const response = await axios.get(baseURL + instance.fetchItalyHistory);
        const data = response.data.timeline;
        // console.log("ITALY HISTORY", data);

        const italyHistory = {
          cases: data.cases,
          deaths: data.deaths,
        };
        setItalyHistory(italyHistory);
        setIsLoading(false);
      };
      getItalyHistory();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1>italy covid situation</h1>

      {!isLoading && (
        <div className={styles.container_card}>
          <Card
            notActive
            title="Cases"
            todayCases={italyData.todayCases}
            italyCases={numeral(italyData.cases).format("0.0a")}
          />

          <Card
            notActive
            title="Recovered"
            todayCases={italyData.todayRecovered}
            italyCases={numeral(italyData.recovered).format("0.0a")}
          />
          <Card
            notActive
            title="Deaths"
            todayCases={italyData.todayDeaths}
            italyCases={numeral(italyData.deaths).format("0.0a")}
          />
        </div>
      )}
      {isLoading && <h3 className={styles.loading}>Loading data...</h3>}

      <div className={styles.container_chart}>
        <div className={styles.chart_title}>
          <h2>Last 30 days in Italy</h2>
          {/* CASES FALSE */}
          <div className={styles.button_box}>
            <h3
              className={`${styles.button} ${chartCases ? styles.not_allow : styles.allow} `}
              onClick={toggleChart}
            >
              Cases
            </h3>

            {/* DEATHS TRUE */}
            <h3
              className={`${styles.button} ${chartDeaths ? styles.not_allow : styles.allow} `}
              onClick={toggleChart}
            >
              Deaths
            </h3>
          </div>
        </div>

        {!isLoading && (
          <div className={styles.lineChart}>
            <ItalyChart
              chartCases={chartCases}
              italyCases={italyHistory.cases}
              italyDeaths={italyHistory.deaths}
            />
          </div>
        )}
        {isLoading && <h3 className={styles.loading}>Loading Data...</h3>}
      </div>
    </div>
  );
}

export default Italy;
