import React, { Fragment } from 'react'

const Footer = ({ iconLogo, iconOne, iconTwo, iconThree }) => {

  return (
    <Fragment>
    <footer>
      <div id='Social'>
        <a href='https://github.com/cobyeast'><i className={iconOne}/><p>cobyeast</p></a>
        <a href='https://www.linkedin.com/in/coby-eastwood-196b12152/'><i className={iconTwo}/><p>cobyeastwood</p></a>
        <a href='https://twitter.com/cobyeastwood'><i className={iconThree}/><p>@cobyeastwood</p></a>
      </div>
      <div className='Footer-Two'>
        <p>Copyright &copy;2020. All Rights Reserved.</p>
      </div>
    </footer>
    </Fragment>
  )
}

Footer.defaultProps = {
  iconLogo: 'fab fa-cuttlefish',
  iconOne: 'fab fa-github',
  iconTwo: 'fab fa-linkedin',
  iconThree: 'fab fa-twitter'
}

export default Footer
