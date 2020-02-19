import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarTop from '../navbartop/NavbarTop';
import ScatterChart from '../scatterchart/ScatterChart';
import LineChart from '../linechart/LineChart';
import BarChart from '../barchart/BarChart';
import PieChart from '../piechart/PieChart';
import Cards from '../cards/Cards';

function Dashboard() {
  return (
    <div>
      <NavbarTop />
      <Container>
        <br /> <br />
        <Cards />
        <br /> <br />
        <Row>
          <Col>
            <ScatterChart />
          </Col>
          <Col>
            <LineChart />
          </Col>
        </Row>
        <br /> <br />
        <Row>
          <Col>
            <BarChart />
          </Col>
          <Col>
            <PieChart />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
