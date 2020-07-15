let hello = require('./hello')
test('should get "hello world', () => {
  expect(hello()).toBe('hello world')

})
