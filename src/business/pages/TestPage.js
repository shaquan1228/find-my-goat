import FavoriteCard from "../components/player/FavoriteCard";
import ScatterPlot from "../components/charts/ScatterPlot";
import LinePlot from "../components/charts/LinePlot";

import { Row, Container } from 'react-bootstrap'
function TestPage() {
  return (
    <div className="TestPage">
      Hello World!!
      <Container>
        <Row>
          <FavoriteCard />
          {/* <ScatterPlot />
          <LinePlot /> */}
        </Row>
      </Container>
    </div>
  );
}

export default TestPage;
