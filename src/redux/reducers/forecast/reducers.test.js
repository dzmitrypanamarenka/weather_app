import forecastReducers from './';
import { forecastActions } from '../../actions'

const {
  forecastRequest,
  forecastSuccess,
  forecastFailure,
} = forecastActions;

describe('Forecast reducers', () => {
  const defaultState = { failure: false };
  it('forecast request', () => {
    const action = forecastRequest();
    let state = defaultState;
    state = forecastReducers(state, action);
    const expectation = {...defaultState, isPending: true};
    expect(state).toEqual(expectation);
  });
  it('forecast success', () => {
    const action = forecastSuccess({ data: 'someData' });
    let state = defaultState;
    state = forecastReducers(state, action);
    const expectation = {
      ...defaultState,
      isPending: false,
      success: true,
      forecastData: {
        data: 'someData'
      }
    };
    expect(state).toEqual(expectation);
  });
  it('forecast failure', () => {
    const action = forecastFailure();
    let state = defaultState;
    state = forecastReducers(state, action);
    const expectation = { failure: true, isPending: false };
    expect(state).toEqual(expectation);
  });
});


