import { Home } from '../home/Home'

import { Navbar } from "../navbar/Navbar";

export function Layout() {
  

  return (
    
      <div className='layout-container'>
        <Navbar />
        <Home />
      </div>
  );
}

