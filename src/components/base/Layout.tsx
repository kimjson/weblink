import React from 'react';

import './Layout.css';

interface Props {
  title: string;
}

const Layout: React.FC<Props> = ({title, children}) => {
  return (
    <div className="Layout">
      <h2 className="Layout-title">{title}</h2>
      {children}
    </div> 
  )
}

export default Layout;