import mapInfoReducer from './';
import { renewMapInfo } from '../../actions';

describe('Info reducers', () => {
  const defaultState = { visibility: false };
  it('info map renew', () => {
    const info = { visibility: true, marker: { some: 'marker' }};
    const action = renewMapInfo(info);
    let state = defaultState;
    state = mapInfoReducer(state, action);
    const expectation = {
      ...defaultState,
      ...info
    };
    expect(state).toEqual(expectation);
  });
});
