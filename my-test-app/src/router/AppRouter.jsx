import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { AsyncListPage } from '../pages/AsyncListPage';
import { FormPage } from '../pages/Form';
import { PostPage } from '../pages/PostsPage';
import { PostDatailsPage } from '../pages/PostDetailsPage';
import { ErrorPage } from '../pages/ErrorPage';
import { CounterPage } from '../pages/CounterPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/asyncList' element={<AsyncListPage/>}></Route>
      <Route path='/form' element={<FormPage/>}></Route>
      <Route path='/post' element={<PostPage/>}></Route>
      <Route path='/post/:id' element={<PostDatailsPage/>}/>
      <Route path='/counter' element={<CounterPage/>}/>
      <Route path='/*' element={<ErrorPage/>}></Route>
    </Routes>
  )
}