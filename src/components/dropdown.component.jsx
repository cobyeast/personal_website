import React, { useState } from 'react'
import onClickOutside from 'react-onclickoutside'

function Dropdown({ items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([])
  const toggle = () => setOpen(!open)
  Dropdown.handleClickOutside = () => setOpen(false)

  function handleOnClick(item) {
    if (!selection.some(current => current.id === item.id)) {
    if(!multiSelect) {
      setSelection([item]);
    } else if (multiSelect) {
      setSelection([...selection, item])
    } else {
      let selectionAfterRemoval = selection
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      )
      setSelection([...selectionAfterRemoval])
    }}
  }

  return (
    <div className='Dropdown'>
      <span
        className='Down'
        tabIndex={0}
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
        role='button'>
      <i
        className='fas fa-hamburger' />
      <p>{open ? 'close' : ''}</p>
      </span>
      {open && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <button type='button' onClick={() => handleOnClick(item)}>
                <a href={item.href.toLowerCase()}><span>{item.value}</span></a>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside
}

export default onClickOutside(Dropdown, clickOutsideConfig)