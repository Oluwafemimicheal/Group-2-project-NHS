import { useState } from "react"
import TeamHeading from "../components/team/TeamHeading"
import TeamList from "../components/team/TeamList"

const Team = () => {
  const [switchTeam, setSwitchTeam] = useState(false)
  const [grid, setGrid] = useState(false)
  return (
    <div>
      <TeamHeading action={switchTeam} setAction={setSwitchTeam} grid={grid} setGrid={setGrid} />
      <div className="mt-10">
        <TeamList action={switchTeam} grid={grid} />
      </div>
    </div>
  )
}

export default Team
