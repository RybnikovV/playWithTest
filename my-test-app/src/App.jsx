import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { AsyncListPage } from './pages/AsyncListPage';
import { ErrorPage } from './pages/ErrorPage';
import { FormPage } from './pages/Form';
import { PostPage } from './pages/PostsPage';
import { MainPage } from './pages/MainPage';

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
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='asyncList' element={<AsyncListPage/>}></Route>
          <Route path='form' element={<FormPage/>}></Route>
          <Route path='post' element={<PostPage/>}></Route>
          <Route path='/*' element={<ErrorPage/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
