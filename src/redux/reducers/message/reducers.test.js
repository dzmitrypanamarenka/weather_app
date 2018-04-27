import messageReducer from './';
import { displayMessageAction } from '../../actions';

describe('Info reducers', () => {
  const defaultState = {};
  it('info map renew', () => {
    const message = 'Some test message';
    const action = displayMessageAction(message);
    let state = defaultState;
    state = messageReducer(state, action);
    const expectation = {
      ...defaultState,
      message,
    };
    expect(state).toEqual(expectation);
  });
});
