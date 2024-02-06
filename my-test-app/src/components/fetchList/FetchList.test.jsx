import { render, screen, fireEvent } from '@testing-library/react';
import { FetchList } from './FetchList';
import axios from 'axios';
import { mockDataPosts } from './mockData';
import { MemoryRouter, Routes } from 'react-router-dom';
import { renderWitchRouter } from '../../helpers/test/renderWithRouter';

jest.mock('axios');

describe('Тестирование компонента с сетевыми запросами', () => {

  test('Мокаем запрос', async () => {
    axios.get.mockReturnValue(mockDataPosts);
    // render(<FetchList/>);
    render(
      <MemoryRouter>
        <FetchList/>
      </MemoryRouter>
    );
    const posts = await screen.findAllByTestId('post-item');
    expect(posts.length).toBe(5);
    // screen.debug();
  });

  test('Тестируем переход на ссылку поста', async () => {
    axios.get.mockReturnValue(mockDataPosts);
    renderWitchRouter(<FetchList/>)
    const posts = await screen.findAllByTestId('post-item');
    fireEvent.click(posts[0]);
    expect(screen.getByTestId('post-details')).toBeInTheDocument();
  });
});