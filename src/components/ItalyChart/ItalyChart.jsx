import { Line } from "react-chartjs-2";

function ItalyChart({ italyCases, italyDeaths, chartCases }) {
  return (
    <div>
      <Line
        height={100}
        data={{
          datasets: [
            {
              backgroundColor: "#05DBF2",
              borderColor: "#115D8C",
              data: chartCases ? italyCases : italyDeaths,
            },
          ],
        }}
        //   options={options}
      />
    </div>
  );
}

export default ItalyChart;
