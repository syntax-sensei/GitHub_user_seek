import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import UserCard from "./UserCard";
import { useQuery } from '@tanstack/react-query';
import Loading from './StatusCards/Loading'
import Error from './StatusCards/Error'
import { getUserData } from '../Query/http';

const SearchBar = () => {

  const [username, setUsername] = useState('');

  const { data, isLoading, isError, refetch, error } = useQuery({
    queryKey: ['prof_info', username],
    queryFn: () => getUserData(username)
    , enabled: false,
  });

  const handleClick = () => {
    refetch();
  }

  return (
    <>
      <div className='flex justify-center'>
        <div className=' dark:text-white dark:bg-cards-blue relative p-4 pl-14 w-1/2 rounded-lg mt-6 mb-8 shadow-lg'>
          <div className='flex justify-between'>
            <IoSearch className="absolute left-5 top-5 fill-blue-900 dark:fill-blue-300" />
            <input
              type='text'
              placeholder='Search GitHub username....'
              className='w-2/3 text-black dark:text-white bg-transparent focus:outline-none'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <button onClick={handleClick} className='absolute w-20 h-10 top-2 right-2 bottom-2 bg-[#1475ec] text-white rounded-md hover:bg-blue-600'>Search</button>
          </div>
        </div>
      </div>

      {isLoading && <Loading />}
      {isError && <Error message={error.message} />} 
      {data && <UserCard userInfo={data} />}

    </>
  )
}

export default SearchBar