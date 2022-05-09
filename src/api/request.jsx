const instance = {
  fetchAll: `/all`,
  fetchAllCountries: `/countries`,
  fetchHistory: `/historical/all?lastdays=30`,
  fetchItalyData: `/countries/italy?strict=true`,
  fetchUsaData: `/countries/usa?strict=true`,
  fetchItalyHistory: `/historical/italy?lastdays=30`,
  fetchUsaHistory: `/historical/usa?lastdays=30`,
  fetchStates: `/states`,
};

export default instance;
