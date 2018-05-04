import mapInfoReducer from './reducers';
import { renewMapInfo } from '../../actions';

describe('Info reducers', () => {
  const defaultState = { visibility: false };
  const info = { visibility: true, marker: 'someMarker' };
  it('should update map info', () => {
    const action = renewMapInfo(info);
    let state = defaultState;
    state = mapInfoReducer(state, action);
    const expectation = {
      ...defaultState,
      ...info,
    };
    expect(state).toEqual(expectation);
  });
  it('should return initial state because of action absence', () => {
    const state = mapInfoReducer(defaultState, {});
    expect(state).toEqual(defaultState);
  });
  it('should return new state because of initial state absence', () => {
    const action = renewMapInfo(info);
    const state = mapInfoReducer(null, action);
    const expectation = { ...info };
    expect(state).toEqual(expectation);
  });
});
