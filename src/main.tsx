import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
<<<<<<< HEAD
=======
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme/theme.ts'
import "./utils/i18n.ts";
>>>>>>> bed5174 ([Feature]: apply multi language for home page (#18))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
