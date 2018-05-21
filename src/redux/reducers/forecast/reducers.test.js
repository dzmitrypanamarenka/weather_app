import forecastReducers from './reducers';
import { forecastActions } from '../../actions';

const {
  forecastRequest,
  forecastSuccess,
  forecastFailure,
} = forecastActions;

describe('Forecast reducers', () => {
  const defaultState = { failure: false };

  it('should add pending status of request to geo api', () => {
    const action = forecastRequest();
    const state = forecastReducers(defaultState, action);
    const expectation = { ...defaultState, isPending: true };
    expect(state).toEqual(expectation);
  });
  it('should add data from geo service to state', () => {
    const action = forecastSuccess({ data: 'someData' });
    const state = forecastReducers(defaultState, action);
    const expectation = {
      ...defaultState,
      isPending: false,
      success: true,
      forecastData: {
        data: 'someData',
      },
    };
    expect(state).toEqual(expectation);
  });
  it('should inform about failure of request to geo api', () => {
    const action = forecastFailure();
    const state = forecastReducers(defaultState, action);
    const expectation = { failure: true, isPending: false };
    expect(state).toEqual(expectation);
  });
  it('should return initial state because of action absence', () => {
    const state = forecastReducers(defaultState, {});
    expect(state).toEqual(defaultState);
  });
  it('should return new state because of initial state absence', () => {
    const action = forecastFailure();
    const state = forecastReducers(null, action);
    const expectation = { failure: true, isPending: false };
    expect(state).toEqual(expectation);
  });
});


