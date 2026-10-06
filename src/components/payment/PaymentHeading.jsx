import React from 'react'

const PaymentHeading = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className='text-[22px] text-green-800 font-semibold'>Payment View</h1>

        <button className="py-1.5 px-4 rounded-md flex items-center gap-1 bg-green-800 text-white cursor-pointer hover:opacity-90">+ New Invoice</button>
      </div>

    </div>
  )
}

export default PaymentHeading
