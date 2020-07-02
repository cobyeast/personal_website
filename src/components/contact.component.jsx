import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    return (
      <div className='Footer-One'>
      <span className='Vert-Left'>
        <span className='Vertical-Text'><a href='mailto:cobyeastwood@gmail.com'>cobyeastwood@gmail.com</a></span>
        <div className='Vertical'></div>
      </span>
      <span className='Footer-Contact'>
        <span>
        <h4><strong>Contact</strong></h4>
          <p>Thank you for checking out my website! If you have any further questions or would like to check out more of my work feel free to explore my GitHub profile — <strong>cobyeast</strong>. Otherwise, you can email me at <strong>cobyeastwood-&#64;-gmail.com</strong>.</p>
        </span>
      </span>
      <span className='Vert-Right'>
        <span className='Vertical-Text'><a href='https://github.com/cobyeast'>cobyeast - github</a></span>
        <div className='Vertical'></div>
      </span>
    </div>
    )
  }
}

export default Contact
