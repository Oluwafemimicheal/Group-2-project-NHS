
const TeamList = ({ action, grid }) => {
  return (
    <div className="h-98 overflow-y-auto scrollbar-none">
      {action ?
        <div className="space-y-10">
          <div className={`${grid ? "grid-cols-1" : "grid-cols-4"} grid gap-3`}>
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
        :
        <div className="space-y-10">
          <h1>My Team</h1>
          <div className={`${grid ? "grid-cols-1" : "grid-cols-4"} grid gap-3`}>
            <TeamCard />
            <TeamCard />
          </div>
        </div>}
    </div>
  )
}

const TeamCard = () => {
  return (
    <div className="w-full bg-white border border-gray-300 h-20 rounded-lg p-5">
      <h1>User</h1>
    </div>
  )
}


export default TeamList
