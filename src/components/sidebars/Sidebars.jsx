import React from 'react'
import WantToCook from '../wantToCook/WantToCook'
import CurrentlyCooking from '../currentlyCooking/CurrentlyCooking';

const Sidebars = ({wantToCook,handleCurrentlyCooking,currentCooking,totalTime,totalCalories}) => {


  return (
    <div className='w-1/3 shadow border-2 p-3 rounded-xl'>
        {/* want to cook section start here */}
        <div>
            <h1 className='text-2xl font-bold border-b-2 pb-3 text-center'>Want to Cook: {wantToCook.length}</h1>
            <div className="overflow-x-auto">
               <table className="table">
                 <thead>
                   <tr>
                     <th>Name</th>
                     <th>Time</th>
                     <th>Calories</th>
                     <th></th>
                   </tr>
                 </thead>
                 <tbody>
                  {wantToCook.map((item,indx) => 
                  <WantToCook 
                  key={indx} indx={indx} item={item} handleCurrentlyCooking={handleCurrentlyCooking}></WantToCook>)}
                 </tbody>
               </table>
            </div>
        </div>
        {/* currently cooking section start here */}
        <div className='mt-20'>
            <h1 className='text-2xl font-bold border-b-2 pb-3 text-center'>Currently Cooking: {currentCooking.length}</h1>
            <div className="overflow-x-auto">
               <table className="table">
                 <thead>
                   <tr>
                      <th></th>
                     <th>Name</th>
                     <th>Time</th>
                     <th>Calories</th>
                   </tr>
                 </thead>
                 <tbody>
                  {currentCooking.map((item,indx) => 
                  <CurrentlyCooking 
                  key={indx} indx={indx} 
                  item={item} 
                 ></CurrentlyCooking>)}
                  <tr>
                     <td></td>
                     <td></td>
                     <td>Total Time:{totalTime}</td>
                     <td>Total Calories:{totalCalories}</td>
                  </tr>
                 </tbody>
               </table>
            </div>
        </div>
    </div>
  )
}

export default Sidebars