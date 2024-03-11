import { useState } from "react";

export default function UserMaster() {
  const [role, setRole] = useState("user");

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  return (
    <>
      <h1 className="text-xl font-medium  ">User Master</h1>
      <div className="flex min-h-full flex-1 flex-col justify-center py-4 sm:px-6 lg:px-8">
      
        <div className=" sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-8 border border-gray-300 rounded-md sm:rounded-lg sm:px-12">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className=" ">
                <h2 className="block text-sm font-medium leading-6 text-gray-900 mb-4">Select Role:</h2>
            <div className="flex gap-4 items-center">
                  <label className="inline-flex items-center  ">
                    <input
                      type="radio"
                      value="user"
                      checked={role === "user"}
                      onChange={handleRoleChange}
                      className="form-radio h-4 w-4 text-[#0066FF] outline-none focus:outline-none"
                    />
                    <span className="ml-2">User</span>
                  </label>
                  <br />
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="admin"
                      checked={role === "admin"}
                      onChange={handleRoleChange}
                      className="form-radio h-4 w-4 text-[#0066FF] outline-none focus:outline-none"
                    />
                    <span className="ml-2">Admin</span>
                  </label>
                  </div>
              </div>

              <div className="flex gap-4">
                <button
                 onClick={()=> alert("Form Submitted")}
                 className="bg-[#0066FF] w-[50%]  text-white font-medium shadow-sm py-1.5 px-4 rounded"
                >
                  Add
                </button>
                <button
                  type="submit"
                  className="bg-white border w-[50%] shadow-sm border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
