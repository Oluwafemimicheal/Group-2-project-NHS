
const ClientList = () => {
  return (
    <div>
      <ul className="space-y-3 mt-5">
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
      </ul>
      
      <div className='float-end mt-8 space-x-3'>
        <button className='py-0.5 rounded-md px-2 border font-semibold text-sm'>Prev</button>
        <button className='py-0.5 rounded-md px-2 border font-semibold text-sm'>1</button>
        <button className='py-0.5 rounded-md px-2 border font-semibold text-sm'>2</button>
        <button className='py-0.5 rounded-md px-2 border font-semibold text-sm'>3</button>
        <button className='py-0.5 rounded-md px-2 border font-semibold text-sm'>Next</button>
      </div>
    </div>
  )
}


const ListCard = () => {
  return (
    <li className="grid grid-cols-5 bg-white rounded-md p-2 border border-gray-200 hover:shadow items-center">
      <div className="space-x-5 flex items-center col-span-2">
        <div className="w-8 h-8 rounded-md bg-blue-800 flex items-center justify-center font-bold text-white text-sm">LW</div>
        <p className="font-semibold">The Landmark Way</p>
      </div>
      <p>Mr Daniel Adeboye</p>
      <p>daniel234@gmail.com</p>
      <p>Real Estate</p>
    </li>
  )
}
export default ClientList
