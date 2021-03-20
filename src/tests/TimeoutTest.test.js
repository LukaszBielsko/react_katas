function timer(callback) {
  console.log('Start');
  setTimeout(() => {
    console.log('Stop');
    if (callback) callback();
  }, 1000);
}

beforeEach(() => {
  jest.useFakeTimers();
});

it('waits 1 second before ending', () => {
  timer();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

it('calls the callback after 1 second', () => {
  const callback = jest.fn();

  timer(callback);

  expect(callback).not.toBeCalled();

  jest.runAllTimers();

  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
})
