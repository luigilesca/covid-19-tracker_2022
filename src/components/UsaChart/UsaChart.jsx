import { Line } from "react-chartjs-2";

function UsaChart({ usaHistoryCases }) {
  return (
    <div>
      <Line
        height={100}
        data={{
          datasets: [
            {
              backgroundColor: "#05DBF2",
              borderColor: "#115D8C",
              data: usaHistoryCases,
            },
          ],
        }}
        //   options={options}
      />
    </div>
  );
}

export default UsaChart;
