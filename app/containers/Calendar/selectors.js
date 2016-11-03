import { createSelector } from 'reselect';

/**
 * Direct selector to the calendar state domain
 */
const selectCalendarDomain = () => (state) => state.get('calendar');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Calendar
 */

const selectCalendar = () => createSelector(
  selectCalendarDomain(),
  (substate) => substate.toJS()
);

export default selectCalendar;
export {
  selectCalendarDomain,
};
