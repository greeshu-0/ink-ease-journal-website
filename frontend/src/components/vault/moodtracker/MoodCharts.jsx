import { Pie, Bar } from "react-chartjs-2";

export default function MoodCharts({ chartData }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-4">
        <h2 className="text-center text-lg font-medium mb-4">Pie Chart</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="w-full max-w-[250px] h-[250px]">
            <Pie
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
              }}
            />
          </div>
          <div className="text-left space-y-2">
            {chartData.labels.map((label, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span
                  className="inline-block w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: chartData.datasets[0].backgroundColor[i],
                  }}
                ></span>
                <span className="text-gray-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md p-4">
        <h2 className="text-center text-lg font-medium mb-2">Bar Chart</h2>
        <div className="w-full h-[250px]">
          <Bar
            data={chartData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>
    </div>
  );
}
