import React from 'react'
import { FaPlus } from 'react-icons/fa'

const TodayTask = () => {
  return (
    <div className='space-y-5 text-green-800'>
      <h1 className='font-semibold text-lg'>Today's Task</h1>
      <div className='grid lg:grid-cols-3 gap-5'>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />

        <div className='flex gap-3 items-center w-full  p-3 '>
          <div className='flex justify-center items-center w-8 h-8 rounded-full bg-blue-800 text-white'><FaPlus /></div>
          <p>Add New Task</p>
        </div>
      </div>
    </div>
  )
}



const TaskCard = ({ data }) => {
  return (
    <div className='flex justify-between items-start w-full shadow-md bg-white rounded-md p-3 border-2 border-gray-200 hover:border-green-300 hover:shadow-lg'>
      <div className='space-y-2'>
        <h2 className='text-gray-800 font-semibold'>Meeting with MD and Directors</h2>
        <p className='text-gray-600'>Time: 11:00AM</p>
      </div>
      <div>
        <form>
          <input type="checkbox" />
        </form>
      </div>
    </div>
  )
}

export default TodayTask
