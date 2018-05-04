import mapConfigReducers from './reducers';
import { mapActions } from '../../actions';

const {
  updateMapRequest,
  updateMapSuccess,
  updateMapFailure,
} = mapActions;

describe('Map reducers', () => {
  const defaultState = { zoom: 16, failure: false };
  it('should add pending status of request to geo api', () => {
    const action = updateMapRequest();
    let state = defaultState;
    state = mapConfigReducers(state, action);
    const expectation = {
      ...defaultState,
      isPending: true,
    };
    expect(state).toEqual(expectation);
  });
  it('should add actual coords from geo service to state', () => {
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
  it('should inform about failure of request to geo api', () => {
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
  it('should return initial state because of action absence', () => {
    const state = mapConfigReducers(defaultState, {});
    expect(state).toEqual(defaultState);
  });
  it('should return new state because of initial state absence', () => {
    const action = updateMapFailure();
    const state = mapConfigReducers(null, action);
    const expectation = { failure: true, isPending: false };
    expect(state).toEqual(expectation);
  });
});
