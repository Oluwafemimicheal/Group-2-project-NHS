import { Link } from "react-router-dom"

const links = [
  {
    title: "Dashboard",
    apiUrl: "/"
  },
  {
    title: "Projects",
    apiUrl: "/projects"
  },
  {
    title: "Clients",
    apiUrl: "/clients"
  },
  {
    title: "Payments",
    apiUrl: "/payments"
  },
  {
    title: "Invoices",
    apiUrl: "/invoices"
  },
  {
    title: "Team",
    apiUrl: "/team"
  }
]

const Navbar = () => {
  return (
    <header className="py-5 bg-white">
      <nav className="w-300 flex justify-between items-center mx-auto">
        <Link className="font-bold"><span className="bg-green-700 text-white px-1 rounded-md">MLead</span> Desk</Link>
        <div className="flex justify-between items-center gap-14">
          <ul className="flex items-center gap-10">
            {links.map((link, index) => (
              <li key={index}><Link to={link.apiUrl}>{link.title}</Link></li>
            ))}
          </ul>
            <div className="w-10 h-10 bg-green-700 text-white font-semibold rounded-full overflow-hidden flex justify-center items-center">
              <h1>AD</h1>
            </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
