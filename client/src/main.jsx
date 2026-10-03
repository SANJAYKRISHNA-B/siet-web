import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
/* Core Design System & Tokens */
import './styles/variables.css';
import './styles/global.css';
import './styles/utilities.css';

/* Common UI Components */
import './components/common/Header.css';
import './components/common/Footer.css';
import './components/common/Modals.css';

/* Domain & Page Styles */
import './pages/Home/Home.css';
import './pages/About/About.css';
import './pages/Academics/Academics.css';
import './pages/Accreditation/Accreditation.css';
import './pages/Admissions/Admissions.css';
import './pages/Campus/Campus.css';
import './pages/Careers/Careers.css';
import './pages/COE/Coe.css';
import './pages/Contact/Contact.css';
import './pages/Placements/Placements.css';

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
