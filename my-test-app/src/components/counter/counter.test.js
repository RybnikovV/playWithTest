import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from './Counter';
import { renderWitchProvider } from '../../helpers/test/renderWithProvider';

describe('Проверка counter', () => {
  test('тестирование поведение счетчика', () => {
    // render(
    //   <Provider store={createReduxStore({
    //     counter: {
    //       value: 10
    //     }
    //   })}>
    //     <Counter/>
    //   </Provider>
    // );
    renderWitchProvider(<Counter/>, {
      counter: {
        value: 10
      }
    });

    const increment = screen.getByTestId('counter-increment');
    const decrement = screen.getByTestId('counter-decrement');
    const value = screen.getByTestId('counter-value');

    expect(value).toHaveTextContent(/значение счетчика - 10/i);

    fireEvent.click(increment);

    expect(value).toHaveTextContent(/значение счетчика - 11/i);
  })
});