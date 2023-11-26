import React from 'react'
import SearchBar from '../../../components/searchBar'

const WelcomeAndSearch = () => {
  return (
    <div className='flex justify-between'>
        <div className='text-[#000000] text-[25px] font-Inter font-[500]'>Hello Bolaji 👋🏼,</div>

        <SearchBar className='' handleChange={()=> {}} placeholderText='Search'/>
    </div>
  )
}

export default WelcomeAndSearch