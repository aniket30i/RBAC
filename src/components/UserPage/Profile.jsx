const Profile = () => {
  return (
    <div>
      <div className="w-1/2 mt-20 ml-auto mr-auto border-t-2 border-b-2 p-8 rounded-xl">
        <p className="text-slate-100 xl:text-3xl mt-4 mb-8">
          General Information:
        </p>
        <div className="flex justify-start items-center xl:text-xl mt-4 sm:gap-[2rem] lg:gap-[8rem] mb-8">
          <div className="flex flex-col gap-8">
            <p className="text-slate-100">Employee ID: </p>
            <p className="text-slate-100">Name: </p>
            <p className="text-slate-100">Email: </p>
            <p className="text-slate-100">Employement Type:</p>
            <p className="text-slate-100">Date of Birth: </p>
          </div>
          <div className="flex flex-col gap-8 text-orange-500">
            <p className="text-orange-500">12345</p>
            <p className="text-orange-500">John Doe</p>
            <p className="text-orange-500">Gkz0E@example.com</p>
            <p className="text-orange-500">User</p>
            <p className="text-orange-500">01/01/2000</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-1/2 mt-20 ml-auto mr-auto">
        <p className="text-orange-300 sm:text-md">
          * For any change of Information please contact your Administrator
        </p>
      </div>
    </div>
  );
};

export default Profile;
