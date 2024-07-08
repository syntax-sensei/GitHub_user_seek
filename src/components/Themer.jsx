import React, {useState, useEffect} from 'react'
import { IoSunnyOutline } from "react-icons/io5";

const Themer = () => {

  const [theme, setTheme] = useState(null);
  const [butttext, setButtText] = useState();

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setButtText("Dark")
    } else {
      document.documentElement.classList.remove("dark");
      setButtText("Light")
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };



  return (
    <section className='flex justify-center px-10 '>
    <div className=' flex justify-between w-1/2 mt-20'>

        <span className='font-bold text-2xl'>
              devfinder
        </span>
          <div>
        <button className='relative' onClick={handleThemeSwitch}>
              
        {/* <IoSunnyOutline className='absolute right-14 top-1' /> */}
              {butttext}
        </button>
      </div>
    </div>

    </section>
  )
}

export default Themer