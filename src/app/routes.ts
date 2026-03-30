import { createBrowserRouter } from 'react-router';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'soluciones', Component: Solutions },
      { path: 'nosotros', Component: About },
      { path: 'contacto', Component: Contact },
    ],
  },
  {
    path: '*',
    Component: NotFound,
  },
]);