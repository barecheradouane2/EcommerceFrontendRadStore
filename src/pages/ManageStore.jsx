import AdminPageHeader from "../components/AdminPageHeader";

import { Upload } from "lucide-react";
import UploadButton from "../components/UploadButton";

function ManageStore() {
  return (
    <div>
      <AdminPageHeader Title="Store Template" />

      <div className="flex flex-col gap-10">
        <div className=" p-4 w-full bg-main-100 rounded-lg">
          <h3 className="text-xl font-semibold">Hero</h3>

          <div className="flex flex-wrap gap-4">
            <div className=" flex-1 min-w-[300px]">
              <div className="flex flex-col gap-2">
                <label className="text-base" htmlFor="storename">
                  Subtitle
                </label>

                <input
                  type="text"
                  id="Subtitle"
                  placeholder="Subtitle"
                  className="border bg-gray-200 border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-base" htmlFor="storename">
                  Title
                </label>

                <input
                  type="text"
                  id="Title"
                  placeholder="Title"
                  className="border bg-gray-200 border-gray-300 rounded-md p-2"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-base" htmlFor="Address">
                  Address
                </label>

                <input
                  type="text"
                  id="Address"
                  placeholder="Address"
                  className="border bg-gray-200 border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            <div className=" flex flex-col justify-between  gap-4 flex-1  min-w-[300px]">
              <div className="flex  flex-1 flex-col gap-2 bg-white w-full h-[100px]"></div>

              <UploadButton>Choose Banner</UploadButton>
            </div>
          </div>
        </div>

        <div className=" p-4 w-full gap-4 bg-main-100 rounded-lg flex flex-wrap">
          <div className=" flex flex-col justify-between  gap-4 flex-1  min-w-[300px]">
            <h3 className="text-xl font-semibold">Banner Home</h3>
            <div className="flex  flex-1 flex-col gap-2 bg-white w-full h-[100px]"></div>

            <UploadButton>Choose Banner</UploadButton>
          </div>

          <div className=" flex flex-col justify-between  gap-4 flex-1  min-w-[300px]">
            <h3 className="text-xl font-semibold">Banner Shop</h3>
            <div className="flex  w-full flex-1 flex-col gap-2 bg-white w-full h-[100px]"></div>

            <UploadButton>Choose Banner</UploadButton>
          </div>
        </div>

        <div className=" p-4 w-full bg-main-100 rounded-lg">
          <h3 className="text-xl font-semibold">List Products</h3>

          <div className="flex  w-full flex-wrap gap-4">
            <div className=" flex-1 flex-col gap-4  min-w-[300px]">
              <label className="text-base" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Title"
                className="border w-full bg-gray-200 border-gray-300 rounded-md p-2"
              />
            </div>
            <div className=" flex-1  flex-col gap-4 min-w-[300px]">
              <label className="text-base" htmlFor="SubTitle">
                SubTitle
              </label>
              <input
                type="text"
                id="SubTitle"
                placeholder="SubTitle"
                className="border w-full bg-gray-200 border-gray-300 rounded-md p-2"
              />
            </div>
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

export default ManageStore;
