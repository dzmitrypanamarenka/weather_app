import messageReducer from './reducers';
import { displayMessageAction } from '../../actions';

describe('Message reducers', () => {
  const defaultState = {};
  const message = 'Some test message';
  it('should update message', () => {
    const action = displayMessageAction(message);
    const state = messageReducer(defaultState, action);
    const expectation = {
      ...defaultState,
      message,
    };
    expect(state).toEqual(expectation);
  });
  it('should return initial state because of action absence', () => {
    const state = messageReducer(defaultState, {});
    expect(state).toEqual(defaultState);
  });
  it('should return new state because of initial state absence', () => {
    const action = displayMessageAction(message);
    const state = messageReducer(null, action);
    const expectation = { message };
    expect(state).toEqual(expectation);
  });
});
