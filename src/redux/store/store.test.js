import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import store from './';
import reducers from '../reducers';

describe('Store', () => {
  it('store test', () => {
    const expectation = {
      dispatch: expect.any(Function),
      getState: expect.any(Function),
      replaceReducer: expect.any(Function),
      subscribe: expect.any(Function),
      'Symbol (observable)': expect.any(Function),
    };
    const store = createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(thunk),
    );
    expect(store).toBeCalledWith(
      expect.objectContaining({
        dispatch: expect.any(Number),
        getState: expect.any(Number),
        replaceReducer: expect.any(Function),
        subscribe: expect.any(Function),
        'Symbol (observable)': expect.any(Function),
      }),
    );
    expect(store).toEqual(expectation);
  });
});

