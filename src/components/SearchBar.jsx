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
    <section className='p-10 relative flex justify-center top-16'>
      <div className="relative w-1/2">
        <IoSearch className="absolute left-5 top-5 fill-blue-900" />
          <input
            type="text"
            placeholder="Search GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='font-space p-4 pl-14 rounded-md focus:outline-none w-full shadow-lg'
          />
          <button onClick={handleClick}
            className="absolute right-2 top-2 bottom-2 bg-[#1475ec] text-white rounded-md px-4 hover:bg-blue-600"
          >Search</button>
      </div>



    </section>

    

  </>
  )
}

export default SearchBar