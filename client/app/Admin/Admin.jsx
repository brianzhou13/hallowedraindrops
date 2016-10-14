import React from 'react';
import Navigation from './AdminNavigation.jsx';

import NonCodeNavigation from '../NonCodeNavigation.jsx';

// switching out the navigations from Navigation to a non-code Navigation

const Admin = props => (
  <div>
    <NonCodeNavigation />
    <div>{props.children}</div>
  </div>
)

export default Admin;
