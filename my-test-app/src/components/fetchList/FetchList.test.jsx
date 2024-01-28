import { render, screen } from '@testing-library/react';
import { FetchList } from './FetchList';
import axios from 'axios';
import { mockDataPosts } from './mockData';

jest.mock('axios');

describe('Тестирование компонента с сетевыми запросами', () => {

  test('Мокаем запрос', async () => {
    axios.get.mockReturnValue(mockDataPosts);
    render(<FetchList/>);
    const posts = await screen.findAllByTestId('post-item');
    expect(posts.length).toBe(5);
    // screen.debug();
  });

});