import React, {useState} from 'react'
import { Link } from 'react-router-dom'
// import { FaChartBar, FaUsers } from 'react-icons/fa'

const Sidebar = () => {
    const [open, setOpen] = useState(true)
  return (
    <div className={`${open ? 'w-64'  : 'w-20'} text-[#5D5FEF] border-r-2` }>
        <button className="p-4" onClick={() => setOpen(!open)}>
        {" "}
        ☰{" "}
      </button>
      <nav className="mt-5">
        <Link to='/dashboard'>Dashboard</Link>
      </nav>
    </div>
  )
}

export default Sidebar