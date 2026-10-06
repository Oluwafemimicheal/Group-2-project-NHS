import { FaCalendar, FaCheck, FaFilter, FaSearch } from "react-icons/fa"
import { IoEllipsisVerticalSharp, IoLinkSharp } from "react-icons/io5";
import { LuArrowRight } from "react-icons/lu";



const PaymentList = () => {
  return (
    <div className='grid grid-cols-6 gap-5 relative'>
      <div className='col-span-4'>

        <div className='flex justify-between items-center'>
          <div className='space-x-4 font-semibold'>
            <button>Unsent</button>
            <button>In Progress</button>
            <button>Sent</button>
            <button>Paid</button>
          </div>

          <div className='flex items-center gap-2'>
            <button className="border border-gray-500 py-1.5 p-2 rounded-md cursor-pointer hover:bg-gray-200 transition"><FaSearch className="text-green-700" /></button>
            <button className="border border-gray-500 py-1.5 p-2 rounded-md cursor-pointer hover:bg-gray-200 transition"><FaFilter className="text-green-700" /></button>
            <button className="flex items-center gap-3 border border-gray-500 py-0.5 cursor-pointer hover:bg-gray-200 transition  p-2 rounded-md text-green-700">Data range <FaCalendar /></button>
          </div>

        </div>

        <div className="mt-16">
          <div className='grid grid-cols-6 gap-5'>

            <div className='space-y-3 col-span-2'>
              <p>Customer & Invoice No</p>
              <p className="font-semibold text-green-700">This Week</p>
            </div>

            <p>Date</p>
            <p>Status</p>
            <p>Amount</p>
          </div>
        </div>

        <ul className="mt-2">
          <PaymentCard />
          <PaymentCard />
          <PaymentCard />
          <PaymentCard />
          <PaymentCard />
        </ul>
        <div className='float-end mt-8 space-x-3'>
          <button className='py-0.5 rounded-md px-2 border font-semibold text-sm'>Prev</button>
          <button className='py-0.5 rounded-md px-2 border font-semibold text-sm'>1</button>
          <button className='py-0.5 rounded-md px-2 border font-semibold text-sm'>2</button>
          <button className='py-0.5 rounded-md px-2 border font-semibold text-sm'>3</button>
          <button className='py-0.5 rounded-md px-2 border font-semibold text-sm'>Next</button>
        </div>
      </div>


      <div className='col-span-2 bg-gray-100 h-140 rounded-md p-5 shadow'>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">Payment activity</h1>
          <div className="flex gap-5 items-center">
            <span className="px-2 py-1 flex items-center gap-1 bg-white"><FaCheck size={14} /> Paid</span>
            <p>Mark on Jan 10, 2026</p>
          </div>
          <div className="flex justify-between items-center mt-5 font-semibold">
            <h3>Payment Method</h3>
            <small>Credit Card</small>
          </div>
        </div>

        <div className="border-t border-white mt-5 space-y-5">
          <h2 className="mt-5 font-semibold text-lg">Invoice Details</h2>
          <div className="flex justify-between items-start gap-5">

            <ul className="w-full space-y-5">
              <li>
                <p className="font-semibold uppercase text-sm text-gray-800">Business Name</p>
                <h2>M&GEL</h2>
              </li>
              <li>
                <p className="font-semibold uppercase text-sm text-gray-800">Amount</p>
                <h2>$320.00</h2>
              </li>
              <li>
                <p className="font-semibold uppercase text-sm text-gray-800">Due Date</p>
                <h2>05/11/2026</h2>
              </li>
              <li>
                <p className="font-semibold uppercase text-sm text-gray-800">Invoice NO</p>
                <h2>45278</h2>
              </li>
            </ul>


            <div className="bg-white h-50 rounded-md w-full">

            </div>
          </div>
          <p className="text-center flex justify-center items-center gap-2 cursor-pointer hover:text-blue-900"><IoLinkSharp/> Copy Payment Link</p>
        </div>
      </div>
    </div>
  )
}


const PaymentCard = () => {
  return (
    <li className="grid grid-cols-6 gap-5 items-center bg-white py-4 px-3 border-y border-green-300">
      <div className="col-span-2">
        <p>Solution Inc.</p>
        <small>35411</small>
      </div>

      <div>
        <p>Jan 05, 2026</p>
      </div>

      <div>
        <span className='px-2 bg-orange-200 border border-orange-700 text-xs text-orange-700 rounded-2xl'>Outstanding</span>
      </div>

      <div className="col-span-1 font-semibold">
        <h3>$305.00</h3>
      </div>

      <div className="space-x-3 flex items-center gap-2">
        <IoEllipsisVerticalSharp size={35} className="px-2 hover:bg-gray-200 transition cursor-pointer text-gray-500" />
        <LuArrowRight size={35} className="px-2 hover:bg-gray-200 transition cursor-pointer text-gray-500" />
      </div>
    </li>
  )
}
export default PaymentList
