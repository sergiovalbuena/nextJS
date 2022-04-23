import Navbar from 'components/Navbar/Navbar'
import React from 'react'

const Layout: React.FC = ({children}) => {
  return (
    <div>
        <Navbar />    
        {children}
        <footer>This is the Footer</footer>
    </div>
  )
}

export default Layout