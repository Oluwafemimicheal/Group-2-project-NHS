import Heading from "../components/common/Heading"
import RunningProject from "../components/dashboard/RunningProject"
import TodayTask from "../components/dashboard/TodayTask"

const Dashboard = () => {
  return (
    <div className="space-y-20">
      <Heading />
      <TodayTask />
      <RunningProject />
    </div>
  )
}

export default Dashboard