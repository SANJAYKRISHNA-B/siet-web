import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/variables.css';
import './pages/Home/Home.css';
import './styles.css';
import './components/common/Header.css';
import './pages/Accreditation/Accreditation.css';

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
