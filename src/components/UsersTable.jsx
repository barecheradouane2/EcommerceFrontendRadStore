import Avatar from "./Avatar";
import { EllipsisVertical } from 'lucide-react';
import UserAccess from "./UserAccess";



function UsersTable({thlist, bodylist}) {
    return (
        <div className="overflow-auto">
        <table className="   border-collapse w-full mt-7">
          <thead>
            <tr className="bg-main-100 border-b border-gray-200">
              {thlist.map((th, index) => (
                <td key={index} className="px-2 py-2 text-small-100 font-bold  ">
                  {th}
                </td>
              ))}
  
              <td className="px-2 py-2 text-small-100 font-bold  ">Actions</td>
            </tr>
          </thead>
          <tbody>
            {bodylist.map((body, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 border-b border-gray-200"
              >
                <td className="px-2 py-2">{body.id}</td>
                <td className=" px-2 py-2 flex flex-wrap items-center gap-2">
                  {" "}
                  {
                    <Avatar key={body.id} url={body.url} />
                  }{" "}
                  {body.name}
                </td>
                <td className="px-2 py-2"> <UserAccess  Usertype={body.access}/>  </td>
                <td className="px-2 py-2">{body.dateadded}</td>
                <td className="px-2 py-2"> <button className="cursor-pointer hover:bg-small-100"><EllipsisVertical  /> </button> </td>
               
  
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}

export default UsersTable
