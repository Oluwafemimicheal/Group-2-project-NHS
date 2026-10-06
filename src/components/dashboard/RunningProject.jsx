import React from 'react'

const RunningProject = () => {
  return (
    <div className='space-y-5 '>
      <h1 className='font-semibold text-lg'>Running Projects</h1>
      <div className='grid lg:grid-cols-3 gap-5'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}


const ProjectCard = ({ data }) => {
  return (
    <div className='flex flex-col justify-between items-start w-full gap-6 shadow-md bg-white rounded-md  border-2 border-gray-200 hover:border-green-300 hover:shadow-lg overflow-hidden'>
      <div className='flex flex-col justify-between items-start w-full gap-6 p-3'>
        <div className='flex justify-between items-center w-full'>
          <h1 className='font-bold text-gray-600'>ODX Dashboard UI</h1>
          <small className='px-1 py-0.5 border rounded-sm'>In Progress</small>
        </div>

        <div className='w-full'>
          <h3>Task Completed: <span>7/10</span></h3>
          <div className='w-full h-2 rounded-sm bg-gray-300 overflow-hidden'>
            <div className='w-30 h-2 rounded-sm bg-green-700'></div>
          </div>
        </div>

        <div className='flex justify-between items-center w-full'>
          <div>
            <h3 className='text-gray-600 font-bold'>Client: <span className='text-blue-700 font-semibold'>DXHub</span></h3>
            <h3 className='text-gray-600 font-semibold'>Deadline: <span className='text-red-500 font-semibold'>23-Dec-2026</span></h3>
          </div>
          <div className='relative flex items-center w-14'>
            <div className='w-10 h-10 bg-orange-600 rounded-full flex justify-center items-center text-white font-bold absolute right-0 top-0'>AX</div>
            <div className='w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center text-white font-bold'>NG</div>
          </div>
        </div>
      </div>

      
      <div className='border-t border-gray-200 flex w-full'>
        <button className='w-full border-r p-3 border-gray-200 cursor-pointer hover:bg-blue-700 hover:text-white transition'>View Project</button>
        <button className='w-full p-3 cursor-pointer hover:bg-green-700 hover:text-white transition'>Edit Project</button>
      </div>

    </div>
  )
}

export default RunningProject
