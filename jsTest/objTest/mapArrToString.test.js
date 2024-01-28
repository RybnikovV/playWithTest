const mapArrToString = require('./mapArrToString');

describe('проверка ф-ии mapArrToString', () => {
  test('Проверка mapArrtoString [1, "2", 321, -11]', () => { 
    expect(mapArrToString([1, "2", 321, -11])).toEqual(['1', '321', '-11'])
  });
  test('Проверка mapArrtoString [1, "2", 321, null, undefined, -11]', () => { 
    expect(mapArrToString([1, "2", 321, null, undefined, -11])).toEqual(['1', '321', '-11'])
  });
  test('Проверка mapArrtoString []', () => { 
    expect(mapArrToString([])).toEqual([])
  });
  test('Проверка mapArrtoString без аргументов', () => { 
    expect(mapArrToString([])).toEqual([])
  })
})