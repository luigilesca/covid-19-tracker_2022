import numeral from "numeral";

// Sort data in the table
export const sortData = (data) => {
  const sortedData = [...data];

  sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
  return sortedData;
};

//format numer
export const prettyPrintStat = (stat) => (stat ? `+${numeral(stat).format("0.0a")}` : "+0");
