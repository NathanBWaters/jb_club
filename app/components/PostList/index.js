/**
*
* PostList
*
*/

import React from 'react';

import styles from './styles.css';
import Post from 'components/Post';

class PostList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props) {
    super(props);

    this.getPosts = this.getPosts.bind(this);
  }

  getPosts() {
    const postlist = [{
        'title': 'Fun Ahead!',
        'author': 'NEA Woodies',
        'date': 'Nov. 3, 2016',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut lorem orci.'
      },{
        'title': 'Bicycling Benefit!',
        'author': 'Women Can Ride',
        'date': 'Nov. 2, 2016',
        'content': 'Quisque quis lectus sollicitudin, interdum urna quis, feugiat ex.'
      },{
        'title': 'Get together soon!',
        'author': 'NEABC',
        'date': 'Nov. 2, 2016',
        'content': 'Quisque quis lectus sollicitudin, interdum urna quis, feugiat ex.'
      },{
        'title': 'Biking in the Jonesboro Hiking Trails!',
        'author': 'NEABC',
        'date': 'Nov. 1, 2016',
        'content': 'Quisque quis lectus sollicitudin, interdum urna quis, feugiat ex.'
      },{
        'title': 'Biking and Pokemon Go!',
        'author': 'Jonesboro Pedal Pushers',
        'date': 'Nov. 1, 2016',
        'content': 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos'
    }];

    const posts = postlist.map((post) =>
      <div className={ styles.post }>
        <h5 className={ styles.post_title }><b>{ post.title }</b></h5>
        <p className={ styles.post_date }>{ post.date }</p>
        <p>{ post.content }</p>
        <p className={ styles.post_author }> - { post.author }</p>
      </div>
    );

    return posts
  }
  
  render() {
    return (
      <div >
        <h4>Recent Announcements</h4>
        <hr />
        <div className={styles.postList}>
        { this.getPosts() }
        </div>
      </div>
    );
  }
}

export default PostList;
