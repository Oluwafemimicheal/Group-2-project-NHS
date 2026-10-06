import React from 'react'

const ProjectList = () => {
  return (
    <div className='space-y-2 mt-2'>
      <ListCard/>
      <ListCard/>
      <ListCard/>
      <ListCard/>
      <ListCard/>
      <ListCard/>
      <ListCard/>
      <ListCard/>
      <ListCard/>

      <div className='float-end py-8 space-x-3'>
        <button className='py-0.5 rounded-md px-2 border font-semibold text-sm'>Prev</button>
        <button className='py-0.5 rounded-md px-2 border font-semibold text-sm'>1</button>
        <button className='py-0.5 rounded-md px-2 border font-semibold text-sm'>2</button>
        <button className='py-0.5 rounded-md px-2 border font-semibold text-sm'>3</button>
        <button className='py-0.5 rounded-md px-2 border font-semibold text-sm'>Next</button>
      </div>
    </div>
  )
}


const ListCard = ({ data }) => {
  return (
    <div className='grid grid-cols-6 items-center w-full p-3 bg-white rounded-md  border border-gray-100 hover:border-green-300 overflow-hidden'>
      <div className='col-span-2'>
        <h1 className='font-semibold'>DX Dashboard System UI</h1>
      </div>
      <div>
       <span className='px-3 bg-green-200 border border-green-700 text-xs text-green-700 rounded-2xl'>In Progress</span>
      </div>
      <div>
        <div className='relative flex items-center w-17'>
          <div className='w-8 h-8 bg-orange-600 rounded-full flex justify-center text-xs items-center text-white font-bold absolute right-0 top-0'>AX</div>
          <div className='w-8 h-8 bg-slate-600 rounded-full flex justify-center text-xs  items-center text-white font-bold absolute right-6 '>NG</div>
          <div className='w-8 h-8 bg-blue-600 rounded-full flex justify-center text-xs  items-center text-white font-bold'>NG</div>
        </div>
      </div>
      <div>
        <h3 className='font-semibold'>Grade A</h3>
      </div>
      <div>
        <span className='px-3 bg-orange-200 border border-orange-700 text-xs text-orange-700 rounded-2xl'>Pending</span>
      </div>
    </div>
  )
}
export default ProjectList
