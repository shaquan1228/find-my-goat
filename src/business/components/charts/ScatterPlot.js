import { useEffect, useState } from "react";
import useGoogleCharts from "../../../services/hooks/useGoogleCharts";

const dummyData = [

    ['Name', 'FieldGoalsMade', 'FGA'],
    ['Lebron', 14.6, 10],
    ["Testquan", 15.66, 2]
]

export default function ScatterPlot(props) {

    const google = useGoogleCharts();

    const [chart, setChart] = useState(null);

    useEffect(() => {
        if (google && !chart) {

            const chartWrapper = new google.visualization.ChartWrapper({
                containerId: "scatter-plot-div",
                chartType: "ScatterChart",
                dataTable: dummyData,
                view: { columns: [1, 2] }
            });

            chartWrapper.draw();

            setChart(chartWrapper);
        }
    }, [google, chart]);

    return (
        <div id="scatter-plot-div"></div>

    )

}