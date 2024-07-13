import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-7'>
      <div className='flex gap-2 item-center p-2 border rounded-md max-w-md flex item-center'>
        <Search />
        <input type="text" placeholder='Search...' className='outline-none'/>
      </div>
    </div>
  )
}

export default Header