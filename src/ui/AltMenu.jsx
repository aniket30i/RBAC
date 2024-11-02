import { useContext, useState } from "react";
import { motion } from "framer-motion";
import altmenu from "../assets/icons/altmenu.png";
import Context from "../context/context";

const AltMenu = ({ clickedIcon, UserType }) => {
  const { setClickedIcon } = useContext(Context);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="md:block lg:hidden relative">
      {menuOpen ? (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          className="absolute top-80 left-0 border-2 border-orange-400 p-3 h-48 rounded-3xl bg-neutral-900"
        >
          <div className="flex flex-col items-start justify-center gap-3 text-slate-100">
            <div onClick={() => setMenuOpen(false)}>
              <p className="text-lg cursor-pointer ">&#10006;</p>
            </div>
            <div
              className="hover:bg-gray-600 rounded-lg"
              onClick={() => {
                setClickedIcon("overview");
              }}
            >
              <p>Overview</p>
            </div>
            {UserType === "User" && (
              <div
                className="hover:bg-gray-600 rounded-lg"
                onClick={() => setClickedIcon("status")}
              >
                <p>Status</p>
              </div>
            )}
            {UserType === "Admin" && (
              <div
                onClick={() => setClickedIcon("manage")}
                className="hover:bg-gray-600 rounded-lg w-full"
              >
                <p>Manage</p>
              </div>
            )}
            <div
              onClick={() => setClickedIcon("profile")}
              className="hover:bg-gray-600 rounded-lg w-full"
            >
              <p>Profile</p>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="bg-orange-600 absolute top-1 left-0">
          <img
            src={altmenu}
            alt="altmenu"
            className="cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      )}
    </div>
  );
};

export default AltMenu;
