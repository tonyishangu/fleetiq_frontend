import React, { useState } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import ArticleIcon from '@mui/icons-material/Article';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`${open ? "w-64" : "w-20"} font-medium text-[#5D5FEF] border-r-2`}
    >
      <button className="p-4.5 shadow w-64 flex" onClick={() => setOpen(!open)}>
        {" "}
        <h1> ☰ {open && "FleetIQ"} </h1>
      </button>
      <nav className="mt-5 pl-6">
        <Link to="/dashboard" className="flex items-center gap-3 px-4 hover:bg-[#5D5FEF] hover:text-white h-8 w-50 rounded">
          <DashboardIcon /> {open && "Dashboard"}
        </Link>
        <Link to="/orders" className="flex items-center gap-3 px-4 hover:bg-[#5D5FEF] hover:text-white h-8 w-50 rounded">
          <AddShoppingCartIcon /> {open && "Orders"}
        </Link>
        <Link to="/trips" className="flex items-center gap-3 px-4 hover:bg-[#5D5FEF] hover:text-white h-8 w-50 rounded">
          <LocalShippingIcon />{open && "Trips"}
        </Link>
        <Link to="/fuel" className="flex items-center gap-3 px-4 hover:bg-[#5D5FEF] hover:text-white h-8 w-50 rounded">
          <LocalGasStationIcon />{open && "Fuel Entry"}
        </Link>
        <Link to="/workshop" className="flex items-center gap-3 px-4 hover:bg-[#5D5FEF] hover:text-white h-8 w-50 rounded">
          <CarRepairIcon />{open && "Workshop"}
        </Link>
        <Link to="/reports" className="flex items-center gap-3 px-4 hover:bg-[#5D5FEF] hover:text-white h-8 w-50 rounded">
          <ArticleIcon />{open && "Reports"}
        </Link>
        <Link to="/adminstration" className="flex items-center gap-3 px-4 hover:bg-[#5D5FEF] hover:text-white h-8 w-50 rounded">
          <AdminPanelSettingsIcon /> {open && "Adminstration"}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
