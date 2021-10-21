import Chart from "react-google-charts";

const dummyData = [
    ['DateTime', 'FieldGoalsMade', 'FieldGoalsAttempted', 'ThreePointersMade', 'ThreePointersAttempted'],
    [
        "2021-05-16T21:00:00",
        14.6,
        29.2,
        3.5,
        8.8
    ],
    [
        "2021-05-15T13:00:00",
        14.6,
        29.2,
        1.8,
        7
    ], [
        "2021-05-06T22:00:00",
        0,
        0,
        0,
        0
    ],
    [
        "2021-05-03T22:00:00",
        0,
        0,
        0,
        0
    ],
    [
        "2021-05-02T22:00:00",
        10.5,
        14.6,
        3.5,
        8.8
    ],
    [
        "2021-04-30T22:30:00",
        10.5,
        15.9,
        1.8,
        8.8
    ],
    [
        "2021-04-28T19:30:00",
        0,
        0,
        0,
        0
    ]

]

export default function ScatterPlot(props) {

    return (

        <Chart
            chartType="LineChart"
            loader={<div>Loading Chart...</div>}

            data={dummyData}

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

        </Chart >
    )

}