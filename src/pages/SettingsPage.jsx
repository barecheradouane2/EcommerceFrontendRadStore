import AdminPageHeader from "../components/AdminPageHeader";
import { Store } from "lucide-react";
import { Info } from "lucide-react";
import { Upload } from "lucide-react";

import { ImageUp } from "lucide-react";
import { Usb } from "lucide-react";

function SettingsPage() {
  return (
    <div>
      <AdminPageHeader Title="Setting" />

      <div className="flex flex-col gap-4 bg-main-100 p-4">
        <div className=" flex flex-col gap-4">
          <div className="flex gap-2">
            {" "}
            <Store className="text-third-100" />
            <h3 className="text-xl font-bold">Store Settings</h3>{" "}
          </div>

          <div className=" flex gap-2 py-2 px-4 rounded-2xl border-1 border-blue-500 bg-white">
            <Info className="text-blue-500" /> Your Customer will use this
            information to contact you
          </div>
        </div>

        <div className="flex flex-wrap  justify-between gap-2">
          <div className="flex flex-col gap-2  flex-1 min-w-[250px]">
            <label className="text-base" htmlFor="storename">
              Store Name
            </label>
            <input
              type="text"
              id="storename"
              className="border bg-gray-200 border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="flex flex-col gap-2  flex-1 min-w-[250px]">
            <label className="text-base" htmlFor="storemail">
              Store Mail
            </label>
            <input
              type="text"
              id="storemail"
              className="border bg-gray-200 border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="flex flex-col gap-2 flex-1 min-w-[250px]">
            <label className="text-base" htmlFor="storenumber">
              Store Number
            </label>
            <input
              type="text"
              id="storenumber"
              className="border bg-gray-200 border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4 w-full">
          <label className="text-base" htmlFor="storedesc">
            Store Description
          </label>
          <textarea
            id="storedesc"
            rows={4}
            className="border bg-gray-200 border-gray-300 rounded-md p-2 w-full resize-none"
            placeholder="Write a description..."
          ></textarea>
        </div>

        <div className="flex gap-2 mt-4">
          {" "}
          <ImageUp className="text-third-100" />
          <h3 className="text-xl font-bold">Logo and Favorite Icon</h3>{" "}
        </div>

        <div className="bg-main-100  grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className=" flex gap-2 py-2 px-4 rounded-2xl border-1 border-blue-500 bg-white">
            <Info className="text-blue-500" /> Note: Size must be 450 x 100
          </div>

          <div className=" flex gap-2 py-2 px-4 rounded-2xl border-1 border-blue-500 bg-white">
            <Info className="text-blue-500" /> Note: Size must be 32 x 32
          </div>

          <div className=" flex gap-2 py-2 px-4 rounded-2xl border-1 border-blue-500 bg-white"></div>

          <div className=" flex gap-2 py-2 px-4 rounded-2xl border-1 border-blue-500 bg-white"></div>

          <button className=" flex justify-center cursor-pointer hover:bg-third-100 gap-2 py-1 px-4 rounded-xs bg-second-100 text-black">
            <Upload className="text-black" /> choose Logo
          </button>

          <button className=" flex justify-center cursor-pointer gap-2 py-2 px-4 rounded-xs bg-second-100 text-black hover:bg-third-100">
            <Upload className="text-black" /> choose Icon
          </button>
        </div>

        <div className=" flex flex-col gap-4">
          <div className="flex gap-2">
            {" "}
            <Usb className="text-third-100" />
            <h3 className="text-xl font-bold">Media Settings</h3>{" "}
          </div>

          <div className=" flex gap-2 py-2 px-4 rounded-2xl border-1 border-blue-500 bg-white">
            <Info className="text-blue-500" /> Enter links to your store social
            media acoounts.
          </div>
        </div>

        <div className="flex flex-wrap gap-4 ">
          <div className="flex flex-1 min-w-[200px] flex-col gap-2">
            <label className="text-base" htmlFor="storename">
              Facebook
            </label>
            <input
              type="text"
              id="storename"
              className="border bg-gray-200 border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="flex flex-1 min-w-[200px]  flex-col gap-2">
            <label className="text-base" htmlFor="storemail">
              Twitter
            </label>
            <input
              type="email"
              id="storemail"
              className="border bg-gray-200 border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="flex  flex-1 min-w-[200px]  flex-col gap-2">
            <label className="text-base" htmlFor="storenumber">
              Instagram
            </label>
            <input
              type="tel"
              id="storenumber"
              className="border bg-gray-200 border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="flex  flex-1 min-w-[200px] flex-col gap-2">
            <label className="text-base" htmlFor="storeaddress">
              X
            </label>
            <input
              type="text"
              id="storeaddress"
              className="border bg-gray-200 border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        <div>
          <button className="bg-five-100 cursor-pointer hover:bg-third-100 text-white px-4 py-2 rounded-lg">
            + Save Change
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
