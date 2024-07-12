import React from 'react'
import './App.css'
import SearchBar from "./components/SearchBar";
import Themer from "./components/Themer";
import { QueryClientProvider, QueryClient} from '@tanstack/react-query';


function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen dark:bg-bgcolor">
        <Themer/>
        <SearchBar/>
      </div>
    </QueryClientProvider>
  )
}

export default App
