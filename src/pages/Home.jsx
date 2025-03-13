import CategoryItem from "../features/Categorie/CategoryItem"
import ProductCard from "../features/product/ProductCard"

function Home() {

  const Categories=[
    {
      id:1,
      name:"Men Mode ",
      url:"/MenCategories.jpg"
    },{
       name:"Women Mode ",
      url:"/WomenCategories.jpg"

    },{
      id:2,
          name:"Discount ",
      url:"/discountCategories.jpg"
    },{
      id:3,
       name:"Accessories ",
      url:"/accessoriesCategories.jpg"

    }
  ]

  const Products=[
    {
      id:1,
      name:'S-530',
      oldPrice:3500,
      Newprice:2800,
      image:"/s530.png",
      hoverImage:"/s530back.png"

    }, {
      id:1,
      name:'S-530',
      oldPrice:3500,
      Newprice:2800,
      image:"/s530.png",
      hoverImage:"/s530back.png"

    }, {
      id:1,
      name:'S-530',
      oldPrice:3500,
      Newprice:2800,
      image:"/s530.png",
      hoverImage:"/s530back.png"

    }, {
      id:1,
      name:'S-530',
      oldPrice:3500,
      Newprice:2800,
      image:"/s530.png",
      hoverImage:"/s530back.png"

    }

  ]


  return (
    <div className="  flex mt-[70px] flex-col gap-10 justify-center">

     <div className=" grid  sm:grid-cols-1 md:grid-cols-2  gap-4  ">
      {
        Categories.map((category)=>(
          <CategoryItem key={category.id} url={category.url} Title={category.name} />
        ))
      }

     </div>

      <div className="">

        <h1 className="text-3xl font-bold mb-10">New Arrivals</h1>
        <div className="flex   justify-between items-center flex-wrap gap-10">
        {
        Products.map((product)=>(
          <ProductCard key={product.id} product={product} />
        ))
      }

        </div>
    

      </div>

    


      
    </div>
  )
}

export default Home

  