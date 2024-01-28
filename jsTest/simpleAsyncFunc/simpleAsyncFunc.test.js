const simpleAsyncFunc = require('./simpleAsyncFunc');

describe('Проверка simpleAsyncFunc', () => {
  test('простая проверка', async () => {
    const sum = await simpleAsyncFunc(() => 5+5, 1000)
    expect(sum).toBe(10)
  })
});