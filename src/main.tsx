import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import QualquerCoisa from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QualquerCoisa/>
  </StrictMode>,
)
