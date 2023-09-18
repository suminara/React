import React from 'react'

export default function List({ item, isSelected, onItemClick }) {

    

  return (
    <li onClick={() => onItemClick(item.id)}>
      {item.name}
      {isSelected && (
        <div>
          <p>Email: {item.email}</p>
          <p>Job: {item.job}</p>
        </div>
      )}
    </li>
  )
}
