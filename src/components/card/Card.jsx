import React from 'react'

const Card = ({item,handleAddWantToCook}) => {
    const {id,image,title,description,ingredients,time,calories} = item;
  return (
    <div className='mx-auto'>
        <div className="card  shadow border-2">
          <figure className="px-6 pt-6">
            <img
              src={image}
              alt="Shoes"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-center">
            <h2 className="card-title">{title}</h2>
            <p className='text-left'>{description}</p>
            <div className='divider my-0'></div>
            <p className='text-xl font-bold'>Ingredients: {ingredients.length}</p>
            {ingredients.map((ingredient,indx) => <li key={indx} className='text-gray-600 pl-3 text-sm'>{ingredient}</li>)}
            <div className='divider py-2 my-0'></div>
            <div className='flex gap-5 text-gray-600'>
                <p>{time} miniutes</p>
                <p>{calories} calories</p>
            </div>
            <div className="card-actions">
              <button onClick={()=> handleAddWantToCook(item)} className="btn bg-[#0BE58A] rounded-full w-[160px]">Want to Cook</button>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Card