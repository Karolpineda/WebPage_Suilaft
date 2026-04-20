import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Siempre que cambie la ruta, hacemos scroll suave hasta arriba
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      // En navegadores que no soportan smooth, hacer instantáneo
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}
