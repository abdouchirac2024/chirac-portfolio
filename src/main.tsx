import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n/config'
import { ThemeProvider } from './contexts/ThemeProvider'

// Error boundary for 3D components
window.addEventListener('error', (event) => {
  if (event.error && event.error.message && event.error.message.includes('three')) {
    console.warn('3D rendering fallback activated');
    // The error boundary will handle the fallback
  }
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="chirac-portfolio-theme">
    <App />
  </ThemeProvider>
);
