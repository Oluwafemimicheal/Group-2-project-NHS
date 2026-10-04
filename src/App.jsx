import { Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import Clients from "./pages/Clients"
import Payments from "./pages/Payments"
import Invoice from "./pages/Invoice"
import Team from "./pages/Team"
import Projects from "./pages/Projects"


const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index path="/" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="clients" element={<Clients />} />
          <Route path="payments" element={<Payments />} />
          <Route path="invoices" element={<Invoice />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App
