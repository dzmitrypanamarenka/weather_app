import displayMessage from './';

describe('Message actions', () => {
  it('Display message', () => {
    const message = 'Some message to be displayed';
    const action = displayMessage({ message });
    expect(action).toEqual({
      type: 'DISPLAY_MESSAGE',
      payload: {
        message: {
          message,
        },
      },
    });
  });
});
