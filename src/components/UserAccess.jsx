function UserAccess({Usertype}) {
    return (
    <button className={` text-xs border-1 ${Usertype === "Admin" ? "bg-green-200 text-green-800 border-green-600 " : "bg-red-100 text-red-800 border-red-600"} py-1 px-2 rounded-full `}>
       {Usertype}
    </button>
    )
}

export default UserAccess
