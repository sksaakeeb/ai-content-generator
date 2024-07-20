import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-7 flex items-center justify-between'>
      <div className='flex gap-2 item-center p-2 border rounded-md max-w-md item-center'>
        <Search />
        <input type="text" placeholder='Search...' className='outline-none' />
      </div>
      <UserButton />
    </div>
  )
}

export default Header