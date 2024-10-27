import React from 'react'
import bannar from '../../assets/bannar.jpg'

// const backgroudImage = url('https://i.ibb.co.com/J7x1DDg/bannar.jpg');
const backgroudImage = bannar;

const Bannar = () => {
  return (
    <div>
        <div
            className="hero min-h-[450px] rounded-xl my-8"
            style={{
              backgroundImage: `url(${backgroudImage})`,
            }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <          div className="hero-content text-neutral-content text-center">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-[28px] md:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                <p className="mb-5">
                Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding 
                problems to become an exceptionally well world-class Programmer.
                </p>
                <div className='flex gap-4 justify-center'>
                    <button className="btn bg-[#0BE58A] rounded-full w-40">Explore Now</button>
                    <button className="btn bg-transparent outline-white rounded-full text-white w-40">Our Feedback</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Bannar