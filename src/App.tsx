import './styles/App/index.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { Spin } from 'antd';
import Layout from './components/layout/Layout';
import { routes } from './Routes';

const App = () => {

  return (
    <Router>
      <Routes>
        {routes.map((route:any) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Suspense fallback={<Spin />}>
                {route.withLayout ? (
                  <Layout>
                    <route.Component />
                  </Layout>
                ) : (
                  <route.Component />
                )}
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
