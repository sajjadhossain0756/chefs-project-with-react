import React from 'react'

const Header = () => {
  return (
    <div>
        <nav>
           <div className="navbar bg-base-100">
               <div className="navbar-start">
                <a className="text-2xl md:text-3xl font-bold">Recipe Calories</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-sm font-semibold text-gray-600">
                  <li><a>Home</a></li>
                  <li><a>Recepies</a></li>
                  <li><a>Abouts</a></li>
                  <li><a>Search</a></li>
                </ul>
              </div>
              <div className='navbar-end'>
              <div className=" flex gap-2">
              <div className="form-control">
                   <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
              </div>
             <div className="dropdown dropdown-end">
                <div tabindex="0" role="button" className="btn btn-ghost btn-circle avatar">
                   <div className="w-10 rounded-full">
                     <img
                       alt="Tailwind CSS Navbar component"
                       src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                   </div>
                </div>
                <ul
                   tabindex="0"
                   className="menu lg:hidden menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                   <li>
                     <a>
                       Home
                     </a>
                   </li>
                   <li><a>Recepies</a></li>
                   <li><a>About</a></li>
                   <li><a>Search</a></li>
                 </ul>
             </div>
              </div>
              </div>
            </div>
        </nav>
    </div>
  )
}

export default Header