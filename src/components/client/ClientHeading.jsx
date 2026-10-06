import { FaPlus, FaSearch } from 'react-icons/fa'

const ClientHeading = () => {
  return (
    <div className="space-y-5">
      <h1 className='text-[22px] text-green-800 font-semibold'>Clients View Portal</h1>

      <div className='grid lg:grid-rows-2 gap-8 bg-white p-3 items-center rounded-md'>
        <div className='space-x-6 w-full'>
          <button>All Client</button>
          <button>Client Portal</button>
          <button>Automation</button>
          <button>Settings</button>
        </div>
        <div className="space-x-2 flex justify-between items-center w-full">
          <form className="flex items-center gap-1.5 border p-1 w-100 rounded-md">
            <FaSearch size={15} className="text-gray-500" />
            <input type="search" placeholder='Search' className="w-full" />
          </form>
          <div className='space-x-3 flex gap-1'>
            <button className=" px-3 py-1 border rounded-md">Import CSV</button>
            <button className="flex items-center gap-1 px-3  py-1 border rounded-md"><FaPlus/> Add New Client</button>
          </div>
        </div>
      </div>

      <div className='grid lg:grid-cols-5 text-gray-800 font-semibold text-lg'>
          <h3 className='col-span-2'>Client</h3>
          <h3>Client Name</h3>
          <h3>Contact Email</h3>
          <h3>Tag</h3>
      </div>


    </div>
  )
}

export default ClientHeading
