import React from 'react'

const CurrentlyCooking = ({indx,item}) => {
    const {id,title,time,calories} = item
  return (
    <tr className="hover">
        <th>{indx + 1}</th>
        <td>{title}</td>
        <td>{time}</td>
        <td>{calories}</td>
    </tr>
  )
}

export default CurrentlyCooking