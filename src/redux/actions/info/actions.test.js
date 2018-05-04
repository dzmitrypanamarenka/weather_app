import renewMapInfo from './actions';

describe('Info actions', () => {
  it('map info should be renewed', () => {
    const action = renewMapInfo({ visibility: true, marker: 'simpleMarker' });
    expect(action).toEqual({
      type: 'RENEW_INFO',
      payload: {
        info: {
          visibility: true,
          marker: 'simpleMarker',
        },
      },
    });
  });
});
