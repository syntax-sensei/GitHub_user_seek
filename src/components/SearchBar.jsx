import React, {useState} from 'react'
import { IoSearch } from "react-icons/io5";
import UserCard from "./UserCard";

const SearchBar = ({onSearch}) => {

  const [username, setUsername] = useState("");

  const handleClick = () =>{
    onSearch(username)
  }


  return (
    <>

<div className='flex justify-center'>
    <div className=' dark:text-white dark:bg-cards-blue relative p-4 pl-14 w-1/2 rounded-lg mt-6 mb-8 shadow-lg'>
        <div className='flex justify-between'>
        <IoSearch className="absolute left-5 top-5 fill-blue-900 dark:fill-blue-300" />
            <input 
            type='text' 
            placeholder='Search' 
            className='w-2/3 text-white bg-transparent focus:outline-none'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ></input>
            <button onClick={handleClick} className='absolute w-20 h-10 top-2 right-2 bottom-2 bg-[#1475ec] text-white rounded-md hover:bg-blue-600'>Search</button>
        </div>
    </div>
    </div>

  </>
  )
}

export default SearchBar