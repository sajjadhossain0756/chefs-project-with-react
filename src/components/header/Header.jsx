import React from 'react'

const Header = () => {
  return (
    <div>
        <nav>
           <div class="navbar bg-base-100">
               <div class="navbar-start">
                <a class=" text-3xl font-bold">Recipe Calories</a>
              </div>
              <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1 text-sm font-semibold text-gray-600">
                  <li><a>Home</a></li>
                  <li><a>Recepies</a></li>
                  <li><a>Abouts</a></li>
                  <li><a>Search</a></li>
                </ul>
              </div>
              <div className='navbar-end'>
              <div class=" flex gap-2">
              <div class="form-control">
                   <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
              </div>
             <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                   <div class="w-10 rounded-full">
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