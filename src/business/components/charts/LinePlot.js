import { useEffect, useState } from "react";
import useGoogleCharts from "../../../services/hooks/useGoogleCharts";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Spinner } from "react-bootstrap";

const dummyData = [
    ['Dt', 'FGM', 'FGA', '3PM', '3PA'],
    [
        new Date("2021-05-16T21:00:00"),
        14.6,
        29.2,
        3.5,
        8.8
    ],
    [
        new Date("2021-05-15T13:00:00"),
        14.6,
        29.2,
        1.8,
        7
    ],
    [
        new Date("2021-05-02T22:00:00"),
        10.5,
        14.6,
        3.5,
        8.8
    ],
    [
        new Date("2021-04-30T22:30:00"),
        10.5,
        15.9,
        1.8,
        8.8
    ]

]
const dummyOptions = {
    title: 'Player Rankings',
    chartArea: { width: '60%', height: '60%' },
    hAxis: { title: 'Date', format: 'MMM d' }, //, minValue: (new Date(2021, 1, 1)), maxValue: (new Date(2021, 10, 21))
    vAxis: { title: dummyData[0][1] }
}
//TODO: pass in headers and data as props
export default function LinePlot(props) {
    const google = useGoogleCharts();
    console.log("goog, yea yea", google)
    const [chart, setChart] = useState(null);

    const handleChartChange = (e) => {
        chart.setOption('vAxis.title', dummyData[0][parseInt(e)]);
        chart.setView({ columns: [0, parseInt(e)] });
        chart.draw();
    }

    useEffect(() => {
        if (google && !chart) {
            const chartWrapper = new google.visualization.ChartWrapper({
                containerId: "line-plot-div",
                chartType: "LineChart",
                dataTable: dummyData,
                options: dummyOptions,
                view: { columns: [0, 1] }
            });
            chartWrapper.draw();

            setChart(chartWrapper);
        }
    }, [google, chart]);


    return (
        (!google) ? <Spinner animation="border" /> :
            <Container>
                <Row className="justify-content-end" >

                    <DropdownButton as={ButtonGroup}
                        className="col-auto mr-auto"
                        title="Select A Stat Filter"
                        id="bg-nested-dropdown"
                        onSelect={handleChartChange}>

                        <Dropdown.Item eventKey={1}>FGM</Dropdown.Item>
                        <Dropdown.Item eventKey={2}>FGA</Dropdown.Item>
                        <Dropdown.Item eventKey={3}>3PM</Dropdown.Item>
                    </DropdownButton>

                </Row>
                <Row>
                    <div id="line-plot-div"></div>
                </Row>

            </Container >
    )

}