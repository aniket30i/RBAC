import { ToastContainer, toast, Bounce } from "react-toastify";
import LoginForm from "./LoginForm";

const LoginBackground = () => {
  return (
    <div className="h-screen w-screen bg-zinc-950 relative">
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="bg-gradient-to-r from-orange-600 to-stone-300 bg-clip-text xl:text-[10rem] md:text-[8rem] sm:text-[6rem] xs:text-[3rem]  text-transparent text-center">
          Employee Management Simplified
        </h1>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginBackground;
