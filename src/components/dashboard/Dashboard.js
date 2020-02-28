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
          <Col lg="6" md="6" sm="12" >
            <ScatterChart />
          </Col>
          <Col lg="6" md="6" sm="12" >
            <LineChart />
          </Col>
        </Row>
        <br /> <br />
        <Row>
          <Col lg="6" md="6" sm="12" >
            <BarChart />
          </Col>
          <Col lg="6" md="6" sm="12" >
            <PieChart />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
