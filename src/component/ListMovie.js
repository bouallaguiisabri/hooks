import React from 'react'
import Movie from './Movie'
const ListMovie = ({list}) => {
  return (
    <div>
      {list.map(elm=><Movie elm={elm}/>)}
    </div>
  )
}

export default ListMovie