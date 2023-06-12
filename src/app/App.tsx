import { useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import LayoutPage from '../pages/Layout/LayoutPage';

// Common Styles
import './common/normalize.scss';

// store
import UserStore from './store/UserStore';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<LayoutPage />}>
      
    </Route>
  </Route>
))

function App() {
  useEffect(() => {
    if (localStorage.getItem('tokenJabaChat')) {
      UserStore.checkAuth();
    }
  }, [])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
