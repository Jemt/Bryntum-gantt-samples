import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GanttApp from './GanttApp.tsx'
import './styles.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GanttApp />
  </StrictMode>,
)
