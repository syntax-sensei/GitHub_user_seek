import { useState } from 'react'
import './App.css'
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import Themer from "./components/Themer";


function App() {

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
    <div className="h-screen dark:bg-bgcolor">
      <Themer/>
      <SearchBar onSearch={getUserData}/>
      {userData && <UserCard userInfo={userData} />}
      </div>
    </>
  )
}

export default App
