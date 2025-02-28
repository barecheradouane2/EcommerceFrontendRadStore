import { Users } from "lucide-react";
import AdminPageHeader from "../components/AdminPageHeader";
import UsersTable from "../components/UsersTable";

function ManageUsers() {
  const userlist = [
    {
      id: 1,
      name: "John Doe",
      access: "Admin",
      url: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      dateadded: "12/12/2021",
    },
    {
      id: 2,
      name: "ahmed",
      access: "User",
      url: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      dateadded: "12/12/2021",
    },
    {
      id: 3,
      name: "Abdou",
      access: "User",
      url: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      dateadded: "12/12/2021",
    },
    {
      id: 4,
      name: "Ali",
      access: "User",
      url: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      dateadded: "12/12/2021",
    },
  ];

  return (
    <>
      <AdminPageHeader
        Title="Manage Users"
        ShowLengthButtonInfo={userlist.length}
        CreateButtonInfo="Create User"
      />

      <UsersTable thlist={["ID", "Name", "Access", "Date Added"]} bodylist={userlist} />
    </>
  );
}

export default ManageUsers;
