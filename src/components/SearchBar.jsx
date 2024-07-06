import React, {useState} from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {

  const [username, setUsername] = useState("");

  const [userData, setUserData] = useState(null);


    const getUserData = async (username) => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error("User not found");
        }
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserData(null);
      }
      
    };
  
  return (
    <>
    <section className=' p-10 relative flex justify-center top-16'>
      <div className="relative w-1/2">
        <IoSearch className="absolute left-5 top-5 fill-blue-900" />
          <input
            type="text"
            placeholder="Search GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='p-4 pl-14 rounded-md focus:outline-none w-full shadow-lg'
          />
          <button onClick={() => getUserData(username)}
            className="absolute right-2 top-2 bottom-2 bg-[#1475ec] text-white rounded-md px-4 hover:bg-blue-600"
          >Search</button>
      </div>
    </section>
  </>
  )
}

export default SearchBar