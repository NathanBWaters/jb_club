import expect from 'expect';
import calendarReducer from '../reducer';
import { fromJS } from 'immutable';

describe('calendarReducer', () => {
  it('returns the initial state', () => {
    expect(calendarReducer(undefined, {})).toEqual(fromJS({}));
  });
});
