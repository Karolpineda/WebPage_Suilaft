import { RouterProvider } from 'react-router';
import { router } from './routes';
import SplashScreen from './components/ui/SplashScreen';

export default function App() {
  return (
    <>
      <SplashScreen />
      <RouterProvider router={router} />
    </>
  );
}
