
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Blog from './components/Blog/Blog';
import Figure from './components/Figure/Figure';
import QuizDetail from './components/QuizDetail/QuizDetail';

function App() {

  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children:[
      {path: '/', loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'), element: <Home></Home>},
      {path: '/home', loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'), element:<Home></Home>},
      {path:'/quiz/:lang', 
      loader: async({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.lang}`),element:<QuizDetail></QuizDetail>},
      {path: '/figure', loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'), element:<Figure></Figure>},
      {path: '/blog', element: <Blog></Blog>},
      {path: '/*', element: <NotFound></NotFound>}
    ]},
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
  
}

export default App;
