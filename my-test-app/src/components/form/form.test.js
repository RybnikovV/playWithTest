import { render, screen, fireEvent} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Form } from './Form';
import userEvent from '@testing-library/user-event';

describe('Проверка Form', () => {
  // test('renders form component', () => {
  //   render(<Form/>);
  //   const formInput = screen.getByPlaceholderText(/введите имя/i);
  //   const formButton = screen.getByRole('button');
  //   expect(formInput).toBeInTheDocument();
  //   expect(formButton).toBeInTheDocument();
  //   expect(formInput).toMatchSnapshot();
  //   // screen.debug();
  // });

  test('test click event', () => {
    act(() => {
      render(<Form/>);
    });
    const clickBtn = screen.queryByTestId('btnElement');
    const toggleInput = screen.queryByTestId('inputElement');
    expect(clickBtn).toBeInTheDocument();
    expect(toggleInput).toBeInTheDocument();
    expect(clickBtn).toHaveTextContent('У меня нет отчества');
    fireEvent.click(clickBtn);
    expect(screen.queryByTestId('inputElement')).toBeNull;
    expect(clickBtn).toBeInTheDocument();
    expect(clickBtn).toHaveTextContent('Ввести отчество');
  });

  test('test input event', () => {
    act(() => {
      render(<Form/>);
    });
    const input = screen.getByPlaceholderText(/введите имя/i);
    expect(input).toContainHTML('');
    expect(input).toBeInTheDocument();
    // fireEvent.input(input, {
    //   target: {value: '123'}
    // });
    act(() => {
      userEvent.type(input, '123');
    });
    expect(screen.getByTestId('inputTest')).toContainHTML('123');
  })
});