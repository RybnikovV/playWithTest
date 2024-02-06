import { getCounterValue } from './counterSelector';

describe('Тестирование селектора', () => {
  test('Проверка с пустым стейт', () => {
    expect(getCounterValue({})).toBe(0);
  });

  test('Проверка с заполненным стейт', () => {
    expect(getCounterValue({
      counter: {
        value: 2
      }
    })).toBe(2);
  })
})