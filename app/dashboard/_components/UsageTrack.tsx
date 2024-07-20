import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function UsageTrack() {
  return (
    <div className='m-5'>
      <div className='text-white bg-primary p-3 rounded-lg'>
        <h2>Credits</h2>
        <div className='h-2 bg-gray-400 w-full rounded-full  mt-3'>
          <div className='h-2 bg-green-100 rounded-full' style={{ width: '35%' }}>

          </div>
        </div>
        <h2 className='py-2 text-sm'>350/10,000 credits used</h2>
      </div>

      <Link href={'/dashboard/billing'}>
      <Button className='my-3 w-full'>Upgrade plan</Button>
      </Link>
    </div>
  )
}

export default UsageTrack