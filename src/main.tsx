import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force dark mode and handle potential 3D errors
document.documentElement.classList.add('dark');
localStorage.setItem('theme', 'dark');

// Error boundary for 3D components
window.addEventListener('error', (event) => {
  if (event.error && event.error.message && event.error.message.includes('three')) {
    console.warn('3D rendering fallback activated');
    // The error boundary will handle the fallback
  }
});

createRoot(document.getElementById("root")!).render(<App />);
