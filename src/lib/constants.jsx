
import { LayoutDashboard,Shapes,ShoppingBag,Tag,UsersRound ,CircleUser,Settings   } from "lucide-react";


export const navlinks = [

    {
        url:"/admin",
        Icon:<LayoutDashboard  />,
        lable:"Dashboard"
    },{

        url:"/admin/orders",
        Icon:<ShoppingBag  />,
        lable:"orders"
    },{

        url:"/admin/products",
        Icon:<Tag  />,
        lable:"Product "
    },{

        url:"/admin/categories",
        Icon:<Shapes  />,
        lable:"Categories"
    },
    {
        url:"/admin/profile",
        Icon: <CircleUser />,
        lable:"Profile"

    }
    ,
    {

        url:"/admin/users",
        Icon:<UsersRound  />,
        lable:"Manage Users"

    },{
        url:"/admin/settings",
        Icon:<Settings  />,
        lable:"Settings"
    }


]