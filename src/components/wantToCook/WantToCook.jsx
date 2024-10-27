import React from 'react'

const WantToCook = ({indx,item,handleCurrentlyCooking}) => {
    const {id,title,time,calories} = item
  return (
      <tr className="hover">
        {/* <th>{indx + 1}</th> */}
        <td>{title}</td>
        <td>{time}</td>
        <td>{calories}</td>
        <td>
        <button
            onClick={()=>{handleCurrentlyCooking(id)}}
            className=' bg-[#0BE58A] px-3 py-2 rounded-full text-[13px] font-bold'
        >Preparing</button>
        </td>
      </tr>
  )
}

export default WantToCook