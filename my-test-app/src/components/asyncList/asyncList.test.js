import { render, screen } from '@testing-library/react';
import { AsyncList } from './AsyncList';

test('Проверка на отрисовку asyncList', async () => {
  render(<AsyncList></AsyncList>);
  screen.debug()
  const listItem = await screen.findByText(/name_1/i);
  expect(listItem).toBeInTheDocument();
  expect(listItem).toHaveClass('list__item');
  // screen.debug();
});