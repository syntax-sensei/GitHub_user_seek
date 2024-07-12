import React, { useState, useEffect } from 'react'
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const Themer = () => {

  const [theme, setTheme] = useState(null);
  const [symbol, setSymbol] = useState();
  const [butttext, setButtText] = useState();

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
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
      setSymbol(<IoMoonOutline className='absolute right-12 top-1' />)
    } else {
      document.documentElement.classList.remove("dark");
      setButtText("Light")
      setSymbol(<IoSunnyOutline className='absolute right-14 top-1' />)
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
  <section className='flex justify-center'>
    <div className=' flex justify-between w-1/2 mt-20 dark:text-white'>
       <span className='font-bold text-2xl'>
          devfinder
       </span>
      <div>
        <button className='relative' onClick={handleThemeSwitch}>
            {butttext}{symbol}
        </button>
      </div>
    </div>
  </section>
  
)
}

export default Themer