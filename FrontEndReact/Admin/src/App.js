
import Header from './components/Header';
import Menu from './components/Menu';
import ListProduct from './pages/listProduct';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import publicRoutes from './routes';

function App() {
  return (
    <div className="sb-nav-fixed">
      <BrowserRouter>
      
        <Header />

        <div id="layoutSidenav">
          <Menu />
          <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>

        </div>
      </BrowserRouter>


    </div>
  );
}

export default App;
