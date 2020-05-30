import React from 'react'

const Cards = ({ iconOne, iconDocument, iconShare, url, title, desc, programs }) => {
  return (
    <div className='Cards'>
      <div>
        <span className='Icon'>
          <span>
          <a href='https://github.com/cobyeast'><i className={iconOne}/></a>
          <i className={iconDocument}/>
          </span>
          <a href={url}><i className={iconShare}/></a>
        </span>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
        <span className='End'>
          <h6>{programs}</h6>
        </span>
    </div>
  )
}

Cards.defaultProps = {
  iconOne: 'fab fa-github',
  iconDocument: 'fas fa-folder-open',
  iconShare: 'fas fa-external-link-alt'
}

export default Cards
