/**
*
* Clubs
*
*/

import React from 'react';

import styles from './styles.css';
import {Grid, Row, Col} from 'react-bootstrap';
import ClubCard from 'components/ClubCard'
const NEABC = 'https://s3-us-west-2.amazonaws.com/jonesboro/neabc.png'
const WCR = 'https://s3-us-west-2.amazonaws.com/jonesboro/women_can_ride.jpg'
const Imacyclist = 'https://s3-us-west-2.amazonaws.com/jonesboro/imacyclist.jpg'
const NEA_Woodies = 'https://s3-us-west-2.amazonaws.com/jonesboro/nea_woodies_logo.jpg'
const Pedal_Pushers = 'https://s3-us-west-2.amazonaws.com/jonesboro/pedal_pushers.png'

class Clubs extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.clubs}>
      	<Grid>
          <Row className="show-grid">
            <Col xs={12} sm={6} md={4}>
              <ClubCard title="Imacylist"
                        logo={ Imacyclist }
                        about="Lorem ipsum"
                        fb="http://page.com"/>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <ClubCard title="NEABC"
                        logo={ NEABC }
                        about="Lorem ipsum"
                        fb="http://page.com"/>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <ClubCard title="Jonesboro Pedal Pushers"
                        logo={ Pedal_Pushers }
                        about="Lorem ipsum"
                        fb="http://page.com"/>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={0} sm={0} md={2}>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <ClubCard title="NEA Woodies"
                        logo={ NEA_Woodies }
                        about="Lorem ipsum"
                        fb="http://page.com"/>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <ClubCard title="Women Can Ride"
                        logo={ WCR }
                        about="Lorem ipsum"
                        fb="http://page.com"/>
            </Col>
            <Col xs={0} sm={0} md={2}>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Clubs;
