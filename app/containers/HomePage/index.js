/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styles from './styles.css';
import { Col, Grid, Row } from 'react-bootstrap';
import Gallery from 'components/Gallery';
import Clubs from 'components/Clubs';
import Calendar from 'containers/Calendar';
import PostList from 'components/PostList';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.home_page}>
        <header className={styles.header} >
          <h1><b>Jonesboro Bicycle Alliance</b></h1>
        </header>
        <Gallery />
        <hr />
        <Grid className={styles.main_grid}>
          <Row>
            <Col xs={6} md={4}>
              <PostList/>
            </Col>
            <Col xs={6} md={8}>
              <Calendar />
            </Col>
          </Row>
        </Grid>
        <hr />
        <Clubs />
      </div>
    );
  }
}
