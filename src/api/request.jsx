const instance = {
  fetchAll: `${process.env.REACT_APP_BASE_URL}/all`,
  fetchAllCountries: `${process.env.REACT_APP_BASE_URL}/countries`,
  fetchHistory: `${process.env.REACT_APP_BASE_URL}/historical/all?lastdays=30`,
  fetchItalyData: `${process.env.REACT_APP_BASE_URL}/countries/italy?strict=true`,
  fetchUsaData: `${process.env.REACT_APP_BASE_URL}/countries/usa?strict=true`,
  fetchItalyHistory: `${process.env.REACT_APP_BASE_URL}/historical/italy?lastdays=30`,
  fetchUsaHistory: `${process.env.REACT_APP_BASE_URL}/historical/usa?lastdays=30`,
  fetchStates: `${process.env.REACT_APP_BASE_URL}/states`,
};

export default instance;
