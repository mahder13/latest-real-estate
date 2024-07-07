import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react'

const Header = () => {
  return (
    <Header className="bg-slate-200 shadow-md" >
      <div className="flex justify-between items-center-max-w-6xl mx-auto p-3" >
      <link to ="/">
         <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500 codingcleverly"></span>
            <span classNam="text-slate-700">Estate</span>
        </h1>
        </link>
       <from className="bg-slate-100 p-3 rounded-lg flex-center">
        <input
         type="text"
          placeholder='search...' 
          className="bg-tranparent foucus:outline-none w-24 sm:w-64"/>
<FaSearch className='text-slate-600'/>
      </from>
      <ul className="flex gap-4">
        <link to="/">
        <li className="hidden  sm:inline  text-slate-700 hover:underline">
            Home
            </li>
        </link>
        <link to="/ About">
        <li className="hidden  sm:inline  text-slate-700 hover:underline ">
            About
            </li>
            </link>
            <link to="/Sign In">
        <li className="text-slate-700 hover:underline">Sign In</li>
        </link>
      </ul>
      </div>
    </Header>
  )
}

export default Header
