import React from 'react';
import './titleFS.css';

export default function titleFS({title}) {
  return (
    <div className='title_container'>
        <h1 className='title'>{title}</h1>
    </div>
  )
}
