import React, { useEffect, useState } from 'react'
import Card from '../card/Card';

const Cards = ({handleAddWantToCook}) => {
    const [items,setItems] = useState([]);

    useEffect(()=>{
        fetch('./Data.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
  return (
    <div className='w-2/3 grid gap-6 grid-cols-1 md:grid-cols-2'>
        {
            items.map(item => <Card key={item.id} item={item} handleAddWantToCook = {handleAddWantToCook}></Card>)
        }
    </div>
  )
}

export default Cards