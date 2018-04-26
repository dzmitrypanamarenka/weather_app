import configureMockStore from 'redux-mock-store';

import renewMapInfo from './';

describe('Info actions', () => {
  it('Renew Map Info', () => {
    const action = renewMapInfo({ visibility: true, marker: { prop: 'simpleMarker' } });
    expect(action).toEqual({
      type: 'RENEW_INFO',
      payload: {
        info: {
          visibility: true,
          marker: {
            prop: 'simpleMarker'
          }
        }
      }
    })
  })
});
