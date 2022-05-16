import React, { useState, useEffect } from 'react';
import styles from './Homepage.module.scss';
import { sortData, prettyPrintStat } from '../../components/util';
import numeral from 'numeral';

import { MenuItem, Select, FormControl } from '@mui/material';
import { Card, Table, LineChart } from '../../components';
import axios from 'axios';

// import baseURL, { all } from '../../api/apiClient';
import instance from '../../api/request';

import apiClient from '../../api/apiClient';

function Homepage() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [countryInfoAll, setCountryInfoAll] = useState({});
  const [tableData, setTableData] = useState([]);
  const [chart, setChart] = useState([]);
  const [casesType, setCasesType] = useState('cases');

  const [isLoading, setIsLoading] = useState(true);

  // Get All Data

  const fetchAll = async () => {
    try {
      const response = await apiClient(`/all`);
      console.log(response);
      if (response) {
        const data = response.data;

        setCountryInfo(data);
        setCountryInfoAll(data);
        setChart(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get All Data
  useEffect(() => {
    fetchAll();
  }, []);

  // useEffect(() => {
  //   try {
  //     const fetchAll = async () => {
  //       const response = await apiClient.get(instance.fetchAll);

  //       const data = response.data;

  //       setCountryInfo(data);
  //       setCountryInfoAll(data);
  //       setChart(data);
  //       setIsLoading(false);
  //     };
  //     fetchAll();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // Get ALl Countries Data
  useEffect(() => {
    try {
      const getCountriesData = async () => {
        const response = await apiClient.get(instance.fetchAllCountries);

        const data = response.data;
        // console.log(data);

        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }));

        // Sort Data
        const sortedData = sortData(data);

        setTableData(sortedData);
        setCountries(countries);
        setIsLoading(false);
      };
      getCountriesData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    // console.log(countryCode);

    const url =
      countryCode === 'worldwide'
        ? `https://disease.sh/v3/covid-19/all`
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    const response = await apiClient.get(url);
    const data = response.data;

    setCountry(countryCode);
    setCountryInfo(data);
    setIsLoading(false);
  };

  // console.log("country info", countryInfo);

  return (
    <div className={styles.homepage}>
      <h1>world covid situation</h1>
      <div className={styles.container}>
        <div className={styles.container_chart}>
          <div className={styles.chart}>
            <h2>Last 30 Days in the World</h2>
            <LineChart casesType={casesType} />
          </div>
        </div>

        {!isLoading && (
          <div className={styles.container_card}>
            <Card
              isActive={casesType === 'cases'}
              title='Cases'
              total={numeral(countryInfoAll.cases).format('0.0a')}
              cases={prettyPrintStat(countryInfoAll.todayCases)}
              onClick={(e) => setCasesType('cases')}
            />

            <Card
              isActive={casesType === 'deaths'}
              title='Deaths'
              total={numeral(countryInfoAll.deaths).format('0.0a')}
              cases={prettyPrintStat(countryInfoAll.todayDeaths)}
              onClick={(e) => setCasesType('deaths')}
            />
          </div>
        )}
        {isLoading && <h3 className={styles.loading}>Loading data...</h3>}
      </div>

      <div className={styles.box}>
        <div className={styles.dropdown}>
          <FormControl>
            <Select
              className={styles.select}
              variant='outlined'
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value='worldwide'>Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem key={country.name} value={country.value}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        {!isLoading && (
          <div className={styles.container_card_all}>
            <Card
              notActive
              title='Cases'
              total={numeral(countryInfo.cases).format('0.0a')}
              cases={prettyPrintStat(countryInfo.todayCases)}
            />
            <Card
              notActive
              title='Recovered'
              total={numeral(countryInfo.recovered).format('0.0a')}
              cases={prettyPrintStat(countryInfo.todayRecovered)}
            />
            <Card
              notActive
              title='Deaths'
              total={numeral(countryInfo.deaths).format('0.0a')}
              cases={prettyPrintStat(countryInfo.todayDeaths)}
            />
          </div>
        )}
        {isLoading && <h3 className={styles.loading}>Loading data...</h3>}

        {tableData && (
          <div className={styles.container_table}>
            <h2>Country Cases</h2>
            <Table countries={tableData} />
            {!tableData.length && <h3 className={styles.loading}>Loading Data...</h3>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
