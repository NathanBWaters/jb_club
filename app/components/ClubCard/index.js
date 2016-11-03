/**
*
* ClubCard
*
*/

import React from 'react';

import styles from './styles.css';
import { Col, Grid, Button } from 'react-bootstrap';


class ClubCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    title: React.PropTypes.string,
  };

  render() {
    return (
      <div className={styles.clubCard}>
        <header className={styles.headerContainer}>
      	  <h4>{this.props.title}</h4>
        </header>
        <Grid className={styles.main}>
        	<Col className={styles.column} xs={6} sm={6} md={6}>
        		<img className={styles.logo} src = { this.props.logo } />
        	</Col>
          <Col xs={6} sm={6} md={6}>
            <p><b>About:</b><br />lorem ipsum</p>
            <p><b>Facebook:</b><br />lorem ipsum</p>
          </Col>
        </Grid>
        <section className={styles.buttonContainer}>
          <Button >Learn More</Button>
        </section>
      </div>
    );
  }
}

export default ClubCard;
