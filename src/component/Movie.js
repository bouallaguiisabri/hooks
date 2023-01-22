import React from 'react'

const movie = ({elm}) => {
  return (
    <div>
      <div className="div">
        <img src={elm.posterURL}/>
    <h2>{elm.title}</h2>
    <h2>{elm.description}</h2>
    <h2>{elm.rating}</h2>
    </div>
    </div>
  )
}

export default movie