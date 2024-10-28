import Menu from "../../ui/Menu";
import { useContext } from "react";
import Context from "../../context/context";
import Greetings from "../../ui/Greetings";

const AdminPage = () => {
  const { clickedIcon } = useContext(Context);
  const { userType } = useContext(Context);
  return (
    <div className="relative bg-zinc-950 h-screen">
      <Menu clickedIcon={clickedIcon} UserType={userType} />
      {clickedIcon === "overview" && (
        <>
          <Greetings primary="Welcome" secondary="Admin." />
        </>
      )}
    </div>
  );
};

export default AdminPage;
