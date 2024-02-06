import './App.css';
import {Link } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';


function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <Link to='/' data-testid="to-main">Главная</Link>
        <Link to='/asyncList' data-testid="to-async-list">
          Список с асинхронным кодом
        </Link>
        <Link to='/form' data-testid="to-form">Форма</Link>
        <Link to='/post' data-testid="to-post">Пример сетевого запроса</Link>
        <Link to='/counter' data-testid="to-counter">Тестирование redux(счетчик)</Link>
        <AppRouter></AppRouter>
      </div>
    </div>
  );
};

export default App;
