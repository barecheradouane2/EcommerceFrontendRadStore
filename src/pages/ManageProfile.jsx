import AdminPageHeader from "../components/AdminPageHeader";
import Avatar from "../components/Avatar";
import { Trash2 } from "lucide-react";

import { Upload } from "lucide-react";
import UserAccess from "../components/UserAccess";

function ManageProfile() {
  return (
    <div>
      <AdminPageHeader Title="Profile Details" />
      <div className="flex  flex-wrap gap-4 bg-main-100 items-center rounded-xl p-4">
        <Avatar
          url="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          name="radouane"
        />

        <button className="bg-vert-100  cursor-pointer flex items-center gap-1 text-white px-2 py-1 rounded-lg">
          {" "}
          <Upload size={`16px`} />
          Change Picture
        </button>

        <button className="border-2 cursor-pointer border-vert-100 flex items-center gap-1 text-vert-100 px-2 py-1 rounded-lg">
          <Trash2 size={`16px`} />
          Delete
        </button>
      </div>

      <div className="bg-main-100 rounded-xl p-6 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full border bg-gray-200 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-vert-100 focus:border-transparent sm:text-sm"
            placeholder="Full Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            className="mt-1 block w-full border bg-gray-200 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-vert-100 focus:border-transparent sm:text-sm"
            placeholder="Email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full border bg-gray-200 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-vert-100 focus:border-transparent sm:text-sm"
            placeholder="Last Name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium text-gray-700">
            Access
          </label>
          <UserAccess Usertype="Admin" />
        </div>

        <div className=" flex gap-2">

            <button className="bg-vert-100 cursor-pointer text-white px-4 py-2 rounded-lg">Save Change</button>
            
            <button className="text-black cursor-pointer border-2 border-gray-300 bg-white px-4 py-2 rounded-lg">Cencel</button>
        </div>



      </div>
    </div>
  );
}

export default ManageProfile;
