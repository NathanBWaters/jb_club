/**
*
* Clubs
*
*/

import React from 'react';

import styles from './styles.css';
import {Grid, Row, Col} from 'react-bootstrap';
import ClubCard from 'components/ClubCard'
import NEABC from './neabc.png'
import WCR from './women_can_ride.jpg'
import Imacyclist from './imacyclist.jpg'
import NEA_Woodies from './nea_woodies_logo.jpg'
import Pedal_Pushers from './pedal_pushers.png'

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
