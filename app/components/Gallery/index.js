/**
*
* Gallery
*
*/

import React from 'react';

import styles from './styles.css';
import { Carousel } from 'react-bootstrap';
const Cover1 = 'https://s3-us-west-2.amazonaws.com/jonesboro/cover_2.jpg';
const Cover2 = 'https://s3-us-west-2.amazonaws.com/jonesboro/cover_3.jpg';
const Cover3 = 'https://s3-us-west-2.amazonaws.com/jonesboro/cover_1.jpg';

class Gallery extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.gallery}>
        <Carousel className={styles.carousel}>
          <Carousel.Item>
            <img className={styles.carousel_image} alt="900x300" src={ Cover1 }/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className={styles.carousel_image} alt="900x300" src={ Cover2 }/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className={styles.carousel_image} alt="900x300" src={ Cover3 }/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Gallery;
