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
/*
<Chart
chartType="ScatterChart"
loader={<div>Loading Chart...</div>}

data={[
    ['Name', 'FieldGoalsMade', 'ThreePointersMade'],
    ['Lebron', 14.6, 10],
    ["Testquan", 15.66, 2]
]}

options={{

    title: 'Player Rankings',
    chartArea: { width: '60%', height: '70%' },
    series: {
        0: { axis: 'Field Goals Made', pointsVisible: false, visibleInLegend: false },
        1: { axis: 'Three Pointers Made' }
    },
    axes: {
        y: {
            'Field Goals Made': { label: 'Field Goals Made' },
            'Three Pointers Made': { label: 'Three Pointers Made' }
        }
    }

}}

>

</Chart>
*/