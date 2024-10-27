import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Bannar from './components/bannar/Bannar'
import OurRecepies from './components/recepies/OurRecepies'
import Cards from './components/cards/Cards'
import Sidebars from './components/sidebars/Sidebars'

function App() {
  const [wantToCook, setWantToCook] = useState([]);
  const [currentCooking,setCurrentCooking] = useState([]);
  const [totalTime,setTotalTime] = useState(0);
  const [totalCalories,setTotalCalories] = useState(0);

  const handleAddWantToCook = (item) =>{
      if(wantToCook.includes(item)){
         alert("this item already prepering")
         return;
      }else{
        const newItem = [...wantToCook, item];
        setWantToCook(newItem);
      }  
  }
  const handleCurrentlyCooking = (id) =>{
      const findItem = wantToCook.find((item)=> item.id === id);
      const filteredItem = wantToCook.filter((item)=> item.id !== id);
      const newItem = [...currentCooking,findItem]
      setCurrentCooking(newItem);
      setWantToCook(filteredItem);
      setTotalTime(totalTime + findItem.time)
      setTotalCalories(totalCalories + findItem.calories)
  }
  

  return (
    <div className='w-11/12 mx-auto'>
      <Header></Header>
      <Bannar></Bannar>
      <OurRecepies></OurRecepies>
      <div className='flex gap-6'>
         <Cards handleAddWantToCook = {handleAddWantToCook}></Cards>
         <Sidebars 
         wantToCook = {wantToCook}
         handleCurrentlyCooking={handleCurrentlyCooking}
         currentCooking={currentCooking}
         totalTime={totalTime}
         totalCalories={totalCalories}
         ></Sidebars>
      </div>
    </div>
  )
}

export default App
