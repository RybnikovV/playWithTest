const square = (require('./square'));

describe(
  'Ряд проверок ф-ции square',
  () => {
    test('базовая проверка ф-ции square(2)', () => {
      expect(square(2)).toBe(4)
    });
    test('базовая проверка ф-ции square(1)', () => {
      expect(square(1)).toBe(1)
    });
    test('базовая проверка ф-ции square(-2)', () => {
      expect(square(-2)).toBe(0.25)
    });
    const spyMathPow = jest.spyOn(Math, 'pow');
    test('проверка кол-ва вызовов', () => {
      expect(spyMathPow).toBeCalledTimes(2)
    });
    afterAll(() => {
      jest.clearAllMocks()
    })
  }
);
