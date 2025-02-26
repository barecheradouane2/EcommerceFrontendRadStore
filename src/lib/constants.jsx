
import { LayoutDashboard,Shapes,ShoppingBag,Tag,UsersRound } from "lucide-react";


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
    },{

        url:"/admin/users",
        Icon:<UsersRound  />,
        lable:"Manage Users"

    }


]