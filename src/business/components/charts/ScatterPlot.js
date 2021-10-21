import Chart from "react-google-charts";

export default function ScatterPlot(props) {

    return (

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
    )

}