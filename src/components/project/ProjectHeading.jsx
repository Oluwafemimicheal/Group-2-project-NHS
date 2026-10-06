
import {FaSearch} from "react-icons/fa"

const ProjectHeading = () => {
  return (
    <div className="space-y-5">
      <h1 className='text-[22px] text-green-800 font-semibold'>My Project List</h1>
      
      <div className='grid lg:grid-cols-2 bg-white p-3 items-center rounded-md'>
        <div className='space-x-6 w-full'>
          <button>All</button>
          <button>Active</button>
          <button>Draft</button>
          <button>Archived</button>
        </div>
        <div className="space-x-2 flex justify-end">
          <form className="flex items-center gap-1.5 border p-1 w-100 rounded-md">
            <FaSearch size={15} className="text-gray-500"/>
            <input type="search" placeholder='Search' className="w-full"/>
          </form>
          <button className=" px-3 border rounded-md">Sort</button>
          <button className="px-3 border rounded-md">Add</button>
        </div>
      </div>

      <div className="grid lg:grid-cols-6 font-semibold">
          <div className="col-span-2">
            Project
          </div>
          <div className="col-span-1">
            Status
          </div>
          <div className="col-span-1">
            Staff Involved
          </div>
          <div className="col-span-1">
            Titled Grade
          </div>
          <div className="col-span-1">
            Approved
          </div>
      </div>
    </div>
  )
}

export default ProjectHeading
