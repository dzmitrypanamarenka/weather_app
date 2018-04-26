export const mockGeolocationResolve = {
  getCurrentPosition: jest.fn((res) => (
    res({
      coords: {
        latitude: 52.520007,
        longitude: 13.404954,
      }
    })
  ))
};

export const mockGeolocationReject = {
  getCurrentPosition: jest.fn((res, rej) => rej(new Error()))
};
