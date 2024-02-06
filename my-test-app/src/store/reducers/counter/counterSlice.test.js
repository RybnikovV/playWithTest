import counterReducers, { decrement, increment } from './counterSlice';

describe('Тестируем редюсеры', () => {
  test('Тестирование increment', () => {
    expect(counterReducers({
      value: 0
    }, increment())).toEqual({value: 1});
  });

  test('Тестирование decrement', () => {
    expect(counterReducers({
      value: 1
    }, decrement())).toEqual({value: 0});
  });
});