import React from 'react'
import Dropdown from './dropdown.component.jsx'
import { Spring } from 'react-spring/renderprops'

const items = [
  {
    id: 0,
    value: 'Home',
    href: '/'
  },
  {
    id: 1,
    value: 'Projects',
    href: 'projects'
  },
  {
    id: 2,
    value: 'Blog',
    href: 'blog'
  }
]

const Navbar = ({ iconLogo, iconOne, iconTwo, iconThree }) => {
  
  return (
      <Spring
        from={{ opacity: 0, marginTop: -200}}
        to={{ opacity: 1, marginTop: 0}}
        config={{ delay: 500, duration: 500 }}>
        { props => (
        <nav style={props} className='Navbar'>
          <div className='Left'>
          <a href='/'><i className={iconLogo}/></a>
          </div>
          <div className='Right'>
          {/* <a href='/resume'><button className='btn'>Resume</button></a> */}
            <Dropdown items={items}/>
            <a href='/'><p id='nav-p'>Home</p></a>
            <a href='/projects'><p id='nav-p'>Projects</p></a>
            <a href='/blog'><p id='nav-p'>Blog</p></a>
          </div>
        </nav> ) }
      </Spring>
  )
}

Navbar.defaultProps = {
  iconLogo: 'fab fa-cuttlefish',
  iconOne: 'fab fa-github',
  iconTwo: 'fab fa-linkedin',
  iconThree: 'fab fa-twitter'
}

export default Navbar