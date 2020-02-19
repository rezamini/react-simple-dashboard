import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCardValues } from '../../actions';
import './Cards.css';
import data from '../../data/users.json';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faClock, faCompressArrowsAlt, faCompressAlt } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

function Cards() {
  const cardValues = useSelector(state => state.cardReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let totalUsers = JSON.stringify(data.length);
    let totalTimeSpent = 0;
    let mostFreqUser = '';
    let mostFreqUserCount = 0;
    let lessFreqUser = '';
    let lessFreqUserCount = Number.MAX_VALUE;
    let cardsData = {};
    data.forEach((elem) => {
      let points = elem.points;
      let pointsLen = points.length;

      if(pointsLen > mostFreqUserCount){
        mostFreqUserCount = pointsLen;
        mostFreqUser = elem.id
      }
      if(pointsLen < lessFreqUserCount){
        lessFreqUserCount = pointsLen;
        lessFreqUser = elem.id
      }

      points.forEach((point) => {
          totalTimeSpent += parseInt(point.time)
      });
    });
    cardsData['totalUsers'] = totalUsers;
    cardsData['totalTimeSpent'] = Math.round(totalTimeSpent / 3600);
    cardsData['mostFreqUser'] = mostFreqUser;
    cardsData['mostFreqUserCount'] = mostFreqUserCount;
    cardsData['lessFreqUser'] = lessFreqUser;
    cardsData['lessFreqUserCount'] = lessFreqUserCount;

    dispatch(setCardValues(cardsData));
  }, []);

  return (
    <CardDeck>
        <Card className="shadow border-left-primary">
          <Card.Body>
            <Row className="align-items-center no-margins">
              <Col className="mr-2 text-left">
                <Card.Title>Number of users</Card.Title>
                <Card.Title className="title-result">{cardValues.totalUsers}</Card.Title>
              </Col>
              <div ><FontAwesomeIcon icon={faUsers} color="royalblue" size="lg" /></div>
            </Row>
          </Card.Body>
        </Card>
        <Card className="shadow border-left-success">
          <Card.Body>
            <Row className="align-items-center no-margins">
              <Col className="mr-2 text-left">
                <Card.Title>Total Time Spent</Card.Title>
                <Card.Title className="title-result">{cardValues.totalTimeSpent} Hours</Card.Title>
              </Col>
              <div><FontAwesomeIcon icon={faClock} color="green" size="lg" /></div>
            </Row>
          </Card.Body>
        </Card>
        <Card className="shadow border-left-warning">
          <Card.Body>
            <Row className="align-items-center no-margins">
              <Col className="mr-2 text-left">
                <Card.Title>Most Frequent User</Card.Title>
                <Card.Title className="title-result">{cardValues.mostFreqUser} ({cardValues.mostFreqUserCount} Moves)</Card.Title>
              </Col>
              <div><FontAwesomeIcon icon={faCompressArrowsAlt} color="orange" size="lg" /></div>
            </Row>
          </Card.Body>
        </Card>
        <Card className="shadow border-left-info">
          <Card.Body>
            <Row className="align-items-center no-margins">
              <Col className="mr-2 text-left">
                <Card.Title>Less Frequent User</Card.Title>
                <Card.Title className="title-result">{cardValues.lessFreqUser} ({cardValues.lessFreqUserCount} Moves)</Card.Title>
              </Col>
              <div><FontAwesomeIcon icon={faCompressAlt} color="lightblue" size="lg" /></div>
            </Row>
          </Card.Body>
        </Card>
    </CardDeck>
  );
}

export default Cards;
