import React from 'react';
import './App.css';
import logo from './images/dashboard.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import ScatterChart from './components/scatterchart/ScatterChart';
import LineChart from './components/linechart/LineChart';
import BarChart from './components/barchart/BarChart';
import PieChart from './components/piechart/PieChart';
import Cards from './components/cards/Cards';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Dashboard
      </Navbar.Brand>
    </Navbar>
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
      <Row className="col-md-offset-10">
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

export default App;
