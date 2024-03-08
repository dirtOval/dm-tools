import {createRoot} from 'react-dom/client';
import React from 'react';

import { AppRoutes } from '../routes';
import TestComponent from './TestComponent';

const root = createRoot(document.body);
root.render(<TestComponent />);
// root.render(<AppRoutes />);

