import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Тестирование компонента App', () => {
  test('Проверка корректности отрисовки', () => {
    // render(<App></App>);
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    );
    // const promo = screen.getByText(/and save to reload/i);
    const helloWorld = screen.queryByText(/hello world/i);
    const linkAsyncList = screen.getByTestId('to-async-list');
    const linkForm = screen.getByTestId('to-form');
    const linkPosts = screen.getByTestId('to-post');
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    fireEvent.click(linkForm);
    // userEvent.click(linkForm);
    expect(screen.getByTestId('form-page')).toBeInTheDocument();

    // const FormComponent = screen.get
    // expect(promo).toBeInTheDocument();
    expect(helloWorld).toBeNull();
  });

  test('Проверка перехода на error page', () => {
    render(      
      <MemoryRouter initialEntries={['/asdkfasd']}>
        <App/>
      </MemoryRouter>
    );
    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});
