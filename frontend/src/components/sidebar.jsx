import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaHome,
  FaUsers,
  FaProjectDiagram,
  FaFileInvoice,
  FaMoneyBillWave,
  FaBoxOpen,
  FaChartBar,
  FaCog,
  FaUpload,
  FaBell
} from "react-icons/fa";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <FaHome />
  },

  {
    name: "Customers",
    path: "/customers",
    icon: <FaUsers />
  },

  {
    name: "Projects",
    path: "/projects",
    icon: <FaProjectDiagram />
  },

  {
    name: "Quotations",
    path: "/quotations",
    icon: <FaFileInvoice />
  },

  {
    name: "Invoices",
    path: "/invoices",
    icon: <FaFileInvoice />
  },

  {
    name: "Payments",
    path: "/payments",
    icon: <FaMoneyBillWave />
  },

  {
    name: "Inventory",
    path: "/inventory",
    icon: <FaBoxOpen />
  },

  {
    name: "Reports",
    path: "/reports",
    icon: <FaChartBar />
  },

  {
    name: "Notifications",
    path: "/notifications",
    icon: <FaBell />
  },

  {
    name: "Uploads",
    path: "/uploads",
    icon: <FaUpload />
  },

  {
    name: "Settings",
    path: "/settings",
    icon: <FaCog />
  }
];

function Sidebar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const goToPage = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      {/* MOBILE MENU BUTTON */}

      <button
        onClick={() => setOpen(true)}
        className="
          md:hidden
          fixed
          top-4
          left-4
          z-50
          bg-orange-500
          hover:bg-orange-600
          p-3
          rounded-lg
          text-white
          shadow-lg
        "
      >
        <FaBars />
      </button>

      {/* MOBILE OVERLAY */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed
            inset-0
            bg-black/60
            z-40
            md:hidden
          "
        />
      )}

      {/* SIDEBAR */}

      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          w-64 min-h-screen
          bg-[#161B22]
          border-r border-gray-800
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* HEADER */}

        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-orange-500">
              CHOMELEA
            </h1>

            <p className="text-gray-400 text-sm mt-1">
              Welding Management
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-white text-xl"
          >
            <FaTimes />
          </button>
        </div>

        {/* NAVIGATION */}

        <nav className="mt-6 px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => goToPage(item.path)}
              className="
                w-full
                flex
                items-center
                gap-4
                text-left
                px-4
                py-3
                rounded-xl
                text-gray-300
                hover:bg-[#0D1117]
                hover:text-orange-500
                transition-all
              "
            >
              <span className="text-lg">
                {item.icon}
              </span>

              <span className="font-medium">
                {item.name}
              </span>
            </button>
          ))}
        </nav>

        {/* FOOTER */}

        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-800">
          <div className="bg-[#0D1117] rounded-xl p-4">
            <p className="text-sm text-gray-400">
              CHOMELEA System
            </p>

            <p className="text-orange-500 font-bold mt-1">
              Version 1.0.0
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;