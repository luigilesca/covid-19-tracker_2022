import styles from "./Usa.module.scss";
import numeral from "numeral";
import { useState, useEffect } from "react";
import { Card, TableUsa, UsaChart } from "../../components";

import axios from "axios";
import baseURL from "../../api/apiClient";
import instance from "../../api/request";

function Usa() {
  const [usaInfo, setUsaInfo] = useState([]);
  const [usaHistory, setUsaHistory] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchUsaData = async () => {
        const response = await axios.get(baseURL + instance.fetchUsaData);
        const data = response.data;

        // console.log("USA", data);

        setUsaInfo(data);
        setIsLoading(false);
      };
      fetchUsaData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      const getUsaHistory = async () => {
        const response = await axios.get(baseURL + instance.fetchUsaHistory);
        const data = response.data.timeline;
        // console.log("USA HISTORY", data);

        const usaHistory = {
          cases: data.cases,
          deaths: data.deaths,
        };
        setUsaHistory(usaHistory);
        setIsLoading(false);
      };
      getUsaHistory();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1>u.s.a. covid situation</h1>

      {!isLoading && (
        <div className={styles.container_card}>
          <Card
            notActive
            title="Cases"
            todayCases={usaInfo.todayCases}
            usaCases={numeral(usaInfo.cases).format("0.0a")}
          />
          <Card
            notActive
            title="Recovered"
            todayCases={usaInfo.todayRecovered}
            usaCases={numeral(usaInfo.recovered).format("0.0a")}
          />
          <Card
            notActive
            title="Deaths"
            todayCases={usaInfo.todayDeaths}
            usaCases={numeral(usaInfo.deaths).format("0.0a")}
          />
        </div>
      )}
      {isLoading && <h3 className={styles.loading}>data is loading...</h3>}

      <div className={styles.container_table}>
        <TableUsa />
      </div>

      <div className={styles.container_chart}>
        <div className={styles.container_usa_chart}>
          <div className={styles.chart_cases}>
            <h3>Cases in the last 30 days</h3>
            <UsaChart usaHistoryCases={usaHistory.cases} />
          </div>

          <div className={styles.chart_deaths}>
            <h3>Deaths in the last 30 days</h3>
            <UsaChart usaHistoryCases={usaHistory.deaths} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usa;
