import React, { PropTypes } from 'react';
// import BigCalendar from 'react-big-calendar';
// import events from './events';
// import globalize from 'globalize';

// BigCalendar.setLocalizer(
//   BigCalendar.globalizeLocalizer(globalize)
// );
import CalendarPic from './calendar.png'
import styles from './styles.css';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.calendar}>
        <img src={CalendarPic} />    
      </div>
    );
  }
}
