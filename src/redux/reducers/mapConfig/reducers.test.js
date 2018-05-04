import mapConfigReducers from './';
import { mapActions } from '../../actions';

const {
  updateMapRequest,
  updateMapSuccess,
  updateMapFailure,
} = mapActions;

describe('Map reducers', () => {
  const defaultState = { zoom: 16, failure: false };
  it('update map request', () => {
    const action = updateMapRequest();
    let state = defaultState;
    state = mapConfigReducers(state, action);
    const expectation = {
      ...defaultState,
      isPending: true,
    };
    expect(state).toEqual(expectation);
  });
  it('update map success', () => {
    const coords = { lat: 52.520007, lng: 13.404954 };
    const action = updateMapSuccess({ coords });
    let state = defaultState;
    state = mapConfigReducers(state, action);
    const expectation = {
      ...defaultState,
      coords,
      isPending: false,
    };
    expect(state).toEqual(expectation);
  });
  it('update map failure', () => {
    const action = updateMapFailure();
    let state = defaultState;
    state = mapConfigReducers(state, action);
    const expectation = {
      ...defaultState,
      isPending: false,
      failure: true,
    };
    expect(state).toEqual(expectation);
  });
});
